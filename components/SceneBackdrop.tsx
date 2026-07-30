'use client';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Image from 'next/image';

export default function SceneBackdrop() {
  return (
    <Backdrop>
      <Zoom>
        <Image src="/img/glamping_main.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
      </Zoom>
    </Backdrop>
  );
}

const kenBurns = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.08);
  }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
`;

const Zoom = styled.div`
  position: absolute;
  inset: 0;
  animation: ${kenBurns} 20s ease-out forwards;
`;
