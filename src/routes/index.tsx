import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/eyelevel/Nav";
import { FAQ_ITEMS } from "@/components/eyelevel/Faq";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhoFor } from "@/components/sections/WhoFor";
import { Testimonial } from "@/components/sections/Testimonial";
import { FAQ } from "@/components/sections/FAQ";
import { RepeatCTA } from "@/components/sections/RepeatCTA";
import { Footer } from "@/components/Footer";

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

function Index() {
  return (
    <div id="top" className="relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 bg-noise" aria-hidden />
      <Nav />
      <Toaster />
      <Hero />
      <Services />
      <WhoFor />
      <Testimonial />
      <FAQ />
      <RepeatCTA />
      <Footer />
    </div>
  );
}

