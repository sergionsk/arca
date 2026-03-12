// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Arca Objects — скульптуры и арт-объекты',
  description: 'Создаём арт-объекты из нержавейки, бронзы и стеклопластика под ключ. Работаем по всей России.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}