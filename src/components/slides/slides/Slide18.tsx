import { SlideLayout, SlideTitle, BulletList, KeyLine, FadeIn } from "../SlideLayout";
import { motion } from "framer-motion";

export default function Slide18() {
  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>How performance was measured honestly</SlideTitle>

        <div className="flex-1 flex gap-16 mt-8">
          <div className="flex-1 flex flex-col justify-center">
            <BulletList items={[
              "Leave-one-image-out cross-validation across 10 synapses",
              "5 seeds per fold for statistical robustness",
              "Hungarian matching for fair point assignment",
              "Tiny-support folds treated carefully (F1 becomes noisy)",
            ]} />
            <KeyLine>Evaluation was image-level, not patch-level, to avoid inflated results.</KeyLine>
          </div>

          {/* Visual: 10 image tiles */}
          <div className="w-[600px] flex items-center justify-center">
            <FadeIn delay={0.5}>
              <div className="grid grid-cols-5 gap-3">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-[100px] h-[80px] rounded-lg border border-border bg-muted/30 flex items-center justify-center relative"
                    whileHover={{ scale: 1.1, borderColor: "hsl(185 80% 50%)" }}
                  >
                    <span className="text-[14px] font-mono text-muted-foreground">img {i + 1}</span>
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-primary bg-primary/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                ))}
              </div>
              <p className="text-[16px] text-muted-foreground text-center mt-4">
                Hover to see held-out test image
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
