import {
  MapPin,
  Target,
  MessageCircle,
  FileText,
  Video,
} from "lucide-react";

const SERVICES = [
  {
    icon: MapPin,
    name: "Google Business Profile Management",
    desc: "Setup, optimization, patient reviews, weekly posts, and appointment button. Own your local search result.",
  },
  {
    icon: Target,
    name: "Patient Acquisition Campaigns",
    desc: "Google Search and Meta ads targeting patients actively searching for your specialty. Pay for intent, not impressions.",
  },
  {
    icon: MessageCircle,
    name: "WhatsApp Communication",
    desc: "Appointment reminders, post-visit follow-ups, and health broadcast content at open rates email can't match.",
  },
  {
    icon: FileText,
    name: "Content Marketing",
    desc: "SEO-optimized health content answering patient questions and ranking for key specialties. Build trust before they call.",
  },
  {
    icon: Video,
    name: "Photo & Video Production",
    desc: "Doctor profiles, facility walkthroughs, and patient testimonial videos that convert browsers into bookings.",
  },
];

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="mx-auto max-w-2xl text-center font-heading text-2xl text-accent sm:text-3xl">
        What We Do For This Industry
      </h2>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div
            key={s.name}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
          >
            <s.icon className="h-7 w-7 text-accent" />
            <h3 className="mt-4 font-heading text-lg leading-snug text-accent">{s.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
