import { SlideLayout, SlideTitle, BulletList, KeyLine, FadeIn } from "../SlideLayout";

export default function Slide23() {
  return (
    <SlideLayout>
      <div className="px-[100px] py-[80px] flex flex-col h-full">
        <SlideTitle>What this system does not solve <span className="text-gold">yet</span></SlideTitle>

        <div className="flex-1 flex gap-16 mt-8">
          <div className="flex-1 flex flex-col justify-center">
            <BulletList items={[
              "Trained on FFRIL TEM at a specific calibration",
              "Needs recalibration for other imaging setups",
              "Should be validated on new cohorts before publication-grade counting",
              "Not a clinical or diagnostic device",
              "Robustness across protocols needs more work",
            ]} />
          </div>

          <div className="w-[550px] flex items-center justify-center">
            <FadeIn delay={0.6}>
              <div className="relative w-[450px]">
                <div className="border-2 border-primary/30 rounded-xl p-8 text-center">
                  <h3 className="text-[24px] font-semibold text-primary mb-4">✓ What works now</h3>
                  <p className="text-[18px] font-body text-muted-foreground">
                    FFRIL TEM images with 6nm and 12nm immunogold particles at trained calibration
                  </p>
                </div>
                <div className="border-2 border-gold/30 rounded-xl p-8 text-center mt-6">
                  <h3 className="text-[24px] font-semibold text-gold mb-4">⚠ Needs validation</h3>
                  <p className="text-[18px] font-body text-muted-foreground">
                    Different microscopes, staining protocols, calibrations, and particle sizes
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <KeyLine>Strong results do not eliminate the need for external validation.</KeyLine>
      </div>
    </SlideLayout>
  );
}
