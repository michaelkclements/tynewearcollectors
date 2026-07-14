import Image from "next/image";
import { DiscordButton } from "@/components/DiscordButton";
import { DiscordIcon } from "@/components/icons";

const notifications = [
  {
    id: "amazon",
    channel: "#amazon",
    time: "Now",
    text: "<strong className='text-amber-400'>@Amazon</strong> Invites are sent out now, check out <a href='https://www.amazon.co.uk/s?k=Pokemon+tcg&rh=n%3A26954013031%2Cp_85%3A20930949031%2Cp_123%3A325733%2Cp_6%3AA3P5ROKL5A1OLE&s=date-desc-rank&dc&ds=v1%3A%2FAJH5l6S%2BV%2FFC2Re2wpwRIM8bw%2BA1UBm740aP2t6RlA&crid=3EOR1K3ND82UJ&qid=1774339516&rnid=367778011&sprefix=pokemon+tcg%2Caps%2C264&tag=tynewearcollectors-21&ref=sr_st_date-desc-rank'>this link.</a>",
  },
  {
    id: "general-metro",
    channel: "#general",
    time: "2m",
    text: "<strong className='text-amber-400'>@gateshead</strong> Metro Smyth's have got quite a few AH bundles left and some pins",
  },
  {
    id: "general-mcflurry",
    channel: "#general",
    time: "5m",
    text: "Don’t believe him I didn’t even get a McFlurry 🍦",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-center overflow-hidden bg-grid"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:gap-8 md:py-24">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-zinc-300">
            <span className="size-2 animate-pulse-soft rounded-full bg-orange-500" />
            North East England
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            The North East{" "}
            <span className="text-amber-400">collectors&apos;</span> community
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg">
            Tyne & Wear region chat for slightly unhinged collectors. Geordies,
            Mackems, Smoggies and even a couple Loiners included.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <DiscordButton size="lg" location="hero" />
            <span className="text-sm text-zinc-500">
              Free to join · No spam · Adults only
            </span>
          </div>
        </div>

        {/* Floating notification stack */}
        <div className="relative mx-auto w-full max-w-md md:mx-0">
          <div className="space-y-4">
            {notifications.map((n, i) => (
              <div
                key={n.id}
                className={
                  i === 0
                    ? "animate-float"
                    : i === 1
                      ? "animate-float-slow md:ml-8"
                      : "animate-float md:ml-4"
                }
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <div className="rounded-3xl border border-border bg-surface/90 p-4 pr-6 shadow-xl shadow-black/40 backdrop-blur">
                  <div className="flex items-center gap-4">
                    <div className="relative shrink-0">
                      <Image
                        src="/logo.png"
                        alt=""
                        width={48}
                        height={48}
                        className="size-12 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 rounded-md bg-indigo-500 p-1">
                        <DiscordIcon className="size-3" />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-indigo-400">
                          {n.channel}
                        </p>
                        <span className="text-xs text-zinc-500">{n.time}</span>
                      </div>
                      <p
                        className="mt-0.5 text-sm"
                        dangerouslySetInnerHTML={{ __html: n.text }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
