import Image from "next/image";
import { site } from "@/lib/site";
import { InstagramIcon } from "@/components/icons";
import { DiscordButton } from "@/components/DiscordButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <a href="#top" aria-label="Go to homepage" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Tyne & Wear Collectors logo"
            width={36}
            height={36}
            className="rounded-xl"
            priority
          />
          <span className="text-sm font-bold tracking-tight sm:text-base">
            Tyne &amp; Wear <span className="text-amber-400">Collectors</span>
          </span>
        </a>

        <div className="flex items-center gap-3">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram (opens in a new tab)"
            className="flex size-9 items-center justify-center rounded-full bg-surface-2 text-zinc-300 transition duration-200 hover:scale-110 hover:text-white"
          >
            <InstagramIcon className="size-4" />
          </a>
          <DiscordButton />
        </div>
      </div>
    </header>
  );
}
