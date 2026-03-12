// components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { Button } from '@/components/ui/Button';

const navItems = [
  { href: '#for-whom', label: 'Для кого' },
  { href: '#portfolio', label: 'Портфолио' },
  { href: '#how-we-work', label: 'Как работаем' },
  { href: '#why-us', label: 'Почему мы' },
  { href: '#pricing', label: 'Стоимость' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Контакты' },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Логотип-ссылка на главную */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Arca Objects"
              width={120}        // эти размеры используются для оптимизации, но на странице применяются CSS-классы
              height={40}
              priority
              className="h-auto w-full max-w-[120px] md:max-w-[150px]" // адаптивная ширина
            />
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-700 hover:text-amber-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" href="#contact">Связаться</Button>
          </nav>

          {/* Кнопка мобильного меню */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Мобильное меню */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-3">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-amber-600 px-2 py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button size="sm" href="#contact" className="mt-2 w-full">
                Связаться
              </Button>
            </nav>
          </motion.div>
        )}
      </Container>
    </header>
  );
};