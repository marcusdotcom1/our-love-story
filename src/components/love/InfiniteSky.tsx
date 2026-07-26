import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function InfiniteSky() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const heartOpacity = useTransform(scrollYProgress, [0.25, 0.4, 0.6], [0, 1, 0]);
  const infOpacity = useTransform(scrollYProgress, [0.55, 0.7, 0.9], [0, 1, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

  const stars = useMemo(
    () =>
      Array.from({ length: 160 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 0.5 + Math.random() * 2,
        delay: Math.random() * 3,
      })),
    [],
  );

  return (
    <section ref={ref} className="relative h-[350vh] bg-black text-white">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.15_0.05_280),black_70%)]" />
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white twinkle"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              boxShadow: `0 0 ${s.size * 6}px white`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}

        <motion.svg viewBox="-100 -100 200 200" className="relative z-10 h-80 w-80" style={{ opacity: heartOpacity }}>
          <path
            d="M0,40 C -60,0 -60,-60 -30,-60 C -10,-60 0,-40 0,-20 C 0,-40 10,-60 30,-60 C 60,-60 60,0 0,40 Z"
            fill="none"
            stroke="oklch(0.9 0.08 25)"
            strokeWidth="1.5"
            style={{ filter: "drop-shadow(0 0 12px oklch(0.85 0.1 25))" }}
          />
        </motion.svg>

        <motion.svg viewBox="-100 -60 200 120" className="absolute z-10 h-80 w-80" style={{ opacity: infOpacity }}>
          <path
            d="M-60,0 C -60,-40 -20,-40 0,0 C 20,40 60,40 60,0 C 60,-40 20,-40 0,0 C -20,40 -60,40 -60,0 Z"
            fill="none"
            stroke="oklch(0.9 0.06 80)"
            strokeWidth="1.5"
            style={{ filter: "drop-shadow(0 0 12px oklch(0.85 0.1 80))" }}
          />
        </motion.svg>

        <motion.div style={{ opacity: textOpacity }} className="absolute bottom-24 z-20 text-center">
          <p className="font-script text-6xl text-[oklch(0.95_0.05_80)]">Always.</p>
          <p className="mt-2 font-script text-4xl text-[oklch(0.9_0.05_25)]">Forever.</p>
        </motion.div>
      </div>
    </section>
  );
}