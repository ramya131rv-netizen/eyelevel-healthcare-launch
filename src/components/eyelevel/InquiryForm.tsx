import { useState } from "react";
import { toast } from "sonner";

const OPTIONS = [
  "Google Business Profile Management",
  "Patient Acquisition Campaigns",
  "WhatsApp Communication",
  "Content Marketing",
  "Photo & Video Production",
  "Full Healthcare Marketing Stack",
];

export function InquiryForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks — we'll be in touch shortly.");
    }, 600);
  }

  const fieldClass =
    "w-full rounded-lg border border-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  return (
    <div
      id="hero-form"
      className="rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8"
    >
      <h2 className="font-heading text-2xl leading-tight text-accent">
        Talk to us about your marketing.
      </h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input className={fieldClass} name="name" placeholder="Full Name" required />
        <input className={fieldClass} type="email" name="email" placeholder="Email" required />
        <input className={fieldClass} name="company" placeholder="Company Name" required />
        <select className={fieldClass} name="need" defaultValue="" required>
          <option value="" disabled>
            What do you need help with?
          </option>
          {OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-lg bg-accent px-4 py-3 font-semibold text-accent-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Submit"}
        </button>
      </form>
    </div>
  );
}