import { motion } from "framer-motion";
import { SlideLayout, FadeIn, GlowDot } from "../SlideLayout";
import temSynapse from "@/assets/tem-synapse.jpg";

export default function Slide25() {
  const detections = [
    { x: 620, y: 340 }, { x: 780, y: 410 }, { x: 540, y: 480 },
    { x: 900, y: 360 }, { x: 700, y: 520 }, { x: 850, y: 480 },
    { x: 1050, y: 390 }, { x: 1150, y: 450 }, { x: 480, y: 380 },
    { x: 1000, y: 500 },
  ];

  return (
    <SlideLayout>
      {/* Return to opening TEM, now with detections */}
      <div className="absolute inset-0">
        <img src={temSynapse} alt="TEM synapse" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-background/90" />
      </div>

      {/* Detections overlay */}
      {detections.map((d, i) => (
        <GlowDot key={i} x={d.x} y={d.y} delay={0.5 + i * 0.12} color={i % 3 === 0 ? "gold" : "cyan"} size={12} />
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[200px]">
        <FadeIn delay={0.3}>
          <h1 className="text-[52px] font-bold text-foreground leading-tight">
            MidasMap in one sentence
          </h1>
        </FadeIn>

        <FadeIn delay={0.7}>
          <p className="text-[24px] font-body text-muted-foreground mt-8 max-w-[1200px] leading-relaxed">
            MidasMap turns a slow, subjective immunogold counting task into a fast, reproducible workflow
            by combining EM-pretrained feature extraction, center heatmaps, sub-pixel offsets, and
            robust evaluation for tiny-particle detection in TEM images.
          </p>
        </FadeIn>

        <div className="mt-16 space-y-3">
          {["Tiny dots.", "Precise biology.", "A system built to actually understand both."].map((line, i) => (
            <FadeIn key={i} delay={1.2 + i * 0.3}>
              <motion.p
                className={`text-[36px] font-display font-semibold ${i === 2 ? "text-cyan text-glow-cyan" : "text-foreground"}`}
              >
                {line}
              </motion.p>
            </FadeIn>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
