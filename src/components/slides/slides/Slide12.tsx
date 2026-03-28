import { motion } from "framer-motion";
import { SlideLayout, SlideTitle, KeyLine, FadeIn } from "../SlideLayout";

export default function Slide12() {
  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>Why use a Gaussian instead of one positive pixel?</SlideTitle>
        <FadeIn delay={0.3}>
          <p className="text-[26px] font-body text-muted-foreground mt-4 max-w-[1100px]">
            If only one exact pixel were positive, training would be too brittle. A Gaussian heatmap provides graceful falloff:
            exact center = best, nearby = somewhat correct, far away = wrong.
          </p>
        </FadeIn>

        <div className="flex-1 flex items-center justify-center gap-20">
          {/* One-hot */}
          <FadeIn delay={0.5}>
            <div className="flex flex-col items-center">
              <div className="w-[350px] h-[280px] rounded-xl border border-border bg-background relative flex items-end justify-center pb-4">
                <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 w-[3px] h-[200px] bg-destructive" />
                <div className="absolute bottom-[60px] left-[60px] right-[60px] h-[1px] bg-border" />
                <span className="text-[16px] text-muted-foreground">position</span>
              </div>
              <span className="text-[20px] mt-4 text-foreground font-medium">One-hot target</span>
              <span className="text-[16px] text-destructive">Brittle — only 1 pixel correct</span>
            </div>
          </FadeIn>

          {/* Gaussian */}
          <FadeIn delay={0.7}>
            <div className="flex flex-col items-center">
              <div className="w-[350px] h-[280px] rounded-xl border border-primary/30 bg-background relative flex items-end justify-center pb-4 glow-cyan">
                {/* Gaussian curve approximation */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 350 280" fill="none">
                  <path d="M 60 220 Q 100 220 130 210 Q 150 200 160 180 Q 170 140 175 80 Q 180 140 190 180 Q 200 200 220 210 Q 250 220 290 220"
                    stroke="hsl(185 80% 50%)" strokeWidth="3" fill="none" />
                  <path d="M 60 220 Q 100 220 130 210 Q 150 200 160 180 Q 170 140 175 80 Q 180 140 190 180 Q 200 200 220 210 Q 250 220 290 220 L 290 220 L 60 220 Z"
                    fill="hsl(185 80% 50% / 0.1)" />
                </svg>
                <div className="absolute bottom-[60px] left-[60px] right-[60px] h-[1px] bg-border" />
                <span className="text-[16px] text-muted-foreground">position</span>
              </div>
              <span className="text-[20px] mt-4 text-foreground font-medium">Gaussian target</span>
              <span className="text-[16px] text-primary">"Close is partially right"</span>
            </div>
          </FadeIn>
        </div>

        <KeyLine>Gaussian targets make center learning smoother and more stable.</KeyLine>
      </div>
    </SlideLayout>
  );
}
