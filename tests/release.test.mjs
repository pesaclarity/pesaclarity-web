// The version shown under the download buttons.
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  describeRelease,
  fetchAppRelease,
  formatDay,
} from "../src/data/release.mjs";

const apk = (updated) => ({
  name: "pesaclarity-play.apk",
  updated_at: updated,
});

test("a test build shows its build name and when the APK changed", () => {
  assert.deepEqual(
    describeRelease({
      name: "Test build 0.4.0-dev.12",
      tag_name: "test-build",
      published_at: "2026-10-01T00:00:00Z",
      assets: [apk("2026-11-03T09:00:00Z")],
    }),
    { version: "0.4.0-dev.12", date: "2026-11-03T09:00:00Z" },
  );
});

test("a full release shows its tag without the v", () => {
  assert.deepEqual(
    describeRelease({
      name: "",
      tag_name: "v0.4.0",
      assets: [apk("2026-11-04T00:00:00Z")],
    }),
    { version: "0.4.0", date: "2026-11-04T00:00:00Z" },
  );
});

test("a release without the APK shows nothing", () => {
  assert.equal(describeRelease({ name: "Test build 1", assets: [] }), null);
  assert.equal(describeRelease(null), null);
});

test("days are in Nairobi time", () => {
  assert.equal(formatDay("2026-11-02T22:30:00Z"), "3 Nov 2026");
  assert.equal(formatDay("not a date"), null);
});

test("no network, or a missing release, shows nothing", async () => {
  const failing = async () => {
    throw new Error("offline");
  };
  assert.equal(
    await fetchAppRelease("test-build", { fetchImpl: failing }),
    null,
  );
  const missing = async () => ({ ok: false });
  assert.equal(await fetchAppRelease("v9.9.9", { fetchImpl: missing }), null);
});
