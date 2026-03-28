import { SlideLayout, SlideTitle, BulletList, KeyLine, FadeIn, CardBlock } from "../SlideLayout";

export default function Slide09() {
  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>Why start with an <span className="text-gold text-glow-gold">EM-pretrained</span> backbone?</SlideTitle>
        <FadeIn delay={0.3}>
          <p className="text-[26px] font-body text-muted-foreground mt-4">
            The dataset is tiny. Instead of learning EM vision from scratch, MidasMap uses ResNet-50 pretrained on CEM500K.
          </p>
        </FadeIn>

        <div className="flex-1 flex items-center">
          <div className="flex gap-12 w-full">
            <div className="flex-1">
              <FadeIn delay={0.5}>
                <div className="bg-slide-surface border border-destructive/30 rounded-xl p-8">
                  <h3 className="text-[24px] font-semibold text-destructive mb-4">❌ From scratch</h3>
                  <p className="text-[20px] font-body text-muted-foreground">Must learn basic microscopy vision from ~450 labels. Slow convergence, poor generalization.</p>
                </div>
              </FadeIn>
            </div>
            <div className="flex-1">
              <FadeIn delay={0.7}>
                <div className="bg-slide-surface border border-primary/30 rounded-xl p-8 glow-cyan">
                  <h3 className="text-[24px] font-semibold text-primary mb-4">✓ EM-pretrained</h3>
                  <p className="text-[20px] font-body text-muted-foreground">Already knows EM textures, membranes, vesicles. Fine-tuning focuses on particle discrimination.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        <BulletList delay={0.9} items={[
          "Already knows EM texture statistics",
          "Understands membranes, vesicles, and ultrastructure",
          "Fine-tuning focuses on particle discrimination, not basic microscopy",
        ]} />
        <KeyLine delay={1.2}>Pretraining gives the model a strong electron microscopy prior.</KeyLine>
      </div>
    </SlideLayout>
  );
}
