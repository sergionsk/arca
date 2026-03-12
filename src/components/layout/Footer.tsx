// components/layout/Footer.tsx
import Link from 'next/link';
import { Container } from './Container';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Arca Objects</h3>
            <p className="text-sm">
              Создаём арт-объекты и скульптуры, которые меняют пространства и остаются в памяти на годы.
            </p>
          </div>
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              {['Для кого', 'Портфолио', 'Как работаем', 'Почему мы', 'Стоимость', 'FAQ', 'Контакты'].map(item => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-amber-400 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 +7 (999) 123-45-67</li>
              <li>✉️ info@arcaobjects.ru</li>
              <li>📍 Москва, ул. Примерная, д. 1</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs">
          © {new Date().getFullYear()} Arca Objects. Все права защищены.
        </div>
      </Container>
    </footer>
  );
};