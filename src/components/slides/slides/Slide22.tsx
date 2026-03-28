import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, KeyLine, FadeIn } from "../SlideLayout";

const layers = [
  { label: "Problem framing", desc: "Reframed as tiny-object center detection", color: "primary" },
  { label: "EM prior", desc: "CEM500K-pretrained backbone", color: "primary" },
  { label: "Tiny-object design", desc: "Stride-2, BiFPN, adapted CenterNet", color: "primary" },
  { label: "Corrected supervision", desc: "Fixed coordinates, heatmaps, patches", color: "primary" },
  { label: "Deployable system", desc: "End-to-end reproducible workflow", color: "primary" },
];

export default function Slide22() {
  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>What is actually novel here?</SlideTitle>

        <div className="flex-1 flex items-center justify-center">
          <div className="space-y-4 w-full max-w-[1200px]">
            {layers.map((layer, i) => (
              <FadeIn key={i} delay={0.4 + i * 0.2}>
                <motion.div
                  className="bg-slide-surface border border-border rounded-xl p-6 flex items-center gap-6"
                  whileHover={{ x: 10, borderColor: "hsl(185 80% 50%)" }}
                  style={{ marginLeft: i * 30 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary font-bold text-[18px]">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-[24px] font-semibold text-foreground">{layer.label}</h3>
                    <p className="text-[18px] text-muted-foreground">{layer.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        <KeyLine delay={1.5}>The novelty is a correct, biologically grounded, tiny-object detection pipeline that actually works.</KeyLine>
      </div>
    </SlideLayout>
  );
}
