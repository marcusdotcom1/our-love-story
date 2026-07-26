import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function MusicWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Attempt autoplay when component mounts (browsers might block this, so we handle the promise)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set a pleasant volume
      
      // Auto-play is often blocked by browsers until user interaction.
      // We'll try, but won't crash if it fails.
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            // Auto-play was prevented
            console.log("Autoplay prevented. User needs to interact first.");
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Title that shows on hover or always */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isPlaying ? 1 : 0.5, x: 0 }}
        className="hidden md:flex rounded-full bg-white/70 px-4 py-2 backdrop-blur-md shadow-sm ring-1 ring-black/5"
      >
        <div className="flex flex-col items-end justify-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[oklch(0.4_0.05_25)]">Now Playing</p>
          <p className="font-hand text-sm text-[oklch(0.3_0.05_25)] whitespace-nowrap">Khat - Navjot Ahuja</p>
        </div>
      </motion.div>

      <button
        onClick={togglePlay}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.95_0.02_20)] text-[oklch(0.4_0.05_25)] shadow-[0_8px_16px_-6px_rgba(80,30,20,0.4)] transition-transform hover:scale-110 active:scale-95"
      >
        <audio
          ref={audioRef}
          src="/Navjot Ahuja - Khat (Official Audio).mp3"
          loop
        />
        
        {/* Spinning record border effect when playing */}
        {isPlaying && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-[oklch(0.7_0.1_20)] opacity-50"
          />
        )}
        
        <span className="text-xl">
          {isPlaying ? "⏸" : "🎵"}
        </span>
      </button>
    </div>
  );
}
