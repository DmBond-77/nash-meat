'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import SocialIcons from './shared/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-red-200 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {/* Лого и краткое описание */}
        <div>
          <Link href="/" aria-label="На главную">
            <Image
              src="/images/logo.png"
              alt="Логотип Nash Meat"
              width={160}
              height={80}
              className="mb-4"
            />
          </Link>
          <p className="text-sm text-gray-600">
            Премиальное мясо от фермеров – с любовью к качеству и вкусу.
          </p>
        </div>

        {/* Быстрые ссылки */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-4">
            Быстрые ссылки
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-red-700">
                Главная
              </Link>
            </li>
            <li>
              <Link href="#why" className="text-gray-600 hover:text-red-700">
                Почему мы
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-600 hover:text-red-700">
                О компании
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-red-700"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        {/* Контакты и соцсети */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-4">Контакты</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <SocialIcons />
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-red-500" />
              <a href="mailto:info@nashmeat.kz" className="hover:text-red-700">
                info@nashmeat.kz
              </a>
            </li>
            <li className="flex gap-2 mt-2 items-center">
              <MapPin size={16} className="text-red-500" />

              <p className="text-sm text-gray-600">
                г.Караганда, 17-й м-н Улица Кузембаева, 77/1
              </p>
            </li>
            <li className="flex gap-2 mt-2 items-center">
              <MapPin size={16} className="text-red-500" />

              <p className="text-sm text-gray-600">
                г.Караганда, п.Сортировка, Улица Дружбы, 124/1
              </p>
            </li>
          </ul>
        </div>
      </motion.div>

      <div className="text-center text-xs text-gray-500 py-4 border-t border-red-100">
        © {new Date().getFullYear()} Nash Meat. Все права защищены.
      </div>
    </footer>
  );
}
