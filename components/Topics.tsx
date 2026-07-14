import { topics } from "@/lib/site";

export function Topics() {
  return (
    <section id="topics" className="border-t border-border/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            What we&apos;re about
          </h2>
          <p className="mt-4 text-zinc-400">
            We&apos;re a friendly bunch from across the North East. Cards are
            the main event, but the conversation goes wherever the day takes it.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((t) => (
            <div
              key={t.title}
              className="group rounded-2xl border border-border bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-orange-500/60"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl bg-surface-2 text-2xl">
                  {t.emoji}
                </div>
                <h3 className="text-lg font-bold">{t.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {t.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
