'use client';

import { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  src: string;          // путь к видео (например, /videos/hero.mp4)
  poster?: string;      // изображение-заглушка (пока видео грузится)
  overlay?: boolean;    // затемнять ли фон для контраста текста
  overlayOpacity?: string; // класс затемнения (по умолчанию bg-black/30)
}

export const VideoBackground = ({
  src,
  poster,
  overlay = true,
  overlayOpacity = 'bg-black/30',
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Пытаемся воспроизвести видео (автовоспроизведение может быть заблокировано)
      videoRef.current.play().catch(() => {
        // Если автовоспроизведение не удалось – можно ничего не делать или показать кнопку запуска
        console.log('Autoplay was prevented');
      });
    }
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
        {/* Для лучшей поддержки добавьте WebM: <source src={src.replace('.mp4', '.webm')} type="video/webm" /> */}
        Ваш браузер не поддерживает видео.
      </video>
      {overlay && <div className={`absolute inset-0 ${overlayOpacity}`} />}
    </>
  );
};