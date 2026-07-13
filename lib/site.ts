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
      "Our bread and butter. Pulls, deals, grading, trades and the hunt for that one card.",
  },
  {
    emoji: "🏠",
    title: "Mortgages",
    blurb:
      "Rates, first-time-buyer chat and the occasional celebratory completion post.",
  },
  {
    emoji: "🍦",
    title: "McFlurries",
    blurb:
      "Broken machine sightings, flavour rankings and strong, unfiltered opinions.",
  },
  {
    emoji: "💬",
    title: "General life",
    blurb:
      "Whatever's going on — a proper, welcoming community that just likes a natter.",
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
