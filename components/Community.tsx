import Image from "next/image";
import { DiscordButton } from "@/components/DiscordButton";

export function Community() {
  return (
    <section id="join" className="border-t border-border/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border">
          {/* Skyline backdrop */}
          <Image
            src="/skyline.png"
            alt=""
            fill
            className="object-cover object-bottom"
            aria-hidden="true"
          />
          {/* Dark gradient overlay so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

          {/* Content */}
          <div className="relative z-10 px-6 py-24 text-center sm:px-12 sm:py-32">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Join the community
              </h2>
              <p className="mt-4 text-white/80">
                Whether you want the tip on the next Smyths drop, someone to be
                excited with when you pull something good, or just a decent group
                chat &mdash; there&apos;s a seat for you. Jump in and say hello.
              </p>
              <div className="mt-8 flex justify-center">
                <DiscordButton size="lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
