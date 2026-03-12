// components/sections/HowWeWork.tsx
'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

const steps = [
  {
    number: '01',
    title: 'Знакомимся с задачей',
    description:
      'Рассказываете про место и людей, ради которых оно создаётся. Созваниваемся, задаём вопросы, фиксируем суть и бюджет.',
  },
  {
    number: '02',
    title: 'Показываем концепт',
    description:
      'Уже на первом созвоне показываем, как может выглядеть ваш объект — визуально, прямо в разговоре. Вы видите результат до того, как подписан договор.',
  },
  {
    number: '03',
    title: 'Считаем бюджет честно',
    description:
      'Показываем из чего складывается цена. Где можно оптимизировать без потери идеи — скажем прямо и сразу.',
  },
  {
    number: '04',
    title: 'Производство под контролем',
    description:
      'Простые и средние объекты делаем на собственном заводе в России. Сложные формы — через проверенных партнёров. Вы видите каждый этап: фото, отчёты, промежуточная приёмка.',
  },
  {
    number: '05',
    title: 'Сдаём и остаёмся на связи',
    description:
      'Доставка, монтаж, финальная приёмка. Фотографируем готовый объект. Остаёмся на связи после сдачи.',
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-20 bg-white">
      <Container>
        <SectionHeader
          title="От идеи до объекта на площадке — пять шагов"
          centered={false}
        />
        <div className="mt-16 space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-start gap-6"
            >
              <div className="text-5xl font-bold text-amber-600 md:w-24">{step.number}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-lg text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" href="#contact">
            Обсудить мой проект →
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HowWeWork;