import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Temporary AES 2026 announcement shown at the top of the homepage hero.
 * Hides itself automatically once the meeting is over, so it can be
 * removed from the codebase whenever convenient.
 */

// TODO: fill in once confirmed
const BOOTH_NUMBER = "1307";

// End of Dec 8, 2026 in Denver (MST, UTC-7)
const HIDE_AFTER = new Date("2026-12-09T07:00:00Z");

export default function AESBanner() {
  if (new Date() >= HIDE_AFTER) return null;

  return (
    <Link
      to="/contact"
      className="group mb-12 inline-flex max-w-full items-center gap-4 rounded-full border border-white/30 bg-black/45 py-3.5 pl-3.5 pr-5 sm:py-4 sm:pl-4 text-left text-slate-100 shadow-lg shadow-black/30 backdrop-blur-md transition-all hover:border-white/50 hover:bg-black/55 sm:gap-6 sm:pr-8"
      aria-label={`Meet Neurologic Solutions at AES 2026, December 4 to 8 in Denver, booth ${BOOTH_NUMBER}. Contact us to book a meeting.`}
    >
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-[#d4b5ff] to-[#ffa94d] px-4 py-1.5 text-sm font-bold sm:px-6 sm:py-2.5 sm:text-base uppercase tracking-widest text-slate-900">
        <CalendarDays className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden />
        AES 2026
      </span>

      <span className="text-lg leading-6 sm:text-2xl sm:leading-8">
        <span className="font-semibold text-white">
          Visit us at{" "}
          <span className="whitespace-nowrap">Booth {BOOTH_NUMBER}</span>
        </span>
        <span className="hidden text-slate-200 sm:inline">
          {" "}
          · Dec 4–8 · Denver, CO
        </span>
        <span className="block text-base text-slate-200 sm:hidden">
          Dec 4–8 · Denver
        </span>
      </span>

      <ArrowRight
        className="h-5 w-5 shrink-0 text-slate-200 sm:h-7 sm:w-7 transition-transform group-hover:translate-x-0.5 group-hover:text-white"
        aria-hidden
      />
    </Link>
  );
}
