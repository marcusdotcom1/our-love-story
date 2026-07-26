import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticButton({
  children,
  onClick,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      data-cursor="✨"
      className={
        "relative inline-flex items-center gap-3 rounded-full px-8 py-4 font-serif text-lg tracking-wide " +
        "bg-gradient-to-r from-[oklch(0.82_0.09_15)] via-[oklch(0.88_0.07_25)] to-[oklch(0.82_0.09_80)] " +
        "text-[oklch(0.99_0.01_80)] shadow-[0_10px_40px_-10px_oklch(0.82_0.09_15/0.6)] " +
        "ring-1 ring-white/40 transition-transform " +
        className
      }
    >
      <span className="absolute inset-0 rounded-full bg-white/10 blur-md" aria-hidden />
      <span className="relative">{children}</span>
    </motion.button>
  );
}