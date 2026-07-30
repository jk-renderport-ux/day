'use client';

import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import Image from 'next/image';
import { useRef, useState } from 'react';

const SLIDES = [
  { src: '/img/glamping_img1.JPG', alt: 'ウッドデッキと焚き火台のあるテントサイト' },
  { src: '/img/glamping_img2.JPG', alt: 'ドーム型テント内のベッドルーム' },
  { src: '/img/glamping_img3.jpg', alt: 'テント内のプロジェクタースクリーン' },
  { src: '/img/glamping_img4.JPG', alt: 'テント内のリビングとダイニングスペース' },
  { src: '/img/glamping_img5.JPG', alt: 'ミニ冷蔵庫とウェルカムドリンクの用意されたキッチン' },
  { src: '/img/glamping_img6.jpg', alt: 'クラフトビールとお茶のアメニティ' },
  { src: '/img/glamping_img7.JPG', alt: 'テントから望むウッドデッキと森の景色' },
  { src: '/img/glamping_img8.JPG', alt: '森に囲まれたウッドデッキのダイニングテーブル' },
  { src: '/img/glamping_img9.JPG', alt: '焚き火を囲むチェアが並ぶデッキスペース' },
];

const mod = (n: number, m: number) => ((n % m) + m) % m;

export default function GlampingSlideshow() {
  const [slideState, setSlideState] = useState<{ current: number; previous: number | null }>({
    current: 0,
    previous: null,
  });
  const activeIndex = slideState.current;
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const goTo = (index: number) => {
    const next = mod(index, SLIDES.length);
    setSlideState((s) => (s.current === next ? s : { current: next, previous: s.current }));
    thumbRefs.current[next]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  return (
    <SlideshowSection id="glamping-slideshow">
      <BackgroundOverlay />
      <BackgroundBottomFade />

      <ContentContainer>
        <MainImageWrapper>
          {slideState.previous !== null && (
            <MainImageLayer key={`prev-${slideState.previous}`}>
              <Image
                src={SLIDES[slideState.previous].src}
                alt={SLIDES[slideState.previous].alt}
                fill
                sizes="(min-width: 768px) 1200px, 100vw"
                style={{ objectFit: 'cover' }}
              />
            </MainImageLayer>
          )}
          <MainImageLayer key={`cur-${activeIndex}`} $fade>
            <Image
              src={SLIDES[activeIndex].src}
              alt={SLIDES[activeIndex].alt}
              fill
              sizes="(min-width: 768px) 1200px, 100vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </MainImageLayer>
        </MainImageWrapper>

        <ThumbnailRow>
          <ArrowButton type="button" aria-label="前の画像" onClick={() => goTo(activeIndex - 1)}>
            ‹
          </ArrowButton>

          <ThumbnailTrack>
            {SLIDES.map((slide, index) => (
              <Thumbnail
                key={slide.src}
                type="button"
                ref={(el) => {
                  thumbRefs.current[index] = el;
                }}
                $active={index === activeIndex}
                onClick={() => goTo(index)}
                aria-label={`${index + 1}枚目の画像を表示`}
              >
                <Image src={slide.src} alt={slide.alt} fill sizes="20vw" style={{ objectFit: 'cover' }} />
              </Thumbnail>
            ))}
          </ThumbnailTrack>

          <ArrowButton type="button" aria-label="次の画像" onClick={() => goTo(activeIndex + 1)}>
            ›
          </ArrowButton>
        </ThumbnailRow>
      </ContentContainer>
    </SlideshowSection>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MainImageLayer = styled.div<{ $fade?: boolean }>`
  position: absolute;
  inset: 0;
  ${({ $fade }) =>
    $fade &&
    css`
      animation: ${fadeIn} 1.1s ease forwards;
    `}
`;

const SlideshowSection = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 64px 20px;

  @media screen and (min-width: 768px) {
    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 40px;
  }
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(58, 68, 48, 0) 0%,
    rgba(58, 68, 48, 0.6) 22%,
    rgba(58, 68, 48, 0.6) 100%
  );
  z-index: 1;
`;

const BackgroundBottomFade = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 55%;
  background: linear-gradient(180deg, rgba(58, 68, 48, 0) 0%, #3a4430 100%);
  z-index: 1;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const MainImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.35);
`;

const ThumbnailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    gap: 12px;
    margin-top: 28px;
  }
`;

const ArrowButton = styled.button`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 40px;
  line-height: 1;
  cursor: pointer;
  opacity: 0.75;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    width: 64px;
    height: 64px;
    font-size: 56px;
  }
`;

const ThumbnailTrack = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;

const Thumbnail = styled.button<{ $active: boolean }>`
  position: relative;
  flex: none;
  width: calc((100% - 2 * 8px) / 3);
  aspect-ratio: 16 / 9;
  border-radius: 0;
  overflow: hidden;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.2s ease;
  opacity: ${({ $active }) => ($active ? 1 : 0.6)};

  &:hover {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 4 * 12px) / 5);
  }
`;
