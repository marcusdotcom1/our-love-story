import { useMemo } from "react";
import { motion } from "framer-motion";

const LINES = ["You are my favorite chapter.", "I love you.", "Today.", "Tomorrow.", "Always."];

export function Finale() {
  const petals = useMemo(
    () =>
      Array.from({ length: 24 }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 10,
        dur: 10 + Math.random() * 10,
        size: 10 + Math.random() * 16,
        hue: Math.random() > 0.5 ? "oklch(0.88 0.08 15)" : "oklch(0.92 0.06 25)",
      })),
    [],
  );

  return (
    <section className="relative min-h-[160vh] overflow-hidden bg-gradient-to-b from-[oklch(0.98_0.02_85)] via-white to-[oklch(0.96_0.03_25)] py-40">
      <div className="pointer-events-none absolute inset-0">
        {petals.map((p, i) => (
          <span
            key={i}
            className="petal absolute -top-10 block rounded-full"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size * 0.7,
              background: `radial-gradient(circle at 30% 30%, white, ${p.hue})`,
              filter: "blur(0.3px)",
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-24 px-6 text-center">
        {LINES.map((l, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-30% 0px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className={
              "font-script leading-tight text-[oklch(0.35_0.1_20)] " +
              (i === 0 ? "text-5xl sm:text-7xl" : "text-4xl sm:text-6xl")
            }
          >
            {l}
          </motion.p>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-6xl drop-shadow-[0_10px_30px_rgba(220,90,90,0.35)]">❤️</span>
          <p className="font-script text-3xl text-[oklch(0.4_0.1_20)]">Forever &amp; Always</p>
          <p className="mt-6 font-hand text-sm text-[oklch(0.45_0.05_25)]">Signed, with all of me —</p>
        </motion.div>
      </div>
    </section>
  );
}