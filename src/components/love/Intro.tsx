import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Particles } from "./Particles";
import { MagneticButton } from "./MagneticButton";

const LINES = [
  "Some people spend a lifetime searching for love…",
  "I was lucky enough to find mine.",
  "This story is about us.",
];

export function Intro({ onEnter }: { onEnter: () => void }) {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (step >= LINES.length) {
      setDone(true);
      return;
    }
    const line = LINES[step];
    setTyped("");
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setTyped(line.slice(0, i));
      if (i >= line.length) {
        clearInterval(iv);
        setTimeout(() => setStep((s) => s + 1), 1600);
      }
    }, 55);
    return () => clearInterval(iv);
  }, [step]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-[oklch(0.98_0.02_85)]">
      <Particles count={90} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.3_0.05_20/0.5),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.p
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
              transition={{ duration: 0.8 }}
              className="font-serif text-2xl italic leading-relaxed tracking-wide sm:text-4xl"
            >
              {typed}
              <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-[oklch(0.9_0.05_80)] align-middle" />
            </motion.p>
          ) : (
            <motion.div
              key="cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="flex flex-col items-center gap-8"
            >
              <p className="font-script text-5xl text-[oklch(0.92_0.06_25)] sm:text-6xl">Our Story</p>
              <MagneticButton onClick={onEnter}>Start Our Journey</MagneticButton>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">scroll to turn the page</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}