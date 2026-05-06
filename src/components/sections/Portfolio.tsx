// components/sections/Portfolio.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import clsx from 'clsx';

// Типы для категорий и изображений
interface PortfolioImage {
  id: number;
  src: string;
  title: string;
  description?: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  images: PortfolioImage[];
}

// Данные портфолио (замените своими изображениями)
const portfolioData: Category[] = [
  {
    id: 'stainless',
    title: 'Нержавеющая сталь',
    description: 'Скульптуры и арт-объекты из нержавеющей стали — долговечность, современный стиль и устойчивость к погодным условиям.',
    images: [
      { id: 1, src: '/images/portfolio/4.jpg', title: 'Бесконечность', description: 'Парк "Зарядье", 2023' },
      { id: 2, src: '/images/portfolio/6.jpg', title: 'Вечный огонь', description: 'Бизнес-центр "Башня", 2024' },
      { id: 3, src: '/images/portfolio/p8.jpg', title: 'Арт-объект ', description: 'ЖК "Речной", 2023' },
      { id: 4, src: '/images/portfolio/p9.jpg', title: 'Инсталляция "Отражение"', description: 'Технопарк, 2024' },
      { id: 5, src: '/images/portfolio/p10.jpg', title: 'Инсталляция "Отражение"', description: 'Технопарк, 2024' },
      { id: 6, src: '/images/portfolio/p11.jpg', title: 'Инсталляция "Отражение"', description: 'Технопарк, 2024' },
      { id: 7, src: '/images/portfolio/p13.jpg', title: 'Инсталляция "Отражение"', description: 'Технопарк, 2024' },
      { id: 8, src: '/images/portfolio/p16.jpg', title: 'Инсталляция "Отражение"', description: 'Технопарк, 2024' },
    ],
  },
  {
    id: 'bronze',
    title: 'Бронза',
    description: 'Классика и благородство. Бронзовые скульптуры для парков, скверов и частных коллекций.',
    images: [
      { id: 9, src: '/images/portfolio/bronze-1.jpg', title: 'Памятник основателям города', description: 'Сквер у администрации, 2022' },
      { id: 10, src: '/images/portfolio/bronze-2.jpg', title: 'Скульптура "Мудрая сова"', description: 'Детский парк, 2023' },
      { id: 11, src: '/images/portfolio/bronze-3.jpg', title: 'Композиция "Семья"', description: 'Коттеджный посёлок, 2024' },
      { id: 12, src: '/images/portfolio/bronze-4.jpg', title: 'Бюст деятеля культуры', description: 'Театральная площадь, 2023' },
    ],
  },
  {
    id: 'panels',
    title: 'Декоративное панно на стену',
    description: 'Настенные панно из металла для интерьеров и фасадов. Индивидуальный дизайн под ваш проект.',
    images: [
      { id: 13, src: '/images/portfolio/panel-1.jpg', title: 'Панно "Древо жизни"', description: 'Холл бизнес-центра, 2024' },
      { id: 14, src: '/images/portfolio/panel-2.jpg', title: 'Модульная композиция "Город"', description: 'Ресторан, 2023' },
      { id: 15, src: '/images/portfolio/panel-3.jpg', title: 'Панно "Волна"', description: 'СПА-центр, 2024' },
      { id: 16, src: '/images/portfolio/panel-4.jpg', title: 'Фасадное панно', description: 'Торговый центр, 2023' },
    ],
  },
];

const Portfolio = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <Container>
        <SectionHeader
          title="Объекты, которые меняют пространства"
          subtitle="Каждый проект — своя история, задача и бюджет"
        >
          <div className="mt-8">
            <Button href="#contact" size="lg">
              Хочу обсудить свой объект →
            </Button>
          </div>
        </SectionHeader>

        {/* Категории-аккордеон */}
        <div className="mt-16 space-y-4">
          {portfolioData.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              {/* Заголовок категории (кликабельный) */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full text-left p-6 hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-gray-500 mt-1">{category.description}</p>
                  </div>
                  <span className="text-3xl text-amber-600">
                    {openCategory === category.id ? '−' : '+'}
                  </span>
                </div>
              </button>

              {/* Выпадающая галерея */}
              <AnimatePresence>
                {openCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-gray-100">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                        {category.images.map((image, idx) => (
                          <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                          >
                            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                              <Image
                                src={image.src}
                                alt={image.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <p className="mt-2 text-sm font-medium text-gray-800">{image.title}</p>
                            {image.description && (
                              <p className="text-xs text-gray-500">{image.description}</p>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>

      {/* Модальное окно для просмотра изображения в полном размере */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video max-h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-gray-900">{selectedImage.title}</h3>
                {selectedImage.description && (
                  <p className="text-gray-600">{selectedImage.description}</p>
                )}
              </div>
              <button
                className="absolute top-3 right-3 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;