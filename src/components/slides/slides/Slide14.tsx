import { useState } from "react";
import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, KeyLine, FadeIn } from "../SlideLayout";

export default function Slide14() {
  const [stride, setStride] = useState<4 | 2>(4);

  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>Tiny particles need <span className="text-cyan text-glow-cyan">fine output resolution</span></SlideTitle>
        <FadeIn delay={0.3}>
          <p className="text-[26px] font-body text-muted-foreground mt-4">
            Standard CenterNet uses stride-4. For few-pixel beads, that's too coarse. Stride-2 keeps small particles visible.
          </p>
        </FadeIn>

        <div className="flex-1 flex items-center justify-center gap-16">
          {/* Toggle */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-4">
              <button onClick={() => setStride(4)}
                className={`px-8 py-3 rounded-xl text-[20px] font-medium transition-all ${stride === 4 ? "bg-destructive/20 text-destructive border border-destructive/30" : "bg-secondary text-secondary-foreground"}`}>
                Stride 4
              </button>
              <button onClick={() => setStride(2)}
                className={`px-8 py-3 rounded-xl text-[20px] font-medium transition-all ${stride === 2 ? "bg-primary/20 text-primary border border-primary/30 glow-cyan" : "bg-secondary text-secondary-foreground"}`}>
                Stride 2
              </button>
            </div>

            <motion.div key={stride} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="w-[500px] h-[400px] rounded-xl border border-border bg-background relative overflow-hidden">
              {/* Grid */}
              {Array.from({ length: stride === 4 ? 8 : 16 }).map((_, row) =>
                Array.from({ length: stride === 4 ? 10 : 20 }).map((_, col) => (
                  <div key={`${row}-${col}`}
                    className="absolute border border-border/20"
                    style={{
                      width: stride === 4 ? 50 : 25,
                      height: stride === 4 ? 50 : 25,
                      left: col * (stride === 4 ? 50 : 25),
                      top: row * (stride === 4 ? 50 : 25),
                    }}
                  />
                ))
              )}
              {/* Bead */}
              <div className="absolute w-6 h-6 rounded-full bg-foreground/70 border border-foreground"
                style={{ left: 240, top: 190 }} />
              {/* Peak highlight */}
              <motion.div
                className={`absolute rounded ${stride === 2 ? "bg-primary/30 glow-cyan" : "bg-destructive/20"}`}
                style={{
                  width: stride === 4 ? 50 : 25,
                  height: stride === 4 ? 50 : 25,
                  left: stride === 4 ? 200 : 225,
                  top: stride === 4 ? 150 : 175,
                }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <div className="absolute bottom-3 right-3 text-[14px] font-mono text-muted-foreground">
                Grid: {stride === 4 ? "50×50 px" : "25×25 px"} cells
              </div>
            </motion.div>
          </div>
        </div>

        <KeyLine>For few-pixel objects, output resolution is a core design decision.</KeyLine>
      </div>
    </SlideLayout>
  );
}
