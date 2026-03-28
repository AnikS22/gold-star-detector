import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, FadeIn, GlowDot } from "../SlideLayout";
import temSynapse from "@/assets/tem-synapse.jpg";

export default function Slide01() {
  const dots = [
    { x: 620, y: 340, delay: 1.2 },
    { x: 780, y: 410, delay: 1.5 },
    { x: 540, y: 480, delay: 1.8 },
    { x: 900, y: 360, delay: 2.0 },
    { x: 700, y: 520, delay: 2.3 },
    { x: 850, y: 480, delay: 2.5 },
    { x: 1050, y: 390, delay: 1.7 },
    { x: 1150, y: 450, delay: 2.1 },
  ];

  return (
    <SlideLayout>
      {/* Full TEM background with zoom effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.15 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <img src={temSynapse} alt="TEM synapse" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/90" />
      </motion.div>

      {/* Glowing detection dots */}
      {dots.map((d, i) => (
        <GlowDot key={i} x={d.x} y={d.y} delay={d.delay} color="cyan" size={14} />
      ))}

      {/* Title content */}
      <div className="absolute inset-0 flex flex-col justify-center px-[120px]">
        <FadeIn delay={0.3}>
          <p className="text-[22px] font-mono text-primary tracking-widest uppercase mb-6">MidasMap</p>
        </FadeIn>
        <SlideTitle>
          <span className="text-foreground">What if a machine could </span>
          <span className="text-cyan text-glow-cyan">see</span>
          <span className="text-foreground"> receptor proteins</span>
          <br />
          <span className="text-foreground">in electron microscopy?</span>
        </SlideTitle>

        <div className="mt-16 space-y-4">
          {["Tiny particles", "Massive biological meaning", "Painfully slow to count by hand"].map((t, i) => (
            <FadeIn key={i} delay={1.0 + i * 0.25}>
              <p className="text-[30px] font-body text-muted-foreground">{t}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={2.0}>
          <div className="mt-16 border-t border-primary/30 pt-6">
            <p className="text-[24px] font-body text-primary">
              MidasMap detects immunogold particles in TEM synapse images automatically.
            </p>
          </div>
        </FadeIn>
      </div>
    </SlideLayout>
  );
}
