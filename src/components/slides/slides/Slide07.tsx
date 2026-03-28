import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, BulletList, KeyLine, FadeIn } from "../SlideLayout";

export default function Slide07() {
  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>Step 1: How do we process a huge TEM image?</SlideTitle>
        <div className="mt-6 flex-1 flex gap-16">
          <div className="flex-1 flex flex-col justify-center">
            <BulletList items={[
              "TEM images are too large for a single input",
              "MidasMap cuts them into overlapping 512×512 patches",
              "Overlap prevents border misses",
              "Patch detections are merged into global coordinates",
            ]} />
            <KeyLine delay={0.8}>Sliding windows preserve local detail while handling arbitrary image sizes.</KeyLine>
          </div>
          <div className="w-[700px] flex items-center justify-center">
            <FadeIn delay={0.4}>
              <div className="relative w-[600px] h-[400px] border border-border rounded-xl bg-muted/20 overflow-hidden">
                {/* Grid overlay */}
                {Array.from({ length: 3 }).map((_, row) =>
                  Array.from({ length: 4 }).map((_, col) => (
                    <motion.div
                      key={`${row}-${col}`}
                      className="absolute border border-primary/30 rounded"
                      style={{ width: 160, height: 140, left: col * 145 + 10, top: row * 130 + 10 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.6, 0.3] }}
                      transition={{ delay: 0.6 + (row * 4 + col) * 0.1, duration: 1 }}
                    />
                  ))
                )}
                {/* Scanning window */}
                <motion.div
                  className="absolute w-[160px] h-[140px] border-2 border-primary glow-cyan rounded"
                  animate={{ left: [10, 155, 300, 445, 10, 155, 300, 445], top: [10, 10, 10, 10, 140, 140, 140, 140] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute bottom-3 right-3 bg-slide-surface/80 px-3 py-1 rounded text-[14px] font-mono text-primary">
                  512 × 512
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
