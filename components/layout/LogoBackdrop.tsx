import Image from "next/image";

/**
 * Fixed, oversized Omega logo watermark behind all page content. Pure 2D
 * (no canvas, no particles): a single low-opacity image, always in view
 * regardless of scroll position.
 */
export function LogoBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      <Image
        src="/images/omega-logo-solo-no-bg.png"
        alt=""
        width={1400}
        height={1400}
        priority
        className="w-[150vmin] max-w-none select-none opacity-[0.30] sm:w-[115vmin] lg:w-[90vmin]"
      />
    </div>
  );
}
