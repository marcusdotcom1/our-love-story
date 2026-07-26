import { motion } from "framer-motion";

const NOTES = [
  "Your eyes are so incredibly beautiful, I get lost in them.",
  "Your smile can light up my darkest days.",
  "You are the most gorgeous girl in the whole world.",
  "Your voice is my absolute favorite melody.",
  "I fall in love with your pure heart every single day.",
  "Everything about you, Aynu, is just pure perfection.",
];

const POS = [
  { top: "12%", left: "8%", rot: -6 },
  { top: "22%", left: "62%", rot: 4 },
  { top: "42%", left: "18%", rot: -3 },
  { top: "50%", left: "68%", rot: 5 },
  { top: "70%", left: "12%", rot: -4 },
  { top: "78%", left: "58%", rot: 3 },
];

export function LittleThings() {
  return (
    <section className="relative min-h-[130vh] overflow-hidden bg-[oklch(0.97_0.02_85)] py-32">
      <div className="absolute inset-0 paper-texture opacity-60" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="font-script text-5xl text-[oklch(0.5_0.1_20)]">The Little Things</p>
        <p className="mt-3 text-xs uppercase tracking-[0.4em] text-[oklch(0.4_0.05_25)]">Chapter III</p>
      </div>
      <div className="relative mx-auto mt-16 h-[80vh] max-w-6xl">
        {NOTES.map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ top: POS[i].top, left: POS[i].left, rotate: POS[i].rot }}
            data-cursor="✨"
            className="absolute w-64 rounded-sm bg-[oklch(0.99_0.02_85)] px-6 py-5 shadow-[0_15px_35px_-15px_rgba(80,30,20,0.3)] float-slow"
          >
            <span className="tape" style={{ top: -10, left: "50%", marginLeft: -25, width: 50, height: 18 }} />
            <p className="font-hand text-[15px] leading-relaxed text-[oklch(0.32_0.05_25)]">{n}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}