// components/sections/ForWhom.tsx
'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';

const cards = [
  {
    title: 'Девелоперы и ЖК',
    description:
      'Двор — это первое, что видит покупатель квартиры. Арт-объект превращает его в аргумент покупки и точку гордости для жильцов.',
    icon: '🏢',
  },
  {
    title: 'Городские администрации и парки',
    description:
      'Жители запоминают объекты, у которых делают фото. Создаём скульптуры и МАФы, которые становятся символом места и работают на него годами.',
    icon: '🌳',
  },
  {
    title: 'ТРЦ и бизнес-центры',
    description:
      'Арт-объект в вашем пространстве — точка притяжения, селфи-зона и повод прийти ещё раз. Делаем объекты, которые работают на трафик и запоминаемость.',
    icon: '🏬',
  },
  {
    title: 'Частные заказчики',
    description:
      'Усадьба, коттеджный посёлок или личный сад — создаём уникальные объекты под характер вашего места. Такого больше нигде не будет.',
    icon: '🏡',
  },
];

const ForWhom = () => {
  return (
    <section id="for-whom" className="py-20 bg-white">
      <Container>
        <SectionHeader
          title="Делаем пространства, о которых говорят и куда возвращаются"
          subtitle="Для каждого типа заказчиков — своё решение"
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 text-center">
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ForWhom;