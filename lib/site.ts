export const site = {
  name: "Tyne & Wear Collectors",
  shortName: "TWC",
  tagline: "The North East collectors' community",
  description:
    "A friendly North East community for collectors. We chat Pokémon cards (mainly), mortgages, McFlurries and general life — and post area notifications across Newcastle, Gateshead, Sunderland, Northumberland, Durham and Teesside.",
  url: "https://tynewearcollectors.com",
  discord: "https://discord.gg/hMFpaWxSNp",
  instagram: "https://instagram.com/tynewearcollectors",
} as const;

export const topics = [
  {
    emoji: "🃏",
    title: "Pokémon cards",
    blurb:
      "Drops, god packs, grading debates and binder builds. We cover every Smyths queue, card show and LCS in the region and share when stock actually lands — not when it's already gone.",
  },
  {
    emoji: "🏠",
    title: "Life stuff",
    blurb:
      "House viewings, baby announcements, car troubles, celebratory meals out. The real things that happen between the card drops.",
  },
  {
    emoji: "🍦",
    title: "McFlurries",
    blurb:
      "A sacred topic. Flavour rankings, broken machine reports and strong opinions. The Durham drive-thru machine is fixed, by the way.",
  },
  {
    emoji: "💬",
    title: "General banter",
    blurb:
      "England match watch-parties, takeaway debates, gig chat and whatever else comes up. Less structured Discord, more group chat with decent people.",
  },
] as const;

export const areas = [
  { name: "Newcastle", blurb: "City centre & surrounding" },
  { name: "Gateshead", blurb: "Metrocentre & beyond" },
  { name: "Sunderland", blurb: "Wearside coverage" },
  { name: "Northumberland", blurb: "The whole county" },
  { name: "Durham", blurb: "City & county" },
  { name: "Teesside", blurb: "Middlesbrough & around" },
] as const;
