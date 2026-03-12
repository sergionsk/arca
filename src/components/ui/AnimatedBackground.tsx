'use client';

import { useEffect, useRef } from 'react';

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    // Параметры анимации
    let time = 0;
    const speed = 0.0005;

    const draw = () => {
      if (!ctx || !canvas) return;
      time += speed;

      // Создаём плавный градиент, меняющий цвета
      const gradient = ctx.createLinearGradient(0, 0, width * (0.5 + 0.5 * Math.sin(time)), height * (0.5 + 0.5 * Math.cos(time * 0.8)));

      // Цвета: от тёплого серого к холодному серому с оттенком металлик
      const color1 = `hsl(${220 + 20 * Math.sin(time * 0.5)}, 30%, 98%)`;
      const color2 = `hsl(${200 + 30 * Math.cos(time * 0.3)}, 25%, 95%)`;
      const color3 = `hsl(${180 + 40 * Math.sin(time * 0.7)}, 20%, 92%)`;

      gradient.addColorStop(0, color1);
      gradient.addColorStop(0.5, color2);
      gradient.addColorStop(1, color3);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      requestAnimationFrame(draw);
    };

    const animationId = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />;
};