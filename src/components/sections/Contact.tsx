// components/sections/Contact.tsx
'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/forms/ContactForm';
import { toast } from 'react-hot-toast'; // или другой способ уведомлений

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: any) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        // Очистка формы после успешной отправки
        return true;
      } else {
        toast.error(result.error || 'Ошибка при отправке. Попробуйте позже.');
        return false;
      }
    } catch (error) {
      console.error('Submit error:', error);
      toast.error('Ошибка сети. Проверьте подключение.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
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
              Пришлите фото, план или просто опишите словами — что за пространство и какое ощущение хотите создать. 
              Предложим несколько идей и ориентировочный бюджет в течение 24 часов.
            </p>
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Личный блок</p>
              <div className="flex items-center mt-2">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-xl">
                  А
                </div>
                <div className="ml-4">
                  <p className="font-medium">Меня зовут Александр</p>
                  <p className="text-sm text-gray-600">
                    Занимаюсь арт-объектами и скульптурами, которые меняют ощущение от пространства.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;