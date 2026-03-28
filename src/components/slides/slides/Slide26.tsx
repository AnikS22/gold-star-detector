import { motion } from "framer-motion";
import { SlideLayout, FadeIn, GlowDot } from "../SlideLayout";

export default function Slide26() {
  // Floating detection dots in background
  const bgDots = Array.from({ length: 20 }).map((_, i) => ({
    x: 100 + Math.random() * 1720,
    y: 100 + Math.random() * 880,
    delay: Math.random() * 2,
    color: Math.random() > 0.5 ? "cyan" as const : "gold" as const,
  }));

  return (
    <SlideLayout>
      {/* Animated background dots */}
      {bgDots.map((d, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: d.x, top: d.y }}
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: d.delay }}
        >
          <div className={`w-3 h-3 rounded-full ${d.color === "cyan" ? "bg-primary/30" : "bg-gold/30"}`} />
        </motion.div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <FadeIn delay={0.2}>
          <p className="text-[22px] font-mono text-primary tracking-widest uppercase mb-8">MidasMap</p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <h1 className="text-[80px] font-bold text-foreground">Thank You</h1>
        </FadeIn>

        <FadeIn delay={0.8}>
          <p className="text-[36px] text-muted-foreground mt-6">Questions?</p>
        </FadeIn>

        <FadeIn delay={1.2}>
          <div className="mt-16 border-t border-border pt-8">
            <p className="text-[28px] font-display text-foreground font-medium">Anik Sahai</p>
            <div className="flex gap-8 mt-4 justify-center">
              {["GitHub", "Hugging Face", "Demo"].map((link, i) => (
                <motion.span
                  key={i}
                  className="text-[20px] text-primary cursor-default"
                  whileHover={{ scale: 1.1 }}
                >
                  {link}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </SlideLayout>
  );
}
