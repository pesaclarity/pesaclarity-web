/** Site-wide names, links and copy that more than one page uses. */

const org = "https://github.com/pesaclarity";

export const site = {
  name: "Pesa Clarity",
  promise: "Know where your pesa goes.",
  description:
    "Your M-Pesa and bank SMS, turned into a simple daily budget. Free, private, and on your phone.",
  locale: "en_KE",
} as const;

export const links = {
  github: org,
  releases: `${org}/pesaclarity-app/releases`,
  appIssues: `${org}/pesaclarity-app/issues`,
  // The app repo: the star that shows people the project is alive.
  star: `${org}/pesaclarity-app`,
  brand: `${org}/docs/blob/main/BRAND.md`,
  contributing: `${org}/pesaclarity-web/blob/main/CONTRIBUTING.md`,
  // The guide every repo shares.
  contribute: `${org}/.github/blob/main/CONTRIBUTING.md`,
  parserContributing: `${org}/ujumbe-parsers/blob/main/CONTRIBUTING.md`,
  parserIssues: `${org}/ujumbe-parsers/issues`,
  webSource: `${org}/pesaclarity-web`,
} as const;

// The app release the download buttons point to: a tag such as v0.2.0, or
// "latest" for the newest full release. Until the first one, the test build.
export const releaseTag: string =
  import.meta.env.APP_RELEASE_TAG || "test-build";
const releaseFiles =
  releaseTag === "latest"
    ? `${links.releases}/latest/download`
    : `${links.releases}/download/${releaseTag}`;

/**
 * APKs on the app's GitHub Releases, one per flavour and chip: the plain
 * name is for most phones (64-bit), `-32bit` for older ones.
 */
export const downloads = {
  android: `${releaseFiles}/pesaclarity-play.apk`,
  android32: `${releaseFiles}/pesaclarity-play-32bit.apk`,
  fdroid: `${releaseFiles}/pesaclarity-foss.apk`,
  fdroid32: `${releaseFiles}/pesaclarity-foss-32bit.apk`,
  testBuild: releaseTag === "test-build",
} as const;

export interface Faq {
  q: string;
  a: string;
}

export const faqs: readonly Faq[] = [
  { q: "Is it free?", a: "Yes, every feature." },
  { q: "Does it need my PIN?", a: "It reads only your SMS." },
  { q: "Who sees my money?", a: "Only you." },
  { q: "iPhone?", a: "Coming after the Android beta." },
  { q: "When can I start?", a: "Today. Download it for Android." },
  {
    q: "Which download?",
    a: "Android has Google sign-in. F-Droid has no Google services.",
  },
];
