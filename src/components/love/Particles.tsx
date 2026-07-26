import { useMemo } from "react";

export function Particles({ count = 60, className = "" }: { count?: number; className?: string }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 4,
        dur: 2 + Math.random() * 4,
        hue: Math.random() > 0.5 ? "oklch(0.95 0.05 85)" : "oklch(0.9 0.06 15)",
      })),
    [count],
  );
  return (
    <div className={"pointer-events-none absolute inset-0 overflow-hidden " + className} aria-hidden>
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full twinkle"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            background: d.hue,
            boxShadow: `0 0 ${d.size * 4}px ${d.hue}`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
          }}
        />
      ))}
    </div>
  );
}