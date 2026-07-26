import { motion } from "framer-motion";

const EVENTS = [
  { date: "The First Look", text: "A crowded room and yet — only you." },
  { date: "First Coffee", text: "Two cups, three hours, one beginning." },
  { date: "First Trip", text: "A small city, a big feeling." },
  { date: "Moving In", text: "Boxes, laughter, forever a little closer." },
  { date: "Today", text: "Another year of choosing us." },
];

export function Timeline() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.97_0.02_60)] py-32">
      <div className="absolute inset-0 paper-texture opacity-40" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[oklch(0.45_0.05_25)]">Chapter VI</p>
          <p className="mt-2 font-script text-5xl text-[oklch(0.4_0.1_20)]">Our Timeline</p>
        </div>
        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-[oklch(0.85_0.08_25)] via-[oklch(0.82_0.09_80)] to-[oklch(0.85_0.08_25)] shadow-[0_0_20px_oklch(0.85_0.08_25/0.6)]"
          />
          <div className="space-y-24">
            {EVENTS.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={"relative flex w-full " + (i % 2 ? "justify-end" : "justify-start")}
              >
                <div className="w-[45%]">
                  <div className="glass rounded-2xl p-6 glow-soft" data-cursor="❤️">
                    <p className="font-script text-2xl text-[oklch(0.4_0.1_20)]">{e.date}</p>
                    <p className="mt-2 font-serif text-lg italic text-[oklch(0.35_0.05_25)]">{e.text}</p>
                  </div>
                </div>
                <span className="absolute left-1/2 top-6 h-4 w-4 -translate-x-1/2 rounded-full bg-[oklch(0.88_0.08_25)] shadow-[0_0_20px_oklch(0.85_0.1_25)] ring-4 ring-white/80" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}