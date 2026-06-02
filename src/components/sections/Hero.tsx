import { InquiryForm } from "../eyelevel/InquiryForm";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-block rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-accent">
            Healthcare Digital Marketing Agency · India
          </span>
          <h1 className="mt-5 font-heading text-3xl leading-[1.1] text-accent sm:text-4xl lg:text-5xl">
           Getting Patients to Find You First
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Most patients search online before calling a hospital. The hospital with the
            best-managed digital presence wins that call — regardless of which hospital is
            objectively better. EyeLevel makes sure your brand is what they find.
          </p>
        </div>
        <div className="animate-fade-up [animation-delay:120ms]">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
