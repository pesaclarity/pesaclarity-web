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
  // A GitHub issue form on this public repo until a non-GitHub waitlist exists.
  waitlist: `${org}/pesaclarity-web/issues/new?template=beta-waitlist.yml`,
  brand: `${org}/docs/blob/main/BRAND.md`,
  contributing: `${org}/pesaclarity-web/blob/main/CONTRIBUTING.md`,
  parserContributing: `${org}/ujumbe-parsers/blob/main/CONTRIBUTING.md`,
  parserIssues: `${org}/ujumbe-parsers/issues`,
  webSource: `${org}/pesaclarity-web`,
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
  { q: "When can I start?", a: "Join the waitlist." },
];
