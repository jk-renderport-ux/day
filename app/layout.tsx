import type { Metadata } from 'next';
import EmotionRegistry from './registry';
import './globals.css';

export const metadata: Metadata = {
  title: 'Glamping | Render Fika Sammu',
  description: '木々に囲まれたお洒落な隠れ家で、自然の呼吸を感じる優雅なグランピング体験。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <EmotionRegistry>{children}</EmotionRegistry>
      </body>
    </html>
  );
}
