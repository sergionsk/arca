'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

// Временные данные
const projects = [
  {
    id: 1,
    title: 'Скульптура "Крылья"',
    image: '/images/portfolio/1.jpg',
    category: 'Городской парк',
  },
  {
    id: 2,
    title: 'Композиция "Древо"',
    image: '/images/portfolio/2.jpg',
    category: 'Жилой комплекс',
  },
  {
    id: 3,
    title: 'Арт-объект "Поток"',
    image: '/images/portfolio/3.jpg',
    category: 'Бизнес-центр',
  },
  {
    id: 4,
    title: 'Скульптура "Лось"',
    image: '/images/portfolio/4.jpg',
    category: 'Загородный клуб',
  },
  {
    id: 5,
    title: 'Скульптура "Лось"',
    image: '/images/portfolio/5.jpg',
    category: 'Загородный клуб',
  },
  {
    id: 6,
    title: 'Скульптура "Лось"',
    image: '/images/portfolio/6.jpg',
    category: 'Загородный клуб',
  },
  {
    id: 7,
    title: 'Скульптура "Лось"',
    image: '/images/portfolio/7.jpg',
    category: 'Загородный клуб',
  },
  {
    id: 8,
    title: 'Скульптура "Лось"',
    image: '/images/portfolio/p8.jpg',
    category: 'Загородный клуб',
  },
  {
    id: 9,
    title: 'Скульптура "Лось"',
    image: '/images/portfolio/p9.jpg',
    category: 'Загородный клуб',
  },
  {
    id: 10,
    title: 'Скульптура "Лось"',
    image: '/images/portfolio/p10.jpg',
    category: 'Загородный клуб',
  },
  {
    id: 11,
    title: 'Скульптура "Лось"',
    image: '/images/portfolio/p11.jpg',
    category: 'Загородный клуб',
  },
  {
    id: 12,
    title: 'Скульптура "Лось"',
    image: '/images/portfolio/p12.jpg',
    category: 'Загородный клуб',
  },
  {
    id: 13,
    title: 'Скульптура "Лось"',
    image: '/images/portfolio/p13.jpg',
    category: 'Загородный клуб',
  },
  {
    id: 14,
    title: 'Скульптура "Лось"',
    image: '/images/portfolio/p14.jpg',
    category: 'Загородный клуб',
  },
  {
    id: 15,
    title: 'Скульптура "Лось"',
    image: '/images/portfolio/p15.jpg',
    category: 'Загородный клуб',
  },
  {
    id: 16,
    title: 'Скульптура "Лось"',
    image: '/images/portfolio/p16.jpg',
    category: 'Загородный клуб',
  },
  // ... можно добавить
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

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
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-white">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Модальное окно для детального просмотра (упрощённо) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full aspect-video bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain"
              />
              <button
                className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2"
                onClick={() => setSelectedProject(null)}
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