import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, FadeIn } from "../SlideLayout";

const pipelineSteps = [
  "Raw TEM image",
  "Sliding window patches",
  "ResNet-50 encoder",
  "BiFPN feature fusion",
  "Decoder",
  "Heatmap + Offset heads",
  "Peak extraction",
  "Cross-class NMS",
  "Final detections",
];

export default function Slide06() {
  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>The MidasMap Pipeline</SlideTitle>

        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-3">
            {pipelineSteps.map((step, i) => (
              <FadeIn key={i} delay={0.3 + i * 0.12}>
                <div className="flex items-center gap-3">
                  <motion.div
                    className="bg-slide-surface border border-border rounded-xl px-6 py-5 min-w-[160px] text-center hover:border-primary hover:glow-cyan transition-all cursor-default"
                    whileHover={{ scale: 1.08, y: -5 }}
                  >
                    <p className="text-[18px] font-display font-medium text-foreground leading-tight">{step}</p>
                  </motion.div>
                  {i < pipelineSteps.length - 1 && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + i * 0.12 }}
                      className="text-[28px] text-primary"
                    >→</motion.span>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={1.8}>
          <p className="text-[22px] font-body text-muted-foreground text-center">
            Hover over each block to explore the pipeline stages
          </p>
        </FadeIn>
      </div>
    </SlideLayout>
  );
}
