// The app build the download buttons point to, read from GitHub Releases
// when the site is built. The app's APK workflow rebuilds the site after it
// publishes, so the version shown is the one people download.

const api = "https://api.github.com/repos/pesaclarity/pesaclarity-app/releases";

/**
 * The version and date of a GitHub release, or null when it has no APK.
 * @param {any} release the release as the GitHub API returns it
 * @returns {{ version: string, date: string } | null}
 */
export function describeRelease(release) {
  const apk = (release?.assets ?? []).find(
    (a) => a?.name === "pesaclarity-play.apk",
  );
  if (!apk) return null;
  const name = String(release.name ?? "").trim();
  const tag = String(release.tag_name ?? "").trim();
  // "Test build 0.4.0-dev.12" or tag "v0.4.0".
  const version =
    name.replace(/^Test build\s+/i, "").trim() || tag.replace(/^v/, "");
  if (!version || version === "test-build") return null;
  return { version, date: apk.updated_at ?? release.published_at };
}

/** `3 Nov 2026`, in Nairobi time. */
export function formatDay(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Africa/Nairobi",
  }).format(date);
}

/**
 * Reads the release for [tag] ("latest", "test-build" or a version tag).
 * A build without network still succeeds: it just shows no version.
 */
export async function fetchAppRelease(tag, { token, fetchImpl = fetch } = {}) {
  const url = tag === "latest" ? `${api}/latest` : `${api}/tags/${tag}`;
  try {
    const response = await fetchImpl(url, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) return null;
    return describeRelease(await response.json());
  } catch {
    return null;
  }
}
