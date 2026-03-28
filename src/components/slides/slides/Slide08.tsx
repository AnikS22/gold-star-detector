import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, BulletList, KeyLine, FadeIn } from "../SlideLayout";

const layers = [
  { label: "Edges", opacity: 0.3 },
  { label: "Textures", opacity: 0.5 },
  { label: "Blobs", opacity: 0.7 },
  { label: "Structure", opacity: 1 },
];

export default function Slide08() {
  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>Step 2: ResNet learns useful EM features</SlideTitle>
        <div className="mt-6 flex-1 flex gap-16">
          <div className="flex-1 flex flex-col justify-center">
            <BulletList items={[
              "A CNN learns features like edges, blobs, and textures",
              "ResNet is a deep CNN with residual connections",
              "Residual connections help very deep models train effectively",
              "Turns raw pixels into meaningful EM feature representations",
            ]} />
            <KeyLine>ResNet is the system's visual backbone — raw pixels → meaningful EM features.</KeyLine>
          </div>
          <div className="w-[650px] flex items-center justify-center">
            <div className="flex items-center gap-6">
              {layers.map((layer, i) => (
                <FadeIn key={i} delay={0.5 + i * 0.2}>
                  <div className="flex flex-col items-center gap-3">
                    <motion.div
                      className="w-[130px] h-[130px] rounded-xl border border-border bg-muted/30 flex items-center justify-center"
                      whileHover={{ scale: 1.1, borderColor: "hsl(185 80% 50%)" }}
                    >
                      <div className="w-16 h-16 rounded-lg" style={{
                        background: `repeating-linear-gradient(${i * 45}deg, hsl(185 80% 50% / ${layer.opacity}), transparent 4px, transparent 8px)`,
                      }} />
                    </motion.div>
                    <span className="text-[18px] text-muted-foreground">{layer.label}</span>
                    {i < layers.length - 1 && (
                      <motion.span className="text-primary text-[24px] absolute" style={{right: -20, top: '50%'}} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.7+i*0.2}}>
                      </motion.span>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
