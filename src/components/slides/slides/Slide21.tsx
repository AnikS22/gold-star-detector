import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, BulletList, KeyLine, FadeIn } from "../SlideLayout";
import { Github, Upload, FileSpreadsheet } from "lucide-react";

export default function Slide21() {
  const steps = [
    { icon: <Upload size={32} />, label: "Upload TEM image" },
    { icon: "🔬", label: "Run detection" },
    { icon: "📊", label: "Review overlay" },
    { icon: <FileSpreadsheet size={32} />, label: "Export CSV" },
  ];

  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>This is not just a model — it is a <span className="text-cyan text-glow-cyan">usable workflow</span></SlideTitle>

        <div className="flex-1 flex gap-16 mt-8">
          <div className="flex-1">
            <BulletList items={[
              "Public weights and training code",
              "predict.py for batch inference",
              "Gradio app for interactive review",
              "CSV export in pixels and microns",
            ]} />

            <div className="flex gap-6 mt-10">
              <FadeIn delay={0.8}>
                <div className="bg-slide-surface border border-border rounded-xl px-6 py-4 flex items-center gap-3 hover:border-primary transition-all">
                  <Github size={24} className="text-foreground" />
                  <span className="text-[18px] text-foreground">GitHub</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.9}>
                <div className="bg-slide-surface border border-border rounded-xl px-6 py-4 flex items-center gap-3 hover:border-primary transition-all">
                  <span className="text-[24px]">🤗</span>
                  <span className="text-[18px] text-foreground">Hugging Face</span>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Workflow animation */}
          <div className="w-[700px] flex items-center justify-center">
            <div className="flex items-center gap-6">
              {steps.map((step, i) => (
                <FadeIn key={i} delay={0.5 + i * 0.2}>
                  <div className="flex items-center gap-6">
                    <motion.div
                      className="w-[140px] h-[140px] rounded-xl border border-border bg-slide-surface flex flex-col items-center justify-center gap-3"
                      whileHover={{ scale: 1.08, borderColor: "hsl(185 80% 50%)" }}
                    >
                      <div className="text-primary text-[32px]">{typeof step.icon === "string" ? step.icon : step.icon}</div>
                      <span className="text-[14px] text-muted-foreground text-center px-2">{step.label}</span>
                    </motion.div>
                    {i < steps.length - 1 && <span className="text-[24px] text-primary">→</span>}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        <KeyLine>The output is biology-ready: labeled particles, coordinates, and exportable tables.</KeyLine>
      </div>
    </SlideLayout>
  );
}
