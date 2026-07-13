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
    title: "Trading Cards",
    blurb:
      "Drops, god packs, grading debates and binder builds. We cover every Smyths queue, card show and LCS in the region and share when stock actually lands — not when it's already gone.",
  },
  {
    emoji: "🎆",
    title: "Northern Life",
    blurb:
      "House viewings, baby announcements, car troubles, celebratory meals out and strong opinions on local takeaways. The real things that happen between the card drops.",
  },
  {
    emoji: "🍦",
    title: "McFlurries",
    blurb:
      "We have a custom McFlurry emoji. It gets deployed on the daily scoreboard. Nobody's entirely sure how it started. Nobody's stopping it.",
  },
  {
    emoji: "🤪",
    title: "Manic behaviour",
    blurb:
      "Queuing two nights for a card box, bidding on eBay live gone midnight for postage you'll never recoup, starting a pizza debate at 11pm. You know the ones.",
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
