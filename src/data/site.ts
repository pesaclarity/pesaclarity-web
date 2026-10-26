/** Site-wide names, links and copy that more than one page uses. */

const org = "https://github.com/pesaclarity";

export const site = {
  name: "Pesa Clarity",
  promise: "Your money, made clear, without giving your data away.",
  description:
    "A free, ad-free, open-source Android app that turns your M-Pesa and bank messages into a daily plan. All analysis runs on your phone.",
  locale: "en_KE",
} as const;

export const links = {
  github: org,
  // A GitHub issue form on this public repo until a non-GitHub waitlist exists.
  waitlist: `${org}/pesaclarity-web/issues/new?template=beta-waitlist.yml`,
  spec: `${org}/docs/blob/main/spec/PRODUCT-SPEC.md`,
  specPrivacy: `${org}/docs/blob/main/spec/PRODUCT-SPEC.md#architecture-privacy-and-data-model`,
  brand: `${org}/docs/blob/main/BRAND.md`,
  contributing: `${org}/pesaclarity-web/blob/main/CONTRIBUTING.md`,
  parserContributing: `${org}/ujumbe-parsers/blob/main/CONTRIBUTING.md`,
  parserIssues: `${org}/ujumbe-parsers/issues`,
  webSource: `${org}/pesaclarity-web`,
} as const;

export interface Principle {
  title: string;
  body: string;
}

/** The five principles from the product spec, in its order. */
export const principles: readonly Principle[] = [
  {
    title: "Free forever, no ads.",
    body: "Every feature is free for every user. No premium tier, no paywalls, no advertising.",
  },
  {
    title: "Your data stays yours, on your phone.",
    body: "Parsing, analysis and model training run on the device. The server keeps only your sign-in, backups it cannot read, and federated model updates.",
  },
  {
    title: "Plain answers, not spreadsheets.",
    body: "Seven screens replace a 17-tab workbook, and every number taps through to the transactions behind it.",
  },
  {
    title: "Export in two taps.",
    body: "Any view exports to CSV, Excel or PDF. A full backup is always one menu away.",
  },
  {
    title: "Honest money maths.",
    body: "Moving money between your own accounts never counts as spending, every import reconciles to its statement, and family loans count as real debts.",
  },
];

export interface Repo {
  name: string;
  codename?: string;
  what: string;
  licence: string;
}

export const repos: readonly Repo[] = [
  {
    name: "pesaclarity-app",
    what: "The Flutter Android app and its on-phone engine",
    licence: "AGPL-3.0",
  },
  {
    name: "ujumbe-parsers",
    codename: "ujumbe",
    what: "SMS parser packs per bank and wallet, with synthetic test fixtures",
    licence: "Apache-2.0",
  },
  {
    name: "pesaclarity-backend",
    codename: "ngome",
    what: "Sign-in, the encrypted backup vault and federated-learning aggregation",
    licence: "AGPL-3.0",
  },
  {
    name: "pesaclarity-ml",
    codename: "akili",
    what: "On-phone categoriser training, privacy settings and audits",
    licence: "AGPL-3.0 (code); weights under a separate model licence",
  },
  {
    name: "pesaclarity-web",
    codename: "dirisha",
    what: "This website",
    licence: "AGPL-3.0 (code), CC BY 4.0 (text and images)",
  },
  {
    name: "docs",
    what: "Product spec, brand guide and decisions",
    licence: "CC BY 4.0",
  },
];

export const repoUrl = (name: string): string => `${org}/${name}`;
