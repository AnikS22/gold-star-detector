import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, KeyLine, FadeIn } from "../SlideLayout";

export default function Slide05() {
  const steps = [
    { label: "Raw patch", color: "bg-muted" },
    { label: "Center heatmap", color: "bg-primary/30" },
    { label: "Bead points", color: "bg-primary" },
  ];

  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>MidasMap reframes the problem as <span className="text-cyan text-glow-cyan">tiny-object center detection</span></SlideTitle>
        <FadeIn delay={0.3}>
          <p className="text-[26px] font-body text-muted-foreground mt-4 max-w-[1100px]">
            Instead of drawing boxes or segmenting blobs, MidasMap predicts where the bead center is,
            what class it is, and how confident the model is.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-8 bg-slide-surface border border-border rounded-xl p-6 inline-block">
            <code className="text-[28px] font-mono text-primary">Output: (x, y, class, confidence)</code>
          </div>
        </FadeIn>

        {/* Visual pipeline */}
        <div className="flex-1 flex items-center justify-center gap-8">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={0.7 + i * 0.3}>
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <motion.div
                    className={`w-[300px] h-[300px] rounded-xl border border-border ${step.color} flex items-center justify-center relative overflow-hidden`}
                    animate={i === 1 ? { boxShadow: ["0 0 0px hsl(185 80% 50% / 0)", "0 0 30px hsl(185 80% 50% / 0.3)", "0 0 0px hsl(185 80% 50% / 0)"] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {i === 0 && <div className="text-[60px] text-muted-foreground/20 font-mono">TEM</div>}
                    {i === 1 && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-primary/60 blur-xl absolute" />
                        <div className="w-8 h-8 rounded-full bg-primary" />
                      </div>
                    )}
                    {i === 2 && (
                      <div className="relative w-full h-full">
                        {[{x:120,y:100},{x:200,y:180},{x:80,y:210}].map((p,j) => (
                          <motion.div key={j} className="absolute w-4 h-4 rounded-full bg-primary glow-cyan"
                            style={{left:p.x,top:p.y}}
                            initial={{scale:0}} animate={{scale:1}} transition={{delay:1.6+j*0.15}}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                  <p className="text-[22px] mt-4 text-foreground font-medium">{step.label}</p>
                </div>
                {i < 2 && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.9+i*0.3}}
                    className="text-[40px] text-primary">→</motion.div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <KeyLine>This is a CenterNet-style detector adapted for immunogold TEM.</KeyLine>
      </div>
    </SlideLayout>
  );
}
