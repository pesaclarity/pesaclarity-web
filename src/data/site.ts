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
  brand: `${org}/docs/blob/main/BRAND.md`,
  contributing: `${org}/pesaclarity-web/blob/main/CONTRIBUTING.md`,
  parserContributing: `${org}/ujumbe-parsers/blob/main/CONTRIBUTING.md`,
  parserIssues: `${org}/ujumbe-parsers/issues`,
  webSource: `${org}/pesaclarity-web`,
  webIssues: `${org}/pesaclarity-web/issues`,
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
  /** Private repos are listed without a link until they are published. */
  public: boolean;
}

export const repos: readonly Repo[] = [
  {
    name: "pesaclarity-app",
    public: false,
    what: "The Flutter Android app and its on-phone engine",
    licence: "AGPL-3.0",
  },
  {
    name: "ujumbe-parsers",
    public: true,
    codename: "ujumbe",
    what: "SMS parser packs per bank and wallet, with synthetic test fixtures",
    licence: "Apache-2.0",
  },
  {
    name: "pesaclarity-backend",
    public: false,
    codename: "ngome",
    what: "Sign-in, the encrypted backup vault and federated-learning aggregation",
    licence: "AGPL-3.0",
  },
  {
    name: "pesaclarity-ml",
    public: false,
    codename: "akili",
    what: "On-phone categoriser training, privacy settings and audits",
    licence: "AGPL-3.0 (code); weights under a separate model licence",
  },
  {
    name: "pesaclarity-web",
    public: true,
    codename: "dirisha",
    what: "This website",
    licence: "AGPL-3.0 (code), CC BY 4.0 (text and images)",
  },
  {
    name: "docs",
    public: false,
    what: "Product spec, brand guide and decisions",
    licence: "CC BY 4.0",
  },
];

export const repoUrl = (name: string): string => `${org}/${name}`;

export interface Faq {
  q: string;
  a: string;
}

export const faqs: readonly Faq[] = [
  {
    q: "Is it really free?",
    a: "Yes. Every feature is free for every user, with no premium tier, paywalls or ads. Companies that want to use the code without sharing changes can buy a commercial licence, which helps fund the project.",
  },
  {
    q: "Does it need my M-Pesa PIN or bank password?",
    a: "No. It reads SMS from the banks and wallets you choose. It never asks for a PIN, a password or a bank login, and never connects to a bank.",
  },
  {
    q: "Can you see my transactions?",
    a: "No. Reading and analysis run on your phone. Our server holds only your sign-in, backups encrypted with your passphrase, and optional noised model updates.",
  },
  {
    q: "Does it work on iPhone?",
    a: "Not yet. iOS lets no app read SMS, so Android comes first. The iPhone version is planned after the Android beta: it will use Apple's Shortcuts to pass each new money message to the app, with statement imports as a backup, and still keep everything on the phone.",
  },
  {
    q: "Which banks and wallets are supported?",
    a: "M-Pesa first, then banks, SACCOs and wallets as parser packs are added. If yours is missing, anyone can add it.",
  },
  {
    q: "What happens if I lose my phone?",
    a: "Restore from your encrypted backup with your passphrase or printable recovery key. We cannot read or reset it, so keep the recovery key safe.",
  },
  {
    q: "When can I use it?",
    a: "Pesa Clarity is in pre-alpha. A private beta for 30 to 50 people in Kenya opens once the Android app passes Play review. Join the waitlist to hear first.",
  },
];
