/**
 * "Scroll" indicator, fixed to the viewport so it stays visible everywhere
 * on the page. z-40: above section content (z-10), below NavBar (z-50) and
 * the custom cursor (z-90).
 */
export function ScrollIndicator() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-8 left-1/2 z-40 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-text-muted md:flex"
    >
      <span>Scroll</span>
      <span className="h-16 w-px overflow-hidden bg-gradient-to-b from-accent-primary to-transparent" />
    </div>
  );
}
