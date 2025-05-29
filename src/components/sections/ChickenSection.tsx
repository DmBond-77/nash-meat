'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

const products = [
  {
    id: 1,
    title: 'Куриные бедра',
    description: 'Свежее мясо курицы высшего качества.',
    price: '950 ₸/кг',
    image: '/images/chicken-card1.webp',
  },
  {
    id: 2,
    title: 'Куриные крылья',
    description: 'Отборные крылья для гриля и жарки.',
    price: '890 ₸/кг',
    image: '/images/chicken-card1.webp',
  },
  {
    id: 3,
    title: 'Куриная грудка',
    description: 'Нежное диетическое мясо.',
    price: '1100 ₸/кг',
    image: '/images/chicken-card1.webp',
  },
  {
    id: 4,
    title: 'Куриные голени',
    description: 'Идеальны для запекания в духовке.',
    price: '900 ₸/кг',
    image: '/images/chicken-card1.webp',
  },
  {
    id: 5,
    title: 'Куриное филе',
    description: 'Чистое филе без костей.',
    price: '1150 ₸/кг',
    image: '/images/chicken-card1.webp',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

export default function ChickenSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 3);

  return (
    <section
      id="курица"
      className="py-12 bg-gray-50"
      // style={{
      //   backgroundImage: "url('images/chicken.webp')",
      // }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-8">Курица</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {visibleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={cardVariants}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-red-100"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 my-2">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold text-red-700">
                    {product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {products.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className={clsx(
              'mt-8 px-6 py-2 rounded-lg font-semibold transition-colors duration-300 cursor-pointer',
              showAll
                ? 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                : 'bg-red-700 text-white hover:bg-red-800'
            )}
          >
            {showAll ? 'Скрыть' : 'Показать ещё'}
          </button>
        )}
      </div>
    </section>
  );
}
