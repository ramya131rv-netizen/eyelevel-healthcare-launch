import { Faq } from "../eyelevel/Faq";

export function FAQ() {
  return (
    <section className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="mb-12 text-center font-heading text-2xl text-accent sm:text-3xl">
          Frequently Asked
        </h2>
        <Faq />
      </div>
    </section>
  );
}
