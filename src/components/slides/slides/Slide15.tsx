import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, KeyLine, FadeIn } from "../SlideLayout";

export default function Slide15() {
  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>Seeing both <span className="text-cyan">detail</span> and <span className="text-gold">context</span></SlideTitle>
        <FadeIn delay={0.3}>
          <p className="text-[26px] font-body text-muted-foreground mt-4 max-w-[1100px]">
            To distinguish beads from vesicles, the model needs both fine spatial detail and broader local context.
            BiFPN combines features from different scales.
          </p>
        </FadeIn>

        <div className="flex-1 flex items-center justify-center">
          <FadeIn delay={0.5}>
            <div className="flex items-center gap-12">
              {/* Detail stream */}
              <motion.div
                className="w-[300px] h-[250px] rounded-xl border border-primary/40 bg-primary/5 flex flex-col items-center justify-center p-6"
                animate={{ boxShadow: ["0 0 0px hsl(185 80% 50% / 0)", "0 0 20px hsl(185 80% 50% / 0.2)", "0 0 0px hsl(185 80% 50% / 0)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-[48px] mb-4">🔬</div>
                <h3 className="text-[24px] font-semibold text-primary">Fine Detail</h3>
                <p className="text-[18px] text-muted-foreground text-center mt-2">Pixel-level spatial features from shallow layers</p>
              </motion.div>

              {/* Merge arrows */}
              <div className="flex flex-col items-center gap-4">
                <motion.div className="text-[30px] text-primary" animate={{ x: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.div>
                <motion.div className="text-[30px] text-gold" animate={{ x: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}>→</motion.div>
              </div>

              {/* Fused */}
              <motion.div
                className="w-[300px] h-[250px] rounded-xl border border-border bg-gradient-to-br from-primary/10 to-gold/10 flex flex-col items-center justify-center p-6 glow-cyan"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}
              >
                <div className="text-[48px] mb-4">⚡</div>
                <h3 className="text-[24px] font-semibold text-foreground">BiFPN Fusion</h3>
                <p className="text-[18px] text-muted-foreground text-center mt-2">Multi-scale fused representation</p>
              </motion.div>

              {/* Context stream arrow */}
              <div className="flex flex-col items-center gap-4">
                <motion.div className="text-[30px] text-primary" animate={{ x: [-10, 0, -10] }} transition={{ duration: 1.5, repeat: Infinity }}>←</motion.div>
              </div>

              {/* Context stream */}
              <motion.div
                className="w-[300px] h-[250px] rounded-xl border border-gold/40 bg-gold/5 flex flex-col items-center justify-center p-6"
                animate={{ boxShadow: ["0 0 0px hsl(45 90% 55% / 0)", "0 0 20px hsl(45 90% 55% / 0.2)", "0 0 0px hsl(45 90% 55% / 0)"] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="text-[48px] mb-4">🔭</div>
                <h3 className="text-[24px] font-semibold text-gold">Broad Context</h3>
                <p className="text-[18px] text-muted-foreground text-center mt-2">Semantic context from deeper layers</p>
              </motion.div>
            </div>
          </FadeIn>
        </div>

        <KeyLine>The model asks "is this the right dark structure in the right context?"</KeyLine>
      </div>
    </SlideLayout>
  );
}
