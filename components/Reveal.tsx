'use client';

import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, duration = 1, distance = 28, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <RevealWrap
      ref={ref}
      className={className}
      $visible={visible}
      $delay={delay}
      $duration={duration}
      $distance={distance}
    >
      {children}
    </RevealWrap>
  );
}

const RevealWrap = styled.div<{ $visible: boolean; $delay: number; $duration: number; $distance: number }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  filter: ${({ $visible }) => ($visible ? 'blur(0px)' : 'blur(10px)')};
  transform: translateY(${({ $visible, $distance }) => ($visible ? '0' : `${$distance}px`)});
  transition:
    opacity ${({ $duration }) => $duration}s ease ${({ $delay }) => $delay}ms,
    filter ${({ $duration }) => $duration}s ease ${({ $delay }) => $delay}ms,
    transform ${({ $duration }) => $duration}s ease ${({ $delay }) => $delay}ms;
`;
