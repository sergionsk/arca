// components/sections/Contact.tsx
'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/forms/ContactForm';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (data: unknown) => {
    // Здесь будет отправка на сервер
    console.log(data);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader
              title="Расскажите про своё место — придумаем, что там поставить"
              centered={false}
            />
            <p className="mt-4 text-lg text-gray-600">
              Пришлите фото, план или просто опишите словами — что за пространство и какое ощущение хотите создать. Предложим несколько идей и ориентировочный бюджет в течение 24 часов. Без обязательств.
            </p>
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Личный блок</p>
              <div className="flex items-center mt-2">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-xl">
                  А
                </div>
                <div className="ml-4">
                  <p className="font-medium">Меня зовут Сергей</p>
                  <p className="text-sm text-gray-600">
                    описани внизу:

Меня зовут Сергей

Создаем арт-объекты и скульптуры, которые наполняют пространство характером и делают его выразительнее. Любовь к своему делу помогает нам воплощать идеи в жизнь, притягивая людям долгие годы.
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-1 text-sm">
                <p>📞 +7 (913) 717-33-82</p>
                <p>✉️ info@arca-objects.ru</p>
                <p>💬 Telegram / WhatsApp</p>
              </div>
            </div>
          </div>
          <div>
            {submitted ? (
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <p className="text-green-800 font-medium">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <ContactForm onSubmit={handleSubmit} />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;