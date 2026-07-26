import { motion } from "framer-motion";

const PROMISES = [
  "I promise to stand beside you.",
  "I promise to support your dreams.",
  "I promise to protect your smile.",
  "I promise to choose you every single day.",
  "I promise to grow with you, Aynu, gently, always.",
];

export function Promises() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[oklch(0.95_0.03_60)] via-[oklch(0.97_0.02_85)] to-[oklch(0.94_0.04_25)] py-40">
      <div className="absolute inset-0 paper-texture opacity-40" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-[oklch(0.45_0.05_25)]">Chapter V</p>
        <p className="mt-3 font-script text-6xl text-[oklch(0.4_0.1_20)]">Promises</p>
        <div className="mt-20 space-y-14">
          {PROMISES.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-script text-3xl leading-relaxed text-[oklch(0.35_0.07_20)] sm:text-4xl"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}