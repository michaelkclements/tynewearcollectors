import { areas } from "@/lib/site";

export function Areas() {
  return (
    <section id="areas" className="border-t border-border/60 bg-surface/30">
      <div className="mx-auto w-full max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Area notifications
          </h2>
          <p className="mt-4 text-zinc-400">
            When something worth knowing pops up nearby, we shout about it. We
            post alerts across the whole of the North East.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.name}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition duration-200 hover:border-orange-500/60"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-6 shrink-0 text-amber-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <h3 className="font-bold">{area.name}</h3>
                <p className="text-sm text-zinc-400">{area.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
