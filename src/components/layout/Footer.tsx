// components/layout/Footer.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from './Container';

export const Footer = () => {
  const [showNdsLegal, setShowNdsLegal] = useState(false);
  const [showNoNdsLegal, setShowNoNdsLegal] = useState(false);

  // Реквизиты для расчётов с НДС (ООО)
  const ndsLegalDetails = {
    name: 'ООО "ИК СибАйрТрейд"',
    inn: '5405960921',
    kpp: '540101001',
    account: '40702810004500011031',
    bank: 'ООО "Банк Точка"',
    bik: '044525104',
    correspondentAccount: '30101810745374525104',
    director: 'Директор Банин С.В.',
    nds: 'НДС 20% включён',
  };

  // Реквизиты для расчётов без НДС (ИП)
  const noNdsLegalDetails = {
    name: 'ИП Банин С.В.',
    inn: '540127765987',
    account: '40802810520000613708',
    bank: 'ООО "Банк Точка"',
    bik: '044525104',
    correspondentAccount: '30101810745374525104',
    entrepreneur: 'Индивидуальный предприниматель Банин С.В.',
    nds: 'Без НДС (УСН)',
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        {/* Основная часть футера */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Колонка 1: Бренд */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Arca Objects</h3>
            <p className="text-sm text-gray-400">
              Создаём арт-объекты и скульптуры из металла под ключ — от идеи до монтажа.
            </p>
          </div>

          {/* Колонка 2: Навигация */}
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#for-whom" className="text-gray-400 hover:text-amber-400 transition">Для кого</Link></li>
              <li><Link href="#portfolio" className="text-gray-400 hover:text-amber-400 transition">Портфолио</Link></li>
              <li><Link href="#how-we-work" className="text-gray-400 hover:text-amber-400 transition">Как работаем</Link></li>
              <li><Link href="#why-us" className="text-gray-400 hover:text-amber-400 transition">Почему мы</Link></li>
              <li><Link href="#pricing" className="text-gray-400 hover:text-amber-400 transition">Стоимость</Link></li>
              <li><Link href="#faq" className="text-gray-400 hover:text-amber-400 transition">FAQ</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-amber-400 transition">Контакты</Link></li>
            </ul>
          </div>

          {/* Колонка 3: Контакты */}
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📞 +7 (913) 717-33-82</li>
              <li>✉️ info@arcaobjects.ru</li>
              <li>📍 Новосибирск, пр-т. Дзержинского, д. 1/3</li>
              <li>⏰ Пн–Пт: 10:00–19:00</li>
            </ul>
          </div>

          {/* Колонка 4: Реквизиты (аккордеоны) */}
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Реквизиты</h4>
            
            {/* Реквизиты для расчётов с НДС */}
            <div className="mb-3">
              <button
                onClick={() => setShowNdsLegal(!showNdsLegal)}
                className="w-full text-left flex justify-between items-center text-sm text-gray-400 hover:text-amber-400 transition py-2"
              >
                <span>ООО «ИК СибАйрТрейд» (с НДС)</span>
                <span>{showNdsLegal ? '−' : '+'}</span>
              </button>
              {showNdsLegal && (
                <div className="mt-2 p-3 bg-gray-800 rounded text-xs text-gray-300 space-y-1">
                  <p><span className="text-gray-500">Организация:</span> {ndsLegalDetails.name}</p>
                  <p><span className="text-gray-500">ИНН/КПП:</span> {ndsLegalDetails.inn} / {ndsLegalDetails.kpp}</p>
                  <p><span className="text-gray-500">Расчётный счёт:</span> {ndsLegalDetails.account}</p>
                  <p><span className="text-gray-500">Банк:</span> {ndsLegalDetails.bank}</p>
                  <p><span className="text-gray-500">БИК:</span> {ndsLegalDetails.bik}</p>
                  <p><span className="text-gray-500">Корр. счёт:</span> {ndsLegalDetails.correspondentAccount}</p>
                  <p><span className="text-gray-500">Руководитель:</span> {ndsLegalDetails.director}</p>
                  <p><span className="text-amber-500">НДС:</span> {ndsLegalDetails.nds}</p>
                </div>
              )}
            </div>

            {/* Реквизиты для расчётов без НДС */}
            <div>
              <button
                onClick={() => setShowNoNdsLegal(!showNoNdsLegal)}
                className="w-full text-left flex justify-between items-center text-sm text-gray-400 hover:text-amber-400 transition py-2"
              >
                <span>ИП Банин С.В. (без НДС)</span>
                <span>{showNoNdsLegal ? '−' : '+'}</span>
              </button>
              {showNoNdsLegal && (
                <div className="mt-2 p-3 bg-gray-800 rounded text-xs text-gray-300 space-y-1">
                  <p><span className="text-gray-500">Предприниматель:</span> {noNdsLegalDetails.name}</p>
                  <p><span className="text-gray-500">ИНН:</span> {noNdsLegalDetails.inn}</p>
                  <p><span className="text-gray-500">Расчётный счёт:</span> {noNdsLegalDetails.account}</p>
                  <p><span className="text-gray-500">Банк:</span> {noNdsLegalDetails.bank}</p>
                  <p><span className="text-gray-500">БИК:</span> {noNdsLegalDetails.bik}</p>
                  <p><span className="text-gray-500">Корр. счёт:</span> {noNdsLegalDetails.correspondentAccount}</p>
                  <p><span className="text-amber-500">Налогообложение:</span> {noNdsLegalDetails.nds}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Нижняя линия с копирайтом */}
        <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Arca Objects. Все права защищены.</p>
          <p className="mt-1">
            <span className="mr-4">ООО «ИК СибАйрТрейд»</span>
            <span>ИП Банин С.В.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};