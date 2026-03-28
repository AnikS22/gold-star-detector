import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideLayout, SlideTitle, KeyLine, FadeIn } from "../SlideLayout";

const bugs = [
  {
    title: "Bug 1: Coordinate Conversion",
    broken: "Micron coordinates misinterpreted → labels shifted away from particles",
    fixed: "Correct pixel mapping → labels align perfectly with beads",
  },
  {
    title: "Bug 2: Heatmap Peaks",
    broken: "Peaks below 1.0 → focal loss saw no true positives",
    fixed: "Peaks normalized to 1.0 → proper positive supervision signal",
  },
  {
    title: "Bug 3: Fixed Patches",
    broken: "Same patches replayed → model memorized specific patches",
    fixed: "Re-sampled patches each epoch → true generalization",
  },
];

export default function Slide17() {
  const [states, setStates] = useState([false, false, false]);

  const toggle = (i: number) => {
    const next = [...states];
    next[i] = !next[i];
    setStates(next);
  };

  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>What actually changed performance the most?</SlideTitle>

        <div className="flex-1 flex items-center">
          <div className="flex gap-8 w-full">
            {bugs.map((bug, i) => (
              <FadeIn key={i} delay={0.4 + i * 0.15} className="flex-1">
                <div className="bg-slide-surface border border-border rounded-xl p-8 h-full flex flex-col">
                  <h3 className="text-[22px] font-semibold text-foreground mb-6">{bug.title}</h3>
                  <button
                    onClick={() => toggle(i)}
                    className={`px-5 py-2 rounded-lg text-[16px] font-medium mb-6 transition-all ${
                      states[i] ? "bg-primary/20 text-primary border border-primary/30" : "bg-destructive/20 text-destructive border border-destructive/30"
                    }`}
                  >
                    {states[i] ? "✓ Fixed" : "✗ Broken"}
                  </button>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={states[i] ? "fixed" : "broken"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`text-[18px] font-body leading-relaxed ${states[i] ? "text-primary" : "text-muted-foreground"}`}
                    >
                      {states[i] ? bug.fixed : bug.broken}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <KeyLine>A large part of the breakthrough came from fixing the supervision pipeline.</KeyLine>
      </div>
    </SlideLayout>
  );
}
