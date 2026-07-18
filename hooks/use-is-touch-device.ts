"use client";

import { useEffect, useState } from "react";

/**
 * Detects whether the device's PRIMARY pointer is "coarse" (touch), via
 * `(pointer: coarse)` rather than simply checking for touch screen
 * presence — a laptop can have a touch screen while still using a
 * mouse/trackpad as its primary pointer, and mouse parallax should only be
 * disabled when touch is truly the primary interaction mode (mobile, tablet).
 */
export function useIsTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouchDevice(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isTouchDevice;
}
