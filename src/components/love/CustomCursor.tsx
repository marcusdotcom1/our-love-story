import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 40, mass: 0.4 });
  const [glyph, setGlyph] = useState<"" | "❤️" | "✨">("");
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;
    document.documentElement.classList.add("cursor-love");
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const t = e.target as HTMLElement;
      const g = t.closest("[data-cursor]") as HTMLElement | null;
      if (g) setGlyph((g.dataset.cursor as "❤️" | "✨") ?? "");
      else setGlyph("");
    };
    const leave = () => setHidden(true);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("cursor-love");
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className="relative flex items-center justify-center transition-all duration-200"
        style={{ opacity: hidden ? 0 : 1 }}
      >
        {glyph ? (
          <span className="text-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">{glyph}</span>
        ) : (
          <>
            <span className="block h-2 w-2 rounded-full bg-[oklch(0.28_0.04_25)]" />
            <span className="absolute h-10 w-10 rounded-full border border-[oklch(0.82_0.09_15/0.4)]" />
          </>
        )}
      </div>
    </motion.div>
  );
}