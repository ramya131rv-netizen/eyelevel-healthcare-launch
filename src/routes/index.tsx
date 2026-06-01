import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Target,
  MessageCircle,
  FileText,
  Video,
  Building2,
  FlaskConical,
  Sparkles,
  Quote,
} from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/eyelevel/Nav";
import { InquiryForm } from "@/components/eyelevel/InquiryForm";
import { Faq, FAQ_ITEMS } from "@/components/eyelevel/Faq";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Healthcare Digital Marketing Agency India | EyeLevel" },
      {
        name: "description",
        content:
          "EyeLevel is a healthcare digital marketing agency in India helping hospitals and clinics get found first — GMB, patient acquisition campaigns, WhatsApp, content & video.",
      },
      { property: "og:title", content: "Healthcare Digital Marketing Agency India | EyeLevel" },
      {
        property: "og:description",
        content:
          "Getting patients to find you first. Healthcare marketing built for patient acquisition.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: Index,
});

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

const STATS = [
  { value: "50+", label: "Clients Served" },
  { value: "200+", label: "Digital Campaigns Completed" },
  { value: "5-Star", label: "Google Rating" },
];

function Index() {
  return (
    <div id="top" className="relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 bg-noise" aria-hidden />
      <Nav />
      <Toaster />

      {/* Section 1 — Hero + Form */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-block rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-accent">
              Healthcare Digital Marketing · India
            </span>
            <h1 className="mt-5 font-heading text-3xl leading-[1.1] text-accent sm:text-4xl lg:text-5xl">
              Healthcare Digital Marketing Agency India — Getting Patients to Find You First
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Most patients search online before calling a hospital. The hospital with the
              best-managed digital presence wins that call — regardless of which hospital is
              objectively better. EyeLevel makes sure your brand is what they find.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "GMB, Google Ads & WhatsApp — all managed in one place",
                "Real clients: Right Hospitals & Heart Team India",
                "Built for hospitals, clinics, and wellness brands competing for local search",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-fade-up [animation-delay:120ms]">
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* Section 2 — Proof Bar */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-5 py-10 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-3xl text-accent sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 — What we do */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="mx-auto max-w-2xl text-center font-heading text-2xl text-accent sm:text-3xl">
          Healthcare Marketing Built for Patient Acquisition
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

      {/* Section 4 — Who this is for */}
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

      {/* Section 5 — Client Proof */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <Quote className="mx-auto h-10 w-10 text-accent" />
        <p className="mt-6 font-heading text-xl leading-relaxed text-accent sm:text-2xl">
          “EyeLevel manages digital marketing for Right Hospitals (Kilpauk, Chennai) and Heart
          Team India.”
        </p>
        <p className="mt-5 text-sm text-muted-foreground">— Eyelevel Healthcare Clients</p>
      </section>

      {/* Section 6 — FAQ */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="mb-12 text-center font-heading text-2xl text-accent sm:text-3xl">
            Frequently Asked
          </h2>
          <Faq />
        </div>
      </section>

      {/* Section 7 — Repeat CTA */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h2 className="font-heading text-2xl text-accent sm:text-3xl">
          Let’s get patients finding you first.
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          Tell us what you need — we’ll build the right healthcare marketing stack for your brand.
        </p>
        <a
          href="#hero-form"
          className="mt-8 inline-block rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground transition-transform hover:scale-105"
        >
          Ready to start? Fill in the form above →
        </a>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <span className="font-heading text-accent">eyelevel.</span> · Healthcare Digital Marketing,
        India
      </footer>
    </div>
  );
}
