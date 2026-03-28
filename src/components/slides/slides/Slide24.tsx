import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, KeyLine, FadeIn } from "../SlideLayout";

const branches = [
  { label: "18nm / vGlut2 class", desc: "Add third particle class" },
  { label: "Active learning", desc: "Focus on low-confidence detections" },
  { label: "Spatial statistics", desc: "Distances, clustering, Ripley's K" },
  { label: "Protocol adaptation", desc: "Other EM and staining methods" },
];

export default function Slide24() {
  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>Where this goes next</SlideTitle>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            {/* Central node */}
            <FadeIn delay={0.3}>
              <div className="w-[220px] h-[220px] rounded-full border-2 border-primary bg-primary/10 glow-cyan flex items-center justify-center mx-auto">
                <div className="text-center">
                  <p className="text-[22px] font-bold text-primary">MidasMap</p>
                  <p className="text-[16px] text-muted-foreground">Current system</p>
                </div>
              </div>
            </FadeIn>

            {/* Branches */}
            <div className="flex gap-10 mt-12 justify-center">
              {branches.map((b, i) => (
                <FadeIn key={i} delay={0.6 + i * 0.2}>
                  <motion.div
                    className="w-[260px] bg-slide-surface border border-border rounded-xl p-6 text-center"
                    whileHover={{ y: -5, borderColor: "hsl(185 80% 50%)" }}
                  >
                    {/* Connection line */}
                    <div className="w-[2px] h-8 bg-primary/30 mx-auto -mt-6 mb-4" />
                    <h3 className="text-[20px] font-semibold text-foreground">{b.label}</h3>
                    <p className="text-[16px] text-muted-foreground mt-2">{b.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        <KeyLine>Detection is the first step; the long-term goal is richer synaptic analysis.</KeyLine>
      </div>
    </SlideLayout>
  );
}
