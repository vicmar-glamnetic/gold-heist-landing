// Central content + config for the Gold Heist Trading landing page.
// Scraped and modernized from the original ghttrading.co (carrd.co) site.

// Every registration gateway on the site currently routes through Vicmar.
// The per-member keys are kept so individual links can be restored later.
const VICMAR_REGISTER =
  "https://accm.global/account/register?shareUserSetId=e7b60f12f2c943449";

export const REGISTER_LINKS = {
  kyle: VICMAR_REGISTER,
  angel: VICMAR_REGISTER,
  ian: VICMAR_REGISTER,
  kerby: VICMAR_REGISTER,
  pogs: VICMAR_REGISTER,
  maku: VICMAR_REGISTER,
  wayne: VICMAR_REGISTER,
  ernest: VICMAR_REGISTER,
  vicmar: VICMAR_REGISTER,
} as const;

// Primary CTA used across the site.
export const PRIMARY_REGISTER = VICMAR_REGISTER;

export const SOCIAL = {
  facebook: "https://www.facebook.com/GoldHeistTraders.PH",
  discord: "https://discord.gg/Vzj8MNwvH",
} as const;

// Member community platform.
export const COMMUNITY_URL = "https://community.ghttrading.co";

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
  { id: "v-shkiI4C6o", title: "How to make an ACCM account" },
  { id: "HvZ4L-SHgis", title: "How to deposit using ACCM" },
  { id: "FSdrvNH6jSE", title: "How to connect ACCM to MT5" },
] as const;

export type TeamMember = {
  name: string;
  role: string;
  register?: string;
};

export const TEAM: TeamMember[] = [
  { name: "Kyle", role: "Founder", register: REGISTER_LINKS.kyle },
  { name: "Vicmar", role: "Co-Founder", register: REGISTER_LINKS.vicmar },
  { name: "Angel", role: "Founder", register: REGISTER_LINKS.angel },
  { name: "Pogs", role: "Founder", register: REGISTER_LINKS.pogs },
  { name: "Ian", role: "Founder", register: REGISTER_LINKS.ian },
  { name: "Kerby", role: "Founder", register: REGISTER_LINKS.kerby },
  { name: "Ernest", role: "Founder", register: REGISTER_LINKS.ernest },
  { name: "Maku", role: "Co-Founder", register: REGISTER_LINKS.maku },
  { name: "Wayne", role: "Co-Founder", register: REGISTER_LINKS.wayne },
  { name: "Roselle", role: "ACCM Manager" },
];

export const SESSION_TIME = "09:30 PM PH · 09:30 AM EST — Monday to Friday";
