import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MEMORIES = [
  { caption: "Your eyes, my favorite view", file: "/WhatsApp Image 2026-07-26 at 19.03.28.jpeg" },
  { caption: "That smile of yours", file: "/IMG_0061.JPG.jpeg" },
  { caption: "Prettier than sunsets", file: "/IMG_0349.JPG.jpeg" },
  { caption: "Your silly, cute smile", file: "/IMG_1708.MOV" },
  { caption: "Most gorgeous girl", file: "/IMG_0588.JPG.jpeg" },
  { caption: "Absolutely breathtaking", file: "/IMG_2364.JPG.jpeg" },
  { caption: "Your sweet, sweet voice", file: "/IMG_2635.MOV" },
  { caption: "Lost in your beauty", file: "/IMG_0354.JPG.jpeg" },
  { caption: "My beautiful Aynu", file: "/WhatsApp Image 2026-07-26 at 19.03.28.jpeg" },
  { caption: "Pure perfection", file: "/IMG_0061.JPG.jpeg" },
  { caption: "My stunning girl", file: "/IMG_0349.JPG.jpeg" },
  { caption: "Just looking at you...", file: "/IMG_0588.JPG.jpeg" },
];

const GRADIENTS = [
  "from-[oklch(0.92_0.06_25)] to-[oklch(0.82_0.09_15)]",
  "from-[oklch(0.95_0.04_85)] to-[oklch(0.86_0.08_60)]",
  "from-[oklch(0.9_0.05_300)] to-[oklch(0.88_0.06_25)]",
  "from-[oklch(0.88_0.07_25)] to-[oklch(0.78_0.1_15)]",
  "from-[oklch(0.95_0.03_60)] to-[oklch(0.85_0.08_20)]",
  "from-[oklch(0.92_0.06_15)] to-[oklch(0.82_0.09_80)]",
];

export function MemoriesChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-75%"]);

  return (
    <section ref={ref} className="relative h-[400vh] bg-[oklch(0.96_0.02_60)]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 paper-texture opacity-40" />
        <div className="relative z-10 mb-8 px-8">
          <p className="font-script text-4xl text-[oklch(0.5_0.1_20)]">Our Memories</p>
          <p className="text-xs uppercase tracking-[0.4em] text-[oklch(0.4_0.05_25)]">
            Chapter II · a scrapbook of little forevers
          </p>
        </div>
        <motion.div style={{ x }} className="relative flex items-center gap-10 pl-16 pr-24">
          {MEMORIES.map((m, i) => {
            const rot = (i % 5) - 2;
            const g = GRADIENTS[i % GRADIENTS.length];
            return (
              <motion.figure
                key={i}
                whileHover={{ y: -16, scale: 1.04, rotate: 0 }}
                data-cursor="❤️"
                style={{ rotate: rot }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="group relative flex h-[420px] w-[300px] shrink-0 flex-col rounded-sm bg-[oklch(0.99_0.01_80)] p-4 shadow-[0_25px_50px_-25px_rgba(80,30,20,0.35)]"
              >
                <span
                  className="tape"
                  style={{
                    top: -14,
                    left: "50%",
                    marginLeft: -30,
                    width: 60,
                    height: 22,
                    transform: `rotate(${rot * 2}deg)`,
                  }}
                />
                <div className={"relative h-[320px] w-full overflow-hidden bg-gradient-to-br " + g}>
                  {m.file.toLowerCase().endsWith(".mov") ? (
                    <video src={m.file} autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" />
                  ) : (
                    <img src={m.file} alt={m.caption} className="absolute inset-0 h-full w-full object-cover" />
                  )}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.2),transparent_60%)] pointer-events-none" />
                  <span className="absolute bottom-3 right-3 font-script text-lg text-white/90 drop-shadow pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <figcaption className="mt-4 text-center font-hand text-sm text-[oklch(0.35_0.05_25)] opacity-70 transition-opacity group-hover:opacity-100">
                  {m.caption}
                </figcaption>
              </motion.figure>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}