import { motion } from "framer-motion";

const PARAGRAPHS = [
  "If someone asked me what happiness looks like…",
  "I would simply show them you.",
  "You have filled my life with laughter, comfort, hope, and a love I never imagined possible.",
  "You have become my safest place, my biggest blessing, and my favorite part of every single day.",
  "Thank you for loving me. Thank you for believing in me. Thank you for making life feel beautiful.",
  "If I had another lifetime… I would still search every corner of the universe until I found you again.",
  "Because my heart will always choose yours.",
];

export function Letter() {
  return (
    <section className="relative min-h-[220vh] bg-gradient-to-b from-[oklch(0.15_0.03_25)] via-[oklch(0.2_0.04_20)] to-[oklch(0.15_0.03_25)] py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative rounded-sm bg-[oklch(0.95_0.03_85)] px-10 py-16 paper-texture shadow-[0_50px_120px_-30px_rgba(0,0,0,0.6)] sm:px-16">
          <div className="absolute -top-4 left-1/2 h-24 w-8 -translate-x-1/2 rotate-[3deg] bg-[oklch(0.88_0.03_80/0.7)] shadow" />
          <p className="text-center text-xs uppercase tracking-[0.4em] text-[oklch(0.45_0.05_25)]">Chapter VIII</p>
          <p className="mt-4 text-center font-script text-5xl text-[oklch(0.35_0.1_20)]">My Letter</p>
          <p className="mt-12 font-hand text-lg leading-relaxed text-[oklch(0.3_0.05_25)]">My Dearest Aynu,</p>
          <div className="mt-8 space-y-8">
            {PARAGRAPHS.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-hand text-lg leading-[2] text-[oklch(0.3_0.05_25)]"
              >
                {p}
              </motion.p>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="pt-6 font-script text-3xl text-[oklch(0.4_0.1_20)]"
            >
              Happy 6 Months, my love.
            </motion.p>
            <p className="font-script text-2xl text-[oklch(0.45_0.09_20)]">Forever Yours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}