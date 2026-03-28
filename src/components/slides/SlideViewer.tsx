import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlideNumber } from "./SlideLayout";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Lazy import all slides
import Slide01 from "./slides/Slide01";
import Slide02 from "./slides/Slide02";
import Slide03 from "./slides/Slide03";
import Slide04 from "./slides/Slide04";
import Slide05 from "./slides/Slide05";
import Slide06 from "./slides/Slide06";
import Slide07 from "./slides/Slide07";
import Slide08 from "./slides/Slide08";
import Slide09 from "./slides/Slide09";
import Slide10 from "./slides/Slide10";
import Slide11 from "./slides/Slide11";
import Slide12 from "./slides/Slide12";
import Slide13 from "./slides/Slide13";
import Slide14 from "./slides/Slide14";
import Slide15 from "./slides/Slide15";
import Slide16 from "./slides/Slide16";
import Slide17 from "./slides/Slide17";
import Slide18 from "./slides/Slide18";
import Slide19 from "./slides/Slide19";
import Slide20 from "./slides/Slide20";
import Slide21 from "./slides/Slide21";
import Slide22 from "./slides/Slide22";
import Slide23 from "./slides/Slide23";
import Slide24 from "./slides/Slide24";
import Slide25 from "./slides/Slide25";
import Slide26 from "./slides/Slide26";

const slides = [
  Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07, Slide08,
  Slide09, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15, Slide16,
  Slide17, Slide18, Slide19, Slide20, Slide21, Slide22, Slide23, Slide24,
  Slide25, Slide26,
];

const TOTAL = slides.length;

export default function SlideViewer() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    if (!containerRef.current) return;
    const { clientWidth, clientHeight } = containerRef.current;
    setScale(Math.min(clientWidth / 1920, clientHeight / 1080));
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale]);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((p) => Math.max(0, Math.min(TOTAL - 1, p + dir)));
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  const SlideComponent = slides[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 400 : -400, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -400 : 400, opacity: 0 }),
  };

  return (
    <div ref={containerRef} className="w-screen h-screen bg-background overflow-hidden relative flex items-center justify-center select-none">
      <div className="relative" style={{ width: 1920 * scale, height: 1080 * scale }}>
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: 1920, height: 1080 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <SlideComponent />
              <SlideNumber current={current + 1} total={TOTAL} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={() => go(-1)}
        disabled={current === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/50 text-foreground/60 hover:text-foreground hover:bg-secondary transition-all disabled:opacity-0 backdrop-blur-sm z-50"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={() => go(1)}
        disabled={current === TOTAL - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/50 text-foreground/60 hover:text-foreground hover:bg-secondary transition-all disabled:opacity-0 backdrop-blur-sm z-50"
      >
        <ChevronRight size={28} />
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-border z-50">
        <motion.div
          className="h-full bg-primary"
          animate={{ width: `${((current + 1) / TOTAL) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Keyboard hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[13px] font-mono text-muted-foreground/40 z-50">
        ← → navigate · F fullscreen
      </div>
    </div>
  );
}
