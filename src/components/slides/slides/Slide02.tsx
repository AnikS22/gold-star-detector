import { SlideLayout, SlideTitle, BulletList, KeyLine, FadeIn, CardBlock } from "../SlideLayout";
import receptorDiagram from "@/assets/receptor-diagram.jpg";

export default function Slide02() {
  return (
    <SlideLayout>
      <div className="absolute inset-0 flex">
        {/* Left side */}
        <div className="flex-1 px-[80px] py-[80px] flex flex-col justify-center">
          <SlideTitle>Why do these tiny dots matter?</SlideTitle>
          <div className="mt-10">
            <BulletList items={[
              "6 nm beads mark AMPA receptors",
              "12 nm beads mark NR1 / NMDA receptors",
              "Their positions help neuroscientists study synaptic organization",
            ]} />
          </div>
          <div className="mt-10 flex gap-6">
            <CardBlock title="⏱ 30–60 min" text="Manual counting per image" delay={0.6} />
            <CardBlock title="📊 100s" text="Synapses in large studies" delay={0.7} />
            <CardBlock title="🎯 Subjective" text="Annotation varies by person" delay={0.8} />
          </div>
        </div>
        {/* Right side */}
        <div className="w-[600px] flex items-center justify-center p-8">
          <FadeIn delay={0.5}>
            <img src={receptorDiagram} alt="Receptor diagram" className="rounded-xl border border-border" loading="lazy" width={500} height={500} />
          </FadeIn>
        </div>
      </div>
    </SlideLayout>
  );
}
