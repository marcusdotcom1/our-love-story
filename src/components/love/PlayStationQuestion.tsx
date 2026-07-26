import { useState } from "react";
import { motion } from "framer-motion";

export function PlayStationQuestion() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [agreed, setAgreed] = useState(false);

  const dodgeNo = () => {
    // Generate random coordinates to jump around
    const randomX = (Math.random() - 0.5) * 300; // -150 to 150
    const randomY = (Math.random() - 0.5) * 300; // -150 to 150
    setNoPosition({ x: randomX, y: randomY });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[oklch(0.96_0.02_60)] py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 paper-texture opacity-40" />
      
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        {!agreed ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[oklch(0.45_0.05_25)]">Chapter VII.V</p>
            <p className="mb-8 font-script text-5xl text-[oklch(0.4_0.1_20)]">One tiny question...</p>
            <p className="mb-12 font-hand text-2xl text-[oklch(0.35_0.05_25)]">Will you buy me a PS5? 🥺</p>
            
            <div className="relative flex h-32 w-64 items-center justify-center">
              <button
                onClick={() => setAgreed(true)}
                className="absolute left-0 rounded-full bg-[oklch(0.88_0.08_25)] px-10 py-3 font-serif text-lg text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
              >
                Yes
              </button>
              
              <motion.button
                onMouseEnter={dodgeNo}
                onTouchStart={dodgeNo}
                onPointerEnter={dodgeNo}
                animate={{ x: noPosition.x, y: noPosition.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute right-0 rounded-full bg-[oklch(0.95_0.02_20)] px-10 py-3 font-serif text-lg text-[oklch(0.4_0.05_25)] shadow-md"
              >
                No
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex flex-col items-center"
          >
            <p className="mb-4 font-script text-6xl text-[oklch(0.4_0.1_20)]">Yayyy! 🎉</p>
            <p className="font-hand text-2xl text-[oklch(0.35_0.05_25)]">I knew you were the best!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
