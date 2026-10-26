// Checks the built site in dist/ against the site's promises: no client JS,
// nothing loaded from other servers, and the basics every page needs.
// Run `npm run build` first.
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

const dist = new URL("../dist/", import.meta.url).pathname;
const base = (process.env.BASE_PATH ?? "").replace(/\/+$/, "");

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(path);
    return entry.name.endsWith(".html") ? [path] : [];
  });
}

assert.ok(existsSync(dist), "dist/ is missing; run `npm run build` first");
const pages = htmlFiles(dist).map((path) => ({
  name: relative(dist, path),
  html: readFileSync(path, "utf8"),
}));

test("builds the expected pages", () => {
  const names = pages.map((p) => p.name).sort();
  assert.deepEqual(names, ["404.html", "index.html", "privacy/index.html"]);
});

for (const { name, html } of pages) {
  test(`${name}: has language, title, description and one h1`, () => {
    assert.match(html, /<html lang="en-KE"/);
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.equal(html.match(/<h1[\s>]/g)?.length, 1);
    assert.match(html, /<main id="main"/);
  });

  test(`${name}: has Open Graph tags and a favicon`, () => {
    for (const prop of ["og:title", "og:description", "og:image", "og:url"]) {
      assert.match(
        html,
        new RegExp(`<meta property="${prop}" content="[^"]+"`),
      );
    }
    assert.ok(
      html.includes(`<link rel="icon" href="${base}/favicon.svg"`),
      "favicon link",
    );
  });

  test(`${name}: ships no JavaScript`, () => {
    assert.doesNotMatch(html, /<script\b/i);
    assert.doesNotMatch(html, /\son[a-z]+="/i);
  });

  test(`${name}: loads nothing from other servers`, () => {
    const loads = [
      ...html.matchAll(
        /<(?:img|script|iframe|source|video|audio)\b[^>]*\ssrc="([^"]+)"/gi,
      ),
      ...html.matchAll(
        /<link\b(?=[^>]*\srel="(?:stylesheet|preload|modulepreload|icon|apple-touch-icon)")[^>]*\shref="([^"]+)"/gi,
      ),
    ].map((m) => m[1]);
    const external = loads.filter((url) => /^(https?:)?\/\//.test(url));
    assert.deepEqual(external, []);
    assert.doesNotMatch(html, /fonts\.(googleapis|gstatic)\.com/);
  });
}

test("privacy summary is marked as a draft pending legal review", () => {
  const privacy = pages.find((p) => p.name === "privacy/index.html");
  assert.ok(privacy);
  assert.match(privacy.html, /Draft, pending legal review/);
  assert.match(privacy.html, /PRODUCT-SPEC\.md/);
});

test("404 page is not indexed", () => {
  const notFound = pages.find((p) => p.name === "404.html");
  assert.ok(notFound);
  assert.match(notFound.html, /<meta name="robots" content="noindex"/);
});

test("sitemap lists the public pages and not the 404", () => {
  const sitemap = readFileSync(join(dist, "sitemap-0.xml"), "utf8");
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (m) => new URL(m[1]).pathname,
  );
  assert.deepEqual(locs.sort(), [`${base}/`, `${base}/privacy/`]);
  assert.match(
    readFileSync(join(dist, "robots.txt"), "utf8"),
    /Sitemap: https?:\/\/\S+\/sitemap-index\.xml/,
  );
});

test("stylesheets use only self-hosted fonts", () => {
  const assets = join(dist, "_astro");
  const css = readdirSync(assets)
    .filter((f) => f.endsWith(".css"))
    .map((f) => readFileSync(join(assets, f), "utf8"))
    .join("\n");
  assert.match(css, /font-family:\s*["']?Space Grotesk/);
  assert.match(css, /font-family:\s*["']?Inter/);
  assert.doesNotMatch(css, /url\((["']?)(https?:)?\/\//);
  assert.doesNotMatch(css, /@import/);
});
