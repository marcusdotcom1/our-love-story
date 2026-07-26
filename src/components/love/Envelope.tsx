import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function EnvelopeChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const zoom = useTransform(scrollYProgress, [0, 0.4], [0.7, 1.15]);
  const flapRot = useTransform(scrollYProgress, [0.15, 0.45], [0, -180]);
  const seal = useTransform(scrollYProgress, [0.25, 0.4], [1, 0]);
  const letterY = useTransform(scrollYProgress, [0.45, 0.7], ["40%", "-10%"]);

  const lines = [
    "From the moment our lives touched,",
    "the world began to feel softer.",
    "Every quiet morning,",
    "every whispered laugh,",
    "every hand held in the dark —",
    "all of it, ours.",
  ];

  return (
    <section ref={ref} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden paper-texture">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.95_0.03_60/0.6),oklch(0.85_0.05_25/0.4))]" />

        <motion.div style={{ scale: zoom }} className="relative h-[520px] w-[380px] sm:h-[560px] sm:w-[440px]">
          <motion.div
            style={{ y: letterY }}
            className="absolute inset-x-6 top-8 z-0 rounded-sm bg-[oklch(0.97_0.02_85)] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
          >
            <p className="mb-4 font-script text-2xl text-[oklch(0.4_0.08_20)]">My love,</p>
            <div className="space-y-3 font-hand text-[13px] leading-[1.9] text-[oklch(0.3_0.05_25)]">
              {lines.map((l, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.8 }}
                >
                  {l}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <div className="absolute inset-0 z-10 overflow-hidden rounded-sm bg-gradient-to-b from-[oklch(0.88_0.06_25)] to-[oklch(0.78_0.09_20)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]">
            <div
              className="absolute inset-x-0 bottom-0 h-1/2 bg-[oklch(0.83_0.08_22)]"
              style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 50% 55%, 0 0)" }}
            />
          </div>

          <motion.div
            style={{ rotateX: flapRot, transformOrigin: "top center", transformPerspective: 1200 }}
            className="absolute inset-x-0 top-0 z-20 h-1/2"
          >
            <div
              className="h-full w-full bg-gradient-to-b from-[oklch(0.9_0.05_25)] to-[oklch(0.82_0.08_22)] shadow-[inset_0_-20px_40px_rgba(0,0,0,0.15)]"
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
            />
          </motion.div>

          <motion.div
            style={{ scale: seal, opacity: seal }}
            className="absolute left-1/2 top-1/2 z-30 -ml-8 -mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.55_0.18_25)] to-[oklch(0.38_0.15_20)] font-script text-2xl text-[oklch(0.9_0.05_80)] shadow-[0_8px_24px_rgba(120,10,20,0.5)] ring-2 ring-[oklch(0.35_0.12_20)]"
          >
            &amp;
          </motion.div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-[oklch(0.4_0.06_25)]">
        Chapter I · The Letter
      </div>
    </section>
  );
}