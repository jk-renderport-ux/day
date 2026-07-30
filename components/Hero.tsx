'use client';

import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import TentIcon from './icons/TentIcon';
import Reveal from './Reveal';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [fadeOpacity, setFadeOpacity] = useState(1);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const height = rect.height || 1;
      const scrolledPast = -rect.top;
      const start = height * 0.35;
      const end = height * 0.95;
      const t = Math.min(Math.max((scrolledPast - start) / (end - start), 0), 1);
      setFadeOpacity(1 - t);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <HeroSection ref={sectionRef}>
      <HeroOverlay style={{ opacity: fadeOpacity }} />
      <HeroContent style={{ opacity: fadeOpacity }}>
        <Reveal delay={0}>
          <HeroTitle>Glamping</HeroTitle>
        </Reveal>

        <Reveal delay={150}>
          <HeroBadge>
            <HeroBadgeIcon>
              <TentIcon size={13} />
              グランピングサイト
            </HeroBadgeIcon>
            <HeroBadgeCount>26</HeroBadgeCount>
          </HeroBadge>
        </Reveal>

        <Reveal delay={300}>
          <HeroText>
            木々に囲まれたお洒落な隠れ家で、
            <br />
            自然の呼吸を感じる優雅なグランピング体験。
            <br />
            貸切の露天風呂やサウナに癒やされながら、
            <br />
            森の中でただ心を満たす時間を。
          </HeroText>
        </Reveal>

        <Reveal delay={450}>
          <HeroButton href="#glamping-slideshow">
            詳しくはこちら
            <span>→</span>
          </HeroButton>
        </Reveal>
      </HeroContent>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100svh;
  overflow: hidden;
`;

const HeroOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 70vh;
  background: linear-gradient(
    180deg,
    rgba(10, 14, 8, 0) 0%,
    rgba(10, 14, 8, 0.45) 22%,
    rgba(10, 14, 8, 0.45) 78%,
    rgba(10, 14, 8, 0) 100%
  );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px;
`;

const HeroTitle = styled.h1`
  font-family: Georgia, 'Times New Roman', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 56px;
  letter-spacing: 1px;
  color: #fff;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.35);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 76px;
    margin-bottom: 32px;
  }
`;

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 28px;
`;

const HeroBadgeIcon = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #2b3324;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 8px 14px;
`;

const HeroBadgeCount = styled.span`
  display: inline-flex;
  align-items: center;
  background: #d9d9d9;
  color: #2b2b2b;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 14px;
`;

const HeroText = styled.p`
  font-family: 'Hiragino Mincho ProN', 'Noto Serif JP', serif;
  font-size: 14px;
  line-height: 1.9;
  color: #fff;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.35);
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

const HeroButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 999px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 13px 28px;
  transition: background-color 0.25s ease, color 0.25s ease;

  span {
    transition: transform 0.25s ease;
  }

  &:hover {
    background: #fff;
    color: #2b3324;
  }

  &:hover span {
    transform: translateX(4px);
  }
`;
