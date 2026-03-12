// components/sections/WhyUs.tsx
'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';

const reasons = [
  {
    title: 'Концепт до договора',
    description:
      'Показываем как будет выглядеть ваш объект ещё до подписания договора. Вы видите результат и принимаете решение осознанно.',
    icon: '🎨',
  },
  {
    title: 'Любой материал, любая сложность',
    description:
      'Нержавейка, бронза, стеклопластик — работаем со всеми материалами и подбираем оптимальный под задачу и бюджет.',
    icon: '⚙️',
  },
  {
    title: 'Живой менеджер на весь проект',
    description:
      'С вами работает один человек от первого звонка до монтажа. Он знает ваш проект насквозь и отвечает за результат лично.',
    icon: '👤',
  },
  {
    title: 'Прозрачная смета',
    description:
      'Называем цену до начала работ и держим её. Все изменения — только по согласованию с вами.',
    icon: '📋',
  },
  {
    title: 'Объект на годы',
    description:
      'Проектируем с расчётом на климат, нагрузку и время. Объект выглядит достойно через 10 лет.',
    icon: '⏳',
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <Container>
        <SectionHeader
          title="Почему заказывают у нас"
          centered={false}
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{reason.title}</h3>
                <p className="mt-2 text-gray-600">{reason.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;