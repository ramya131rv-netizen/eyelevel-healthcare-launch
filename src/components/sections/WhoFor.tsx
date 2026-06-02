import { Building2, FlaskConical, Sparkles } from "lucide-react";

const AUDIENCE = [
  {
    icon: Building2,
    text: "Multi-specialty hospitals looking to increase inbound patient enquiries",
  },
  {
    icon: FlaskConical,
    text: "Clinics and diagnostic labs competing for local search visibility",
  },
  {
    icon: Sparkles,
    text: "Wellness brands and preventive health companies building digital presence",
  },
];

export function WhoFor() {
  return (
    <section className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-center font-heading text-2xl text-accent sm:text-3xl">
          Who This Is For
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {AUDIENCE.map((a) => (
            <div key={a.text} className="rounded-2xl border border-border bg-card p-6">
              <a.icon className="h-7 w-7 text-accent" />
              <p className="mt-4 text-base leading-relaxed text-foreground/90">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
