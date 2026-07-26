import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const CARDS = [
  { title: "morning", grad: "from-[oklch(0.92_0.06_25)] to-[oklch(0.82_0.09_80)]", file: "/WhatsApp Image 2026-07-26 at 19.03.28.jpeg", depth: 0 },
  { title: "laughter", grad: "from-[oklch(0.94_0.04_60)] to-[oklch(0.85_0.08_20)]", file: "/IMG_2635.MOV", depth: 1 },
  { title: "adventures", grad: "from-[oklch(0.9_0.05_300)] to-[oklch(0.88_0.06_25)]", file: "/IMG_0588.JPG.jpeg", depth: 2 },
  { title: "quiet nights", grad: "from-[oklch(0.88_0.07_25)] to-[oklch(0.75_0.1_15)]", file: "/IMG_0354.JPG.jpeg", depth: 3 },
  { title: "always", grad: "from-[oklch(0.95_0.03_85)] to-[oklch(0.85_0.08_15)]", file: "/IMG_2364.JPG.jpeg", depth: 4 },
];

function FloatCard({
  card,
  i,
  progress,
}: {
  card: (typeof CARDS)[number];
  i: number;
  progress: MotionValue<number>;
}) {
  const y = useTransform(progress, [0, 1], [250 + card.depth * 80, -100 - card.depth * 20]);
  const scale = useTransform(progress, [0, 1], [0.8 + card.depth * 0.06, 1 + card.depth * 0.1]);
  const rot = (i - 2) * 4;
  const xOff = ((i % 3) - 1) * 200;

  return (
    <motion.div
      style={{ y, scale, x: xOff, rotate: rot, zIndex: card.depth }}
      className={
        "absolute left-1/2 top-1/2 h-[280px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-br " +
        card.grad +
        " p-4 shadow-[0_30px_60px_-20px_rgba(80,30,20,0.5)]"
      }
      data-cursor="❤️"
    >
      <div className="relative h-full w-full rounded-md bg-black/5 ring-1 ring-white/40 overflow-hidden">
        {card.file.toLowerCase().endsWith(".mov") ? (
          <video src={card.file} autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <img src={card.file} alt={card.title} className="absolute inset-0 h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.2),transparent_60%)] pointer-events-none" />
        <p className="absolute bottom-4 left-4 font-script text-2xl text-white/90 drop-shadow pointer-events-none">{card.title}</p>
      </div>
    </motion.div>
  );
}

export function FloatingMemories() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} className="relative h-[150vh] overflow-hidden bg-[oklch(0.94_0.03_25)]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden [perspective:1200px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.98_0.02_60),oklch(0.9_0.05_20))]" />
        <div className="absolute top-16 z-10 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[oklch(0.45_0.05_25)]">Chapter VII</p>
          <p className="mt-2 font-script text-5xl text-[oklch(0.4_0.1_20)]">Floating Memories</p>
        </div>
        <div className="relative h-full w-full">
          {CARDS.map((c, i) => (
            <FloatCard key={i} card={c} i={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}