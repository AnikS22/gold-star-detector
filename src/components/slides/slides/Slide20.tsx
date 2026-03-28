import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideLayout, SlideTitle, FadeIn } from "../SlideLayout";
import temCloseup from "@/assets/tem-closeup.jpg";

const views = ["Raw TEM", "Detections", "Heatmap"] as const;

export default function Slide20() {
  const [view, setView] = useState<typeof views[number]>("Raw TEM");

  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>What the detections actually look like</SlideTitle>

        <div className="flex gap-4 mt-6">
          {views.map((v) => (
            <button key={v} onClick={() => setView(v)}
              className={`px-6 py-2 rounded-lg text-[18px] font-medium transition-all ${view === v ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
              {v}
            </button>
          ))}
        </div>

        <div className="flex-1 flex items-center justify-center mt-6">
          <FadeIn delay={0.3}>
            <div className="relative w-[900px] h-[600px] rounded-xl overflow-hidden border border-border">
              <img src={temCloseup} alt="TEM" className="w-full h-full object-cover" />

              <AnimatePresence>
                {view === "Detections" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                    {[{x:200,y:150,s:6},{x:350,y:220,s:6},{x:500,y:180,s:12},{x:280,y:380,s:6},{x:620,y:300,s:12},{x:450,y:420,s:6},{x:700,y:200,s:6},{x:380,y:150,s:12}].map((d, i) => (
                      <motion.div key={i} className="absolute" style={{ left: d.x, top: d.y }}
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.08 }}>
                        <div className={`rounded-full border-2 ${d.s === 6 ? "border-primary w-5 h-5" : "border-gold w-8 h-8"}`} />
                        <div className={`absolute -top-5 left-1/2 -translate-x-1/2 text-[12px] font-mono ${d.s === 6 ? "text-primary" : "text-gold"}`}>{d.s}nm</div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
                {view === "Heatmap" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-gold/30 mix-blend-screen">
                    {[{x:200,y:150},{x:350,y:220},{x:500,y:180},{x:280,y:380},{x:620,y:300}].map((d, i) => (
                      <div key={i} className="absolute w-20 h-20 rounded-full bg-primary/50 blur-xl" style={{ left: d.x - 30, top: d.y - 30 }} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute bottom-4 left-4 bg-background/80 px-4 py-2 rounded-lg">
                <span className="text-[16px] font-mono text-foreground">{view}</span>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="flex gap-8 justify-center mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-primary" />
            <span className="text-[16px] text-muted-foreground">6 nm (AMPA)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border-2 border-gold" />
            <span className="text-[16px] text-muted-foreground">12 nm (NMDA)</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
