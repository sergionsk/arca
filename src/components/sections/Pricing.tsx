// components/sections/Pricing.tsx
'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const tiers = [
  {
    name: 'Малые объекты',
    price: 'от 350 000 ₽',
    description: 'До 2 метров · нержавейка, бронза или стеклопластик',
  },
  {
    name: 'Средние объекты',
    price: 'от 950 000 ₽',
    description: '2–4 метра · часто составные конструкции',
  },
  {
    name: 'Крупные композиции',
    price: 'индивидуально',
    description: 'От 4 метров · сложная пластика, интеграция с подсветкой и рельефом',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <Container>
        <SectionHeader
          title="Сколько стоит арт-объект или скульптура"
          subtitle="Точная цена зависит от размера, материала и сложности. Вот ориентиры, чтобы понимать порядок цифр"
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-2 text-gray-600">{tier.description}</p>
                <p className="mt-4 text-3xl font-bold text-amber-600">{tier.price}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" href="#contact">Получить расчёт за 24 часа →</Button>
          <p className="mt-4 text-sm text-gray-500">Достаточно фото места и короткого описания задачи</p>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;