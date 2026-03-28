import { SlideLayout, SlideTitle, KeyLine, FadeIn, CardBlock } from "../SlideLayout";

export default function Slide04() {
  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>Earlier attempts did not just struggle — parts of the pipeline were <span className="text-destructive">broken</span></SlideTitle>
        <FadeIn delay={0.3}>
          <p className="text-[26px] font-body text-muted-foreground mt-4 max-w-[1100px]">
            Coordinates were misinterpreted. Heatmap supervision was broken. Patch generation caused memorization.
            Models were learning from flawed targets.
          </p>
        </FadeIn>

        <div className="flex-1 flex items-center">
          <div className="flex gap-10 w-full">
            <CardBlock title="Bug 1: Wrong Coordinates" text="Micron coordinates misinterpreted → labels shifted off actual particles" delay={0.5} />
            <CardBlock title="Bug 2: Broken Heatmaps" text="Peaks below 1.0 → focal loss saw no true positives during training" delay={0.65} />
            <CardBlock title="Bug 3: Fixed Patches" text="Same patches replayed → model memorized instead of generalizing" delay={0.8} />
          </div>
        </div>

        <KeyLine delay={1.0}>
          The challenge was not only the biology. It was also a supervision and training pipeline problem.
        </KeyLine>
      </div>
    </SlideLayout>
  );
}
