import { useState } from "react";
import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, KeyLine, FadeIn } from "../SlideLayout";

export default function Slide11() {
  const [activeMap, setActiveMap] = useState<"6nm" | "12nm">("6nm");

  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>Step 3: Predicting where bead centers are</SlideTitle>
        <FadeIn delay={0.3}>
          <p className="text-[26px] font-body text-muted-foreground mt-4">
            The heatmap head outputs one map per class. Each pixel means: "How likely is the center of a bead here?"
          </p>
        </FadeIn>

        <div className="flex-1 flex items-center justify-center gap-12">
          {/* Input patch */}
          <FadeIn delay={0.5}>
            <div className="flex flex-col items-center">
              <div className="w-[280px] h-[280px] rounded-xl border border-border bg-muted/30 flex items-center justify-center">
                <span className="text-[20px] font-mono text-muted-foreground">Input patch</span>
              </div>
              <span className="text-[18px] mt-3 text-muted-foreground">512×512</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.7}><span className="text-[40px] text-primary">→</span></FadeIn>

          {/* Heatmap toggle */}
          <FadeIn delay={0.8}>
            <div className="flex flex-col items-center">
              <div className="flex gap-3 mb-4">
                <button
                  onClick={() => setActiveMap("6nm")}
                  className={`px-5 py-2 rounded-lg text-[18px] font-medium transition-all ${activeMap === "6nm" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
                >6 nm</button>
                <button
                  onClick={() => setActiveMap("12nm")}
                  className={`px-5 py-2 rounded-lg text-[18px] font-medium transition-all ${activeMap === "12nm" ? "bg-gold text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
                >12 nm</button>
              </div>
              <motion.div
                key={activeMap}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-[280px] h-[280px] rounded-xl border border-border bg-background relative overflow-hidden"
              >
                {/* Simulated heatmap */}
                {(activeMap === "6nm" ? [{x:90,y:80,s:60},{x:180,y:160,s:45},{x:70,y:200,s:50}] : [{x:150,y:100,s:70},{x:60,y:180,s:40}]).map((p, i) => (
                  <div key={i} className={`absolute rounded-full blur-xl ${activeMap === "6nm" ? "bg-primary" : "bg-gold"}`}
                    style={{left:p.x,top:p.y,width:p.s,height:p.s,opacity:0.5}} />
                ))}
                {(activeMap === "6nm" ? [{x:108,y:98},{x:192,y:172},{x:88,y:218}] : [{x:175,y:125},{x:78,y:198}]).map((p, i) => (
                  <motion.div key={i} className={`absolute w-3 h-3 rounded-full ${activeMap === "6nm" ? "bg-primary" : "bg-gold"}`}
                    style={{left:p.x,top:p.y}} initial={{scale:0}} animate={{scale:1}} transition={{delay:0.2+i*0.1}} />
                ))}
              </motion.div>
              <span className="text-[18px] mt-3 text-foreground font-medium">{activeMap} heatmap</span>
            </div>
          </FadeIn>

          <FadeIn delay={1.0}><span className="text-[40px] text-primary">→</span></FadeIn>

          {/* Final peaks */}
          <FadeIn delay={1.1}>
            <div className="flex flex-col items-center">
              <div className="w-[280px] h-[280px] rounded-xl border border-border bg-background relative">
                {[{x:108,y:98,c:"cyan"},{x:192,y:172,c:"cyan"},{x:88,y:218,c:"cyan"},{x:175,y:125,c:"gold"},{x:78,y:198,c:"gold"}].map((p, i) => (
                  <motion.div key={i} className="absolute" style={{left:p.x,top:p.y}}
                    initial={{scale:0}} animate={{scale:1}} transition={{delay:1.3+i*0.1}}>
                    <div className={`w-4 h-4 rounded-full ${p.c === "cyan" ? "bg-primary glow-cyan" : "bg-gold glow-gold"}`} />
                  </motion.div>
                ))}
              </div>
              <span className="text-[18px] mt-3 text-foreground font-medium">Center peaks</span>
            </div>
          </FadeIn>
        </div>

        <KeyLine>The model learns to place a sharp peak at real bead centers.</KeyLine>
      </div>
    </SlideLayout>
  );
}
