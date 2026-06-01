import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQ_ITEMS = [
  {
    q: "How do hospitals get patients online?",
    a: "Hospitals attract online patients through three primary channels: Google Business Profile (for local search), Google Search ads (for specialty intent), and content marketing (for trust-building and organic traffic).",
  },
  {
    q: "What is GMB optimisation for hospitals?",
    a: "Google Business Profile optimisation for hospitals involves verifying the listing, adding all specialties as service categories, uploading facility photos, enabling appointment booking, responding to all reviews, and posting weekly health updates.",
  },
  {
    q: "How does WhatsApp help hospitals?",
    a: "WhatsApp reduces no-shows (appointment reminders), improves patient retention (post-visit follow-up), and enables health education broadcasts — all at very high open rates compared to email.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="overflow-hidden rounded-xl border border-border bg-card">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-heading text-base text-accent">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-accent transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}