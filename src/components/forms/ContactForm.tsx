// components/forms/ContactForm.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface ContactFormProps {
  onSubmit: (data: any) => Promise<boolean>;
  isSubmitting: boolean;
}

export const ContactForm = ({ onSubmit, isSubmitting }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    message: '',
    file: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Базовая валидация
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }

    const success = await onSubmit({
      name: formData.name,
      phone: formData.phone,
      city: formData.city,
      message: formData.message,
      file: formData.file ? { name: formData.file.name } : null,
    });

    if (success) {
      setFormData({ name: '', phone: '', city: '', message: '', file: null });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Имя *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Телефон или Telegram *
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
        />
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          Город
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Описание задачи *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
        />
      </div>
      <div>
        <label htmlFor="file" className="block text-sm font-medium text-gray-700">
          Загрузить файл (фото, план)
        </label>
        <input
          type="file"
          id="file"
          name="file"
          accept="image/*,.pdf"
          onChange={handleFileChange}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
        />
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Отправка...' : 'Отправить'}
      </Button>
    </form>
  );
};