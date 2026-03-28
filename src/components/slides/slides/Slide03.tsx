import { useState } from "react";
import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, KeyLine, FadeIn } from "../SlideLayout";

const crops = [
  { label: "Real bead", isGold: true, desc: "Actual 12 nm immunogold particle" },
  { label: "Vesicle", isGold: false, desc: "Synaptic vesicle — similar darkness" },
  { label: "Stain artifact", isGold: false, desc: "Heavy metal staining residue" },
  { label: "Noise", isGold: false, desc: "Random electron-dense spot" },
];

export default function Slide03() {
  const [revealed, setRevealed] = useState<number | null>(null);

  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>This is not just "find black dots"</SlideTitle>
        <div className="mt-6">
          <FadeIn delay={0.2}>
            <p className="text-[26px] font-body text-muted-foreground max-w-[1000px]">
              Particles are only a few pixels wide. Contrast is weak. Vesicles and background structures can look nearly identical.
              Dataset: ~453 labeled particles in 10 training images.
            </p>
          </FadeIn>
        </div>

        <div className="flex-1 flex items-center">
          <div className="flex gap-8 w-full justify-center">
            {crops.map((crop, i) => (
              <FadeIn key={i} delay={0.4 + i * 0.15}>
                <motion.div
                  className="relative cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setRevealed(i)}
                >
                  {/* Simulated TEM crop */}
                  <div className="w-[320px] h-[320px] rounded-xl border-2 border-border bg-gradient-to-br from-muted/50 to-background flex items-center justify-center overflow-hidden relative">
                    <div className={`w-16 h-16 rounded-full ${crop.isGold ? "bg-foreground" : "bg-foreground/70"} shadow-lg`} />
                    {/* Noise texture overlay */}
                    <div className="absolute inset-0 opacity-30" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
                    }} />
                    {revealed === i && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`absolute inset-0 rounded-xl border-4 ${crop.isGold ? "border-primary glow-cyan" : "border-destructive"} flex items-end`}
                      >
                        <div className={`w-full p-4 text-center text-[18px] font-bold ${crop.isGold ? "text-primary" : "text-destructive"}`}>
                          {crop.isGold ? "✓ GOLD" : "✗ NOT GOLD"}
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <p className="text-center text-[22px] mt-4 text-foreground font-medium">{crop.label}</p>
                  <p className="text-center text-[16px] mt-1 text-muted-foreground">{crop.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        <KeyLine>A naive detector would confuse real gold particles with random dark TEM structures.</KeyLine>
      </div>
    </SlideLayout>
  );
}
