import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, KeyLine, FadeIn } from "../SlideLayout";

export default function Slide13() {
  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>Step 4: Recovering <span className="text-cyan text-glow-cyan">precise</span> coordinates</SlideTitle>
        <FadeIn delay={0.3}>
          <p className="text-[26px] font-body text-muted-foreground mt-4 max-w-[1100px]">
            The heatmap finds the best grid cell. But the true center may sit between grid locations.
            The offset head predicts small x and y corrections.
          </p>
        </FadeIn>

        <div className="flex-1 flex items-center justify-center">
          <FadeIn delay={0.5}>
            <div className="relative">
              {/* Grid */}
              <div className="w-[600px] h-[400px] relative">
                {Array.from({ length: 5 }).map((_, row) =>
                  Array.from({ length: 7 }).map((_, col) => (
                    <div key={`${row}-${col}`} className="absolute border border-border/40"
                      style={{ width: 80, height: 80, left: col * 80 + 20, top: row * 80 }} />
                  ))
                )}
                {/* Heatmap peak (grid cell center) */}
                <motion.div
                  className="absolute w-8 h-8 rounded-full bg-primary/40 border-2 border-primary border-dashed"
                  style={{ left: 260, top: 160 }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                />
                {/* True center */}
                <motion.div
                  className="absolute w-5 h-5 rounded-full bg-gold glow-gold"
                  style={{ left: 278, top: 148 }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
                />
                {/* Offset arrow */}
                <motion.svg
                  className="absolute" style={{ left: 270, top: 155 }}
                  width="30" height="30" viewBox="0 0 30 30"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                >
                  <line x1="6" y1="20" x2="20" y2="6" stroke="hsl(45 90% 55%)" strokeWidth="2" markerEnd="url(#arrow)" />
                  <defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(45 90% 55%)" />
                  </marker></defs>
                </motion.svg>

                {/* Labels */}
                <motion.div className="absolute text-[16px] font-mono text-primary" style={{ left: 210, top: 200 }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                  grid center
                </motion.div>
                <motion.div className="absolute text-[16px] font-mono text-gold" style={{ left: 300, top: 130 }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
                  true center
                </motion.div>
                <motion.div className="absolute text-[16px] font-mono text-gold" style={{ left: 300, top: 180 }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
                  Δx, Δy offset
                </motion.div>
              </div>

              {/* Legend */}
              <div className="flex gap-12 mt-8 justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/40 border-2 border-primary border-dashed" />
                  <span className="text-[18px] text-muted-foreground">Heatmap peak (coarse)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold" />
                  <span className="text-[18px] text-muted-foreground">True center (precise)</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <KeyLine>Heatmap = coarse center. Offset = fine correction.</KeyLine>
      </div>
    </SlideLayout>
  );
}
