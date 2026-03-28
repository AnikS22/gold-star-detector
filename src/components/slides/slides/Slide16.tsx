import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, KeyLine, FadeIn } from "../SlideLayout";

const phases = [
  { num: "1", title: "Train heads", desc: "Freeze backbone, train only detection heads", color: "primary" },
  { num: "2", title: "Unfreeze deeper layers", desc: "Gradually unfreeze ResNet layers", color: "primary" },
  { num: "3", title: "Full fine-tune", desc: "All parameters trainable, low learning rate", color: "primary" },
];

const augmentations = ["Rotations / flips", "Intensity shifts", "Noise injection", "Copy-paste beads", "Hard-mined patches"];
const antiOverfit = ["Reseed patches every epoch", "Early stopping", "Weight decay"];

export default function Slide16() {
  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>How the model was trained without overfitting</SlideTitle>

        <div className="flex-1 flex gap-12 mt-8">
          {/* Training phases timeline */}
          <div className="flex-1">
            <FadeIn delay={0.3}><h3 className="text-[28px] font-semibold text-foreground mb-8">3 Training Phases</h3></FadeIn>
            <div className="relative pl-8 border-l-2 border-primary/30">
              {phases.map((phase, i) => (
                <FadeIn key={i} delay={0.4 + i * 0.2}>
                  <div className="mb-10 relative">
                    <motion.div
                      className="absolute -left-[25px] w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-[18px]"
                      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.2 }}
                    >{phase.num}</motion.div>
                    <div className="ml-8">
                      <h4 className="text-[22px] font-semibold text-foreground">{phase.title}</h4>
                      <p className="text-[18px] text-muted-foreground mt-1">{phase.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Augmentation */}
          <div className="w-[380px]">
            <FadeIn delay={0.6}><h3 className="text-[28px] font-semibold text-foreground mb-6">Augmentation</h3></FadeIn>
            <div className="space-y-3">
              {augmentations.map((a, i) => (
                <FadeIn key={i} delay={0.7 + i * 0.08}>
                  <div className="bg-slide-surface border border-border rounded-lg px-5 py-3 text-[18px] text-secondary-foreground font-body">{a}</div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={1.2}><h3 className="text-[28px] font-semibold text-foreground mb-6 mt-10">Anti-overfit</h3></FadeIn>
            <div className="space-y-3">
              {antiOverfit.map((a, i) => (
                <FadeIn key={i} delay={1.3 + i * 0.08}>
                  <div className="bg-slide-surface border border-border rounded-lg px-5 py-3 text-[18px] text-secondary-foreground font-body">{a}</div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        <KeyLine delay={1.5}>With only a few hundred labels, the training pipeline mattered as much as the architecture.</KeyLine>
      </div>
    </SlideLayout>
  );
}
