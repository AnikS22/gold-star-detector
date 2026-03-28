import { useState } from "react";
import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, KeyLine, FadeIn } from "../SlideLayout";

const methods = [
  { name: "Box Detection", desc: "Bounding boxes around each particle", fit: "Awkward for few-pixel objects", selected: false },
  { name: "Segmentation", desc: "Full pixel-level masks", fit: "Overkill — contours don't matter here", selected: false },
  { name: "Center Heatmap", desc: "Predict center likelihood + offsets", fit: "Best fit — precise centers matter most", selected: true },
];

export default function Slide10() {
  const [active, setActive] = useState(2);

  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>Why not just segment everything?</SlideTitle>
        <FadeIn delay={0.3}>
          <p className="text-[26px] font-body text-muted-foreground mt-4">
            This task is about tiny centers, not large masks. Beads are only a few pixels wide — precise centers matter more than contours.
          </p>
        </FadeIn>

        <div className="flex-1 flex items-center justify-center gap-10">
          {methods.map((m, i) => (
            <FadeIn key={i} delay={0.5 + i * 0.15}>
              <motion.div
                className={`w-[440px] p-8 rounded-xl border-2 cursor-pointer transition-all ${
                  active === i
                    ? "border-primary bg-primary/5 glow-cyan"
                    : "border-border bg-slide-surface hover:border-muted-foreground/30"
                }`}
                whileHover={{ scale: 1.03 }}
                onClick={() => setActive(i)}
              >
                <h3 className={`text-[28px] font-semibold mb-3 ${active === i ? "text-primary" : "text-foreground"}`}>
                  {m.name}
                </h3>
                <p className="text-[20px] font-body text-muted-foreground mb-4">{m.desc}</p>
                <div className={`text-[18px] font-medium ${active === i ? "text-primary" : "text-muted-foreground"}`}>
                  {m.fit}
                </div>
                {/* Visual representation */}
                <div className="mt-6 h-[120px] rounded-lg bg-background/50 border border-border flex items-center justify-center relative overflow-hidden">
                  {i === 0 && <div className="w-14 h-14 border-2 border-gold rounded" />}
                  {i === 1 && <div className="w-16 h-16 rounded-full bg-gold/30 border border-gold" />}
                  {i === 2 && (
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-primary/20 blur-md absolute -inset-2" />
                      <div className="w-4 h-4 rounded-full bg-primary glow-cyan relative z-10" />
                    </div>
                  )}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <KeyLine>MidasMap predicts center likelihood, not full object outlines.</KeyLine>
      </div>
    </SlideLayout>
  );
}
