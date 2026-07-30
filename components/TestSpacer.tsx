'use client';

import styled from '@emotion/styled';

type TestSpacerProps = {
  background: string;
  label: string;
  textColor?: string;
};

export default function TestSpacer({ background, label, textColor = 'rgba(0, 0, 0, 0.3)' }: TestSpacerProps) {
  return (
    <Spacer style={{ background }}>
      <Label style={{ color: textColor }}>{label}</Label>
    </Spacer>
  );
}

const Spacer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  font-family: system-ui, sans-serif;
  font-size: 12px;
  letter-spacing: 0.05em;
`;
