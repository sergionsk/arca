'use client';

import Image from 'next/image';

interface AnimatedImageBackgroundProps {
  src: string;                // путь к изображению (например, /images/hero-bg.jpg)
  alt?: string;               // альтернативный текст
  overlay?: boolean;          // показывать ли затемнение поверх
  overlayOpacity?: string;    // класс затемнения (по умолчанию bg-black/30)
}

export const AnimatedImageBackground = ({
  src,
  alt = 'Background',
  overlay = true,
  overlayOpacity = 'bg-black/30',
}: AnimatedImageBackgroundProps) => {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover animate-ken-burns"
          sizes="100vw"
        />
      </div>
      {overlay && <div className={`absolute inset-0 ${overlayOpacity}`} />}
    </>
  );
};