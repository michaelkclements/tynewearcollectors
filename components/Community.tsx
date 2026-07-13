import { DiscordButton } from "@/components/DiscordButton";

export function Community() {
  return (
    <section id="join" className="border-t border-border/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-grid px-6 py-16 text-center sm:px-12">
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Join the community
            </h2>
            <p className="mt-4 text-zinc-300">
              Whether you want the tip on the next Smyths drop, someone to be
              excited with when you pull something good, or just a decent group
              chat — there&apos;s a seat for you. Jump in and say hello.
            </p>
            <div className="mt-8 flex justify-center">
              <DiscordButton size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
