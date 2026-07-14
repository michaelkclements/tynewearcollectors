"use client";

import { track } from "@vercel/analytics";
import { site } from "@/lib/site";
import { ArrowRightIcon, DiscordIcon } from "@/components/icons";

type Size = "md" | "lg";
type Location = "header" | "hero" | "community" | "footer";

const sizes: Record<Size, string> = {
  md: "h-[38px] pr-12 pl-5 text-sm",
  lg: "h-[52px] pr-16 pl-7 text-base",
};

const knobSizes: Record<Size, string> = {
  md: "h-8 w-8",
  lg: "h-11 w-11",
};

export function DiscordButton({
  size = "md",
  location,
}: {
  size?: Size;
  location?: Location;
}) {
  return (
    <a
      href={site.discord}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Join the ${site.name} Discord server (opens in a new tab)`}
      onClick={() => track("discord_click", { location: location ?? "unknown" })}
      className={`group relative inline-flex shrink-0 items-center justify-center rounded-lg bg-indigo-500 py-0.5 font-semibold whitespace-nowrap text-white transition-colors hover:bg-indigo-600 ${sizes[size]}`}
    >
      <span className="z-10 pr-2">
        <span className="relative inline-flex overflow-hidden">
          <span className="flex translate-y-0 skew-y-0 items-center gap-2 transition duration-500 group-hover:-translate-y-[200%] group-hover:skew-y-6">
            <DiscordIcon className="size-4" />
            Join now
          </span>
          <span
            aria-hidden="true"
            className="absolute flex translate-y-[200%] skew-y-12 items-center gap-2 transition duration-300 group-hover:translate-y-0 group-hover:skew-y-0"
          >
            <DiscordIcon className="size-4" />
            Join now
          </span>
        </span>
      </span>
      <span
        className={`absolute right-[3px] inline-flex items-center justify-end rounded-lg bg-indigo-400/90 transition-[width] duration-400 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:w-[calc(100%-6px)] ${knobSizes[size]}`}
      >
        <span className="mr-2.5 flex items-center justify-center">
          <ArrowRightIcon className="h-4 w-4 text-white" />
        </span>
      </span>
    </a>
  );
}
