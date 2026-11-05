/** Site-wide names, links and copy that more than one page uses. */

const org = "https://github.com/pesaclarity";

export const site = {
  name: "Pesa Clarity",
  promise: "Know where your pesa goes.",
  description:
    "Your M-Pesa and bank SMS, turned into a simple daily budget. Free, private, and on your phone.",
  locale: "en_KE",
} as const;

/** Who answers data protection requests, as the privacy policy names them. */
export const dpo = {
  name: "Dan Njuguna",
  email: "njugunahdann@gmail.com",
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
  // Where the message rules live, so anyone can add their bank.
  parsers: `${org}/ujumbe-parsers`,
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

export interface Account {
  name: string;
  /** Shown under the name, for accounts that still need a hand. */
  note?: string;
}

const learning =
  "You check new messages once while the app learns their wording.";

/** Banks and wallets whose SMS the app reads. */
export const accounts: readonly Account[] = [
  { name: "M-Pesa" },
  { name: "Airtel Money", note: learning },
  { name: "Equity Bank" },
  { name: "I&M Bank" },
  { name: "KCB" },
  { name: "Loop", note: learning },
];

/** A card: a short title and one line under it. */
export interface Item {
  title: string;
  body: string;
}

/** How big the Android download is, for the download buttons. */
export const downloadSize = "About 19 MB on most phones";

/** What makes Pesa Clarity different. */
export const different: readonly Item[] = [
  {
    title: "On your phone",
    body: "Your records and every sum stay on your phone, and work without internet.",
  },
  {
    title: "Private by design",
    body: "Only you see your money. Backups are encrypted so only you can open them.",
  },
  { title: "Free for everyone", body: "Every feature, ad-free." },
  {
    title: "Open source",
    body: "Anyone can check the code that handles their money.",
  },
  { title: "Plain English", body: "Clear words, and one number first." },
  {
    title: "Made for Kenyan money",
    body: "M-Pesa, Fuliza, Saccos, banks, KES and KRA tax estimates.",
  },
  { title: "Small download", body: `${downloadSize}.` },
  {
    title: "For every part of life",
    body: "You, your home, your business, your group and more, each kept apart.",
  },
];

/** The kinds of space, in the app's own words. */
export const spaces: readonly Item[] = [
  { title: "Personal", body: "Your own money and plan" },
  {
    title: "Business",
    body: "Sales, stock, wages and profit, for products, services or both",
  },
  { title: "Household", body: "Shared home costs with family" },
  { title: "Savings group", body: "Contributions, payouts and loans" },
  { title: "Rental property", body: "Rent in, repairs and profit" },
  { title: "Farm", body: "Inputs, labour and harvest sales" },
  { title: "Something else", body: "A project or anything to keep apart" },
];

/** Everyday money, in every space. */
export const moneyFeatures: readonly Item[] = [
  {
    title: "Reads your SMS",
    body: "M-Pesa, Airtel Money and bank alerts become your records, on your phone.",
  },
  {
    title: "Past months from a statement",
    body: "Import an M-Pesa or bank statement to start with your history.",
  },
  {
    title: "Safe to spend today",
    body: "One number for today that still covers your bills.",
  },
  {
    title: "Until the next money",
    body: "For gigs, family support or seasonal money, a daily amount that lasts.",
  },
  {
    title: "A payday plan",
    body: "Split money across bills, debts, savings and living.",
  },
  {
    title: "Week by week",
    body: "This week against a usual one, for business and gig money.",
  },
  {
    title: "Rainy day fund",
    body: "Set money aside in good weeks and use it in lean ones.",
  },
  { title: "Goals", body: "Save for what matters, with a date to get there." },
  {
    title: "Debts",
    body: "Your debt-free date, a Fuliza tracker and who owes who.",
  },
  { title: "Bills and reminders", body: "What's due, in good time." },
  {
    title: "Subscriptions",
    body: "Every repeat payment and what it costs a year.",
  },
  {
    title: "Money health score",
    body: "A score with what helps each part of it.",
  },
  {
    title: "Insights",
    body: "What changed this month and where money goes. Tap any figure to see why.",
  },
  {
    title: "Your currency",
    body: "Pick your base currency; others convert at public rates.",
  },
  {
    title: "Message reader",
    body: "New message wording gets its amount and payee suggested for you to check.",
  },
  {
    title: "Learns your categories",
    body: "Suggestions improve from your choices, on your phone.",
  },
  {
    title: "Encrypted backups",
    body: "Back up each space so only you can open it.",
  },
  { title: "App lock", body: "A PIN or your fingerprint keeps it yours." },
];

/** What a business space adds. */
export const businessFeatures: readonly Item[] = [
  {
    title: "Today",
    body: "Sell, Bought, Got paid and Paid, one tap each, with today's profit.",
  },
  {
    title: "Sell and Pay",
    body: "Pick items, take cash, M-Pesa or credit, and share a receipt.",
  },
  {
    title: "Money",
    body: "What Cash, M-Pesa and Bank hold, with each day's money in and out.",
  },
  {
    title: "People",
    body: "Customers who owe you and suppliers you owe, with statements.",
  },
  {
    title: "Reminders",
    body: "Friendly messages you can change, sent by SMS, WhatsApp or any app.",
  },
  {
    title: "Stock",
    body: "Items, prices, restocks and counts, with a nudge when running low.",
  },
  { title: "Close the day", body: "Count the drawer and see that it matches." },
  {
    title: "Pay yourself",
    body: "Move your pay to Personal, so business and home stay apart.",
  },
  {
    title: "Proper books, plain words",
    body: "Every sale and payment is recorded properly, in everyday words.",
  },
  {
    title: "Insights and reports",
    body: "How the business is doing, and reports for a Sacco, a loan or an accountant.",
  },
  {
    title: "Tax estimates",
    body: "Turnover Tax, VAT and income tax estimates from your records, with rules that ship with the app.",
  },
  { title: "Receipts", body: "After every sale, as a picture, a PDF or text." },
  {
    title: "Invoices",
    body: "From items or hours, with withholding tax worked out, your M-PESA QR and attached documents.",
  },
  { title: "Hours", body: "Log hours by day and week, then bill them." },
  {
    title: "Products, services or both",
    body: "The tabs fit what you sell.",
  },
];

/** How the app and its documents look. */
export const lookFeatures: readonly Item[] = [
  {
    title: "Light or dark",
    body: "Follow your phone, or always light or dark.",
  },
  { title: "Text fields", body: "Underlined or boxed, across the app." },
  {
    title: "Reports and documents",
    body: "Choose the cover, colour, charts, wording and branding.",
  },
];

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
    q: "Does it work without internet?",
    a: "Yes. Your records and sums are on your phone.",
  },
  {
    q: "Can I use it for my business?",
    a: "Yes. Add a business space for sales, stock and who owes you.",
  },
  { q: "How big is the download?", a: `${downloadSize}.` },
  {
    q: "Which download?",
    a: "Android has Google sign-in. F-Droid has no Google services.",
  },
];
