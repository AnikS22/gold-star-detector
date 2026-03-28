import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, KeyLine, FadeIn } from "../SlideLayout";

const metrics = [
  { label: "LOOCV F1", value: "0.943", width: "94.3%" },
  { label: "6nm F1", value: "0.944", width: "94.4%" },
  { label: "6nm Recall", value: "100%", width: "100%" },
  { label: "12nm F1", value: "0.909", width: "90.9%" },
  { label: "12nm Recall", value: "100%", width: "100%" },
];

const stats = [
  { label: "Inference time", value: "~10s", sub: "per image on GPU" },
  { label: "Parameters", value: "24.4M", sub: "total model parameters" },
];

export default function Slide19() {
  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>Quantitative Performance</SlideTitle>

        <div className="flex-1 flex gap-16 mt-6">
          {/* Bar chart */}
          <div className="flex-1">
            <div className="space-y-6">
              {metrics.map((m, i) => (
                <FadeIn key={i} delay={0.3 + i * 0.12}>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[20px] font-body text-foreground">{m.label}</span>
                      <span className="text-[20px] font-mono text-primary font-semibold">{m.value}</span>
                    </div>
                    <div className="w-full h-8 bg-secondary rounded-lg overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-lg"
                        initial={{ width: "0%" }}
                        animate={{ width: m.width }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Stats cards */}
          <div className="w-[400px] flex flex-col justify-center gap-8">
            {stats.map((s, i) => (
              <FadeIn key={i} delay={1.0 + i * 0.2}>
                <div className="bg-slide-surface border border-border rounded-xl p-8 text-center">
                  <div className="text-[56px] font-bold text-primary text-glow-cyan">{s.value}</div>
                  <div className="text-[18px] text-muted-foreground mt-2">{s.sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <KeyLine delay={1.5}>The system finds essentially all labeled particles while keeping false positives limited.</KeyLine>
      </div>
    </SlideLayout>
  );
}
