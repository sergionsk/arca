// components/sections/Faq.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';

const faqs = [
  {
    question: 'Сколько прослужит скульптура на улице?',
    answer:
      'Нержавейка и бронза при нормальном уходе — десятилетиями. Стеклопластик с правильным покрытием и монтажом тоже хорошо держит улицу. Расскажем подробнее под ваш материал и климат.',
  },
  {
    question: 'Что будет с покрытием через несколько лет?',
    answer:
      'Используем уличные системы окраски и грунты, соблюдаем технологию подготовки поверхности. На сложных объектах закладываем плановое обслуживание — чтобы объект всегда выглядел как в день сдачи.',
  },
  {
    question: 'Можно заказать только производство без монтажа?',
    answer:
      'Да. Делаем и полный цикл, и только производство с упаковкой и доставкой до вашего объекта. Обсуждается на старте.',
  },
  {
    question: 'Работаете по всей России?',
    answer:
      'Да. Логистику и монтаж организуем под ваш регион — от Калининграда до Владивостока.',
  },
  {
    question: 'Можно сделать объект по нашему эскизу или референсу?',
    answer:
      'Конечно. Работаем по вашим материалам и помогаем адаптировать идею под реальный материал, размер и бюджет.',
  },
  {
    question: 'Нужны ли согласования для установки объекта?',
    answer:
      'Зависит от места. Расскажем что нужно в вашем случае — и при необходимости поможем с документацией.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <Container>
        <SectionHeader title="Частые вопросы" centered={false} />
        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-0">
              <button
                className="flex justify-between items-center w-full py-5 text-left text-lg font-medium text-gray-900 hover:text-amber-600 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Faq;