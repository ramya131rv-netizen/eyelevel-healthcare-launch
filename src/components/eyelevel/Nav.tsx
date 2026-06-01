export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-heading text-xl tracking-tight text-accent">
          eyelevel<span className="text-accent">.</span>
        </a>
        <a
          href="#hero-form"
          className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
        >
          Talk to us
        </a>
      </div>
    </header>
  );
}