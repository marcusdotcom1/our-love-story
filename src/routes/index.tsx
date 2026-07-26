import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

import { CustomCursor } from "@/components/love/CustomCursor";
import { Intro } from "@/components/love/Intro";
import { EnvelopeChapter } from "@/components/love/Envelope";
import { MemoriesChapter } from "@/components/love/Memories";
import { LittleThings } from "@/components/love/LittleThings";
import { InfiniteSky } from "@/components/love/InfiniteSky";
import { Promises } from "@/components/love/Promises";
import { Timeline } from "@/components/love/Timeline";
import { FloatingMemories } from "@/components/love/FloatingMemories";
import { Letter } from "@/components/love/Letter";
import { Finale } from "@/components/love/Finale";
import { ScrollProgress } from "@/components/love/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Our Story — Happy Anniversary, My Love" },
      {
        name: "description",
        content:
          "A cinematic, scroll-driven anniversary letter written in light, paper and stars — a love story told chapter by chapter.",
      },
      { property: "og:title", content: "Our Story — Happy Anniversary, My Love" },
      { property: "og:description", content: "A handcrafted, scroll-driven love letter — turn the pages of us." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.style.scrollBehavior = entered ? "smooth" : "auto";
  }, [entered]);

  return (
    <div className="relative bg-[oklch(0.97_0.02_60)]">
      <CustomCursor />

      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div key="intro" exit={{ opacity: 0, filter: "blur(12px)" }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}>
            <Intro
              onEnter={() => {
                setEntered(true);
                if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "auto" });
              }}
            />
          </motion.div>
        ) : (
          <motion.main key="story" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}>
            <ScrollProgress />
            <EnvelopeChapter />
            <MemoriesChapter />
            <LittleThings />
            <InfiniteSky />
            <Promises />
            <Timeline />
            <FloatingMemories />
            <Letter />
            <Finale />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}