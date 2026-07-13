import Image from "next/image";
import { DiscordButton } from "@/components/DiscordButton";
import { DiscordIcon } from "@/components/icons";

const notifications = [
  {
    id: "amazon",
    channel: "#amazon",
    time: "Now",
    text: "New restock spotted — 151 Elite Trainer Box just dropped on Amazon 👀",
  },
  {
    id: "general-metro",
    channel: "#general",
    time: "2m",
    text: "<strong>@gateshead</strong> MetroCentre shelves restocked with Prismatic Evolutions boosters.",
  },
  {
    id: "general-mcflurry",
    channel: "#general",
    time: "5m",
    text: "The McFlurry machine at the Durham drive-thru is FIXED. This is not a drill 🍦",
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
            <DiscordButton size="lg" />
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
                      <div className="absolute -bottom-0.5 -right-0.5 rounded-md bg-indigo-500 p-1 text-white">
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
                        className="mt-0.5 text-sm text-zinc-200"
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
