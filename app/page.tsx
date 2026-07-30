import Hero from '@/components/Hero';
import GlampingSlideshow from '@/components/GlampingSlideshow';
import GlampingSpecs from '@/components/GlampingSpecs';
import SceneBackdrop from '@/components/SceneBackdrop';
import TestSpacer from '@/components/TestSpacer';

export default function Home() {
  return (
    <main>
      <TestSpacer background="#f6f0e4" label="上部テスト用スペース(クリームホワイト)" />
      <SceneBackdrop />
      <Hero />
      <GlampingSlideshow />
      <GlampingSpecs />
      <TestSpacer
        background="#3a4430"
        label="下部テスト用スペース(スライドショーと同色)"
        textColor="rgba(255, 255, 255, 0.4)"
      />
    </main>
  );
}
