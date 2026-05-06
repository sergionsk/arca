// components/sections/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';
import { AnimatedImageBackground } from '@/components/ui/AnimatedImageBackground'; // импортируем картинку с анимацией

const Hero = () => {
  return (
    <section className="relative bg-gray-900 py-20 md:py-32 overflow-hidden min-h-[600px] flex items-center">
      {/* Анимированное фоновое изображение */}
      <AnimatedImageBackground
        src="/images/hero-bg.jpg"     // путь к вашей картинке
        overlay
        overlayOpacity="bg-black/40"   // затемнение для читаемости текста
      />

      {/* Контент */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl relative z-10 text-white"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Создаем места, куда хочется возвращаться
          </h1>
          <p className="mt-6 text-4xl text-white/90 max-w-3xl">
            Арт-объекты, за которые будет гордость через 10 лет. Полный цикл — от идеи до монтажа под ключ
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" href="#contact">
              Получить концепт бесплатно →
            </Button>
            <Button
              size="lg"
              variant="outline"
              href="#pricing"
              className="border-white text-white hover:bg-white/10"
            >
              Рассчитать стоимость →
            </Button>
          </div>
          <p className="mt-8 text-sm text-white/80">
            Ответим в течение 24 часов · Работаем с девелоперами, парками и частными заказчиками по всей России
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;