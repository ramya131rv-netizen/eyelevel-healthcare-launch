const STATS = [
  { value: "50+", label: "Clients Served" },
  { value: "200+", label: "Digital Campaigns Completed" },
  { value: "5-Star", label: "Google Rating" },
];

export function ProofBar() {
  return (
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
  );
}
