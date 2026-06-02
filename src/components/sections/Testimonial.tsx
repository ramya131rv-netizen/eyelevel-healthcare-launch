import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 text-center">
      <Quote className="mx-auto h-10 w-10 text-accent" />
      <p className="mt-6 font-heading text-xl leading-relaxed text-accent sm:text-2xl">
        “EyeLevel manages digital marketing for Right Hospitals (Kilpauk, Chennai) and Heart
        Team India.”
      </p>
      <p className="mt-5 text-sm text-muted-foreground">— Eyelevel Healthcare Clients</p>
    </section>
  );
}
