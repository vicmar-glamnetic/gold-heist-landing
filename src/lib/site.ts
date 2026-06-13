// Central content + config for the Gold Heist Trading landing page.
// Scraped and modernized from the original ghttrading.co (carrd.co) site.

export const REGISTER_LINKS = {
  kyle: "https://m.accm.global/account/register?shareUserSetId=24e5369694f849bf9",
  angel: "https://m.accm.global/account/register?shareUserSetId=ddde72ad9ac5472b9",
  ian: "https://accm.global/account/register?shareUserSetId=cf4000db26724ca4b",
  jake: "https://accm.global/account/register?shareUserSetId=a91a2d7590844ee79",
  kerby: "https://accm.global/account/register?shareUserSetId=dddd695451e14cf18",
  pogs: "https://accm.global/account/register?shareUserSetId=e243bf78b50b4c618",
  maku: "https://accm.global/account/register?shareUserSetId=6082c353a44746179",
  wayne: "https://accm.global/account/register?shareUserSetId=fc44bb6fc65145389",
} as const;

// Primary CTA used across the site.
export const PRIMARY_REGISTER = REGISTER_LINKS.kyle;

export const SOCIAL = {
  facebook: "https://www.facebook.com/GoldHeistTraders.PH",
  discord: "https://discord.com/invite/sumNAN88H",
} as const;

export const STATS = [
  { value: "87%", label: "Signal Win Rate" },
  { value: "1×", label: "Live Session / Day" },
  { value: "$0", label: "Subscription Cost" },
  { value: "<5 min", label: "Setup Time" },
] as const;

export const PERKS = [
  "Unlimited VIP gold signals",
  "Live Discord trading sessions, once daily",
  "Free education & 1-on-1 mentorship",
  "Real-time market breakdowns & updates",
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Create your ACCM account",
    body: "Register through our secure community gateway in under five minutes — no credit card required.",
  },
  {
    n: "02",
    title: "Fund your account",
    body: "Make your first deposit and automatically unlock the 100% welcome bonus — instantly doubling your margin.",
  },
  {
    n: "03",
    title: "Connect ACCM to MT5",
    body: "Link your account to MetaTrader 5 and step straight into our VIP gold setups and live sessions.",
  },
] as const;

export const VIDEOS = [
  { id: "v-shkiI4C6o", title: "Inside the Gold Heist community" },
  { id: "HvZ4L-SHgis", title: "How our free VIP signals work" },
  { id: "FSdrvNH6jSE", title: "Getting started, step by step" },
] as const;

export type TeamMember = {
  name: string;
  role: string;
  register?: string;
};

export const TEAM: TeamMember[] = [
  { name: "Kyle", role: "Founder", register: REGISTER_LINKS.kyle },
  { name: "Angel", role: "Founder", register: REGISTER_LINKS.angel },
  { name: "Pogs", role: "Founder", register: REGISTER_LINKS.pogs },
  { name: "Ian", role: "Founder", register: REGISTER_LINKS.ian },
  { name: "Kerby", role: "Founder", register: REGISTER_LINKS.kerby },
  { name: "Maku", role: "Co-Founder", register: REGISTER_LINKS.maku },
  { name: "Jake", role: "Co-Founder", register: REGISTER_LINKS.jake },
  { name: "Wayne", role: "Co-Founder", register: REGISTER_LINKS.wayne },
  { name: "Roselle", role: "ACCM Manager" },
];

export const SESSION_TIME = "09:30 PM PH · 09:30 AM EST — Monday to Friday";
