import Image from "next/image";
import { site } from "@/lib/site";
import { DiscordIcon, InstagramIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Tyne & Wear Collectors logo"
            width={32}
            height={32}
            className="rounded-xl"
          />
          <span className="text-sm font-bold">
            Tyne &amp; Wear <span className="text-amber-400">Collectors</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.discord}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join our Discord (opens in a new tab)"
            className="flex size-9 items-center justify-center rounded-full bg-surface-2 text-zinc-300 transition duration-200 hover:scale-110 hover:text-white"
          >
            <DiscordIcon className="size-4" />
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram (opens in a new tab)"
            className="flex size-9 items-center justify-center rounded-full bg-surface-2 text-zinc-300 transition duration-200 hover:scale-110 hover:text-white"
          >
            <InstagramIcon className="size-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-border/40">
        <p className="mx-auto w-full max-w-6xl px-5 py-5 text-center text-xs text-zinc-500 sm:text-left">
          © {new Date().getFullYear()} {site.name}. A community for the North
          East, by the North East.
        </p>
      </div>
    </footer>
  );
}
