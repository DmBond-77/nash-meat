"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

export const lambProducts = [
  {
    id: 1,
    title: "Хребет – Омыртқа",
    description: "Нежное мясо спинной части, идеально для запекания.",
    descriptionKz: "Пеште қуыруға арналған жіңішке ет.",
    price: "3700 ₸/кг",
    image: "/images/lamb-card1.webp",
  },
  {
    id: 2,
    title: "Лопатка – Жауырын",
    description: "Мясистая часть для жарки и тушения.",
    descriptionKz: "Қуыру мен бұқтыруға арналған етті бөлік.",
    price: "3300 ₸/кг",
    image: "/images/lamb-card1.webp",
  },
  {
    id: 3,
    title: "Задняя часть – Сирақ",
    description: "Сочная задняя часть, подходит для плова и запеканок.",
    descriptionKz: "Палау мен бәлішке арналған шырынды ет.",
    price: "3700 ₸/кг",
    image: "/images/lamb-card1.webp",
  },
  {
    id: 4,
    title: "Курдюк – Құйрық",
    description: "Жирная часть с насыщенным вкусом, для особых блюд.",
    descriptionKz: "Тәтті тағамдарға арналған майлы бөлік.",
    price: "3700 ₸/кг",
    image: "/images/lamb-card1.webp",
  },
  {
    id: 5,
    title: "Ребро – Қабырға",
    description: "Мясо с косточкой для гриля и барбекю.",
    descriptionKz: "Гриль мен барбекюге арналған ет.",
    price: "3500 ₸/кг",
    image: "/images/lamb-card1.webp",
  },
  {
    id: 6,
    title: "Шея – Мойын",
    description: "Нежное мясо шеи для супов и тушения.",
    descriptionKz: "Сорпа мен бұқтыруға арналған жұмсақ ет.",
    price: "3500 ₸/кг",
    image: "/images/lamb-card1.webp",
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

export default function LambSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? lambProducts : lambProducts.slice(0, 3);

  return (
    <section id="баранина" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-8">
          Ассортимент баранина – Қой еті ассортименті
        </h2>

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
                    {product.descriptionKz}
                  </p>
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

        {lambProducts.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className={clsx(
              "mt-8 px-6 py-2 rounded-lg font-semibold transition-colors duration-300 cursor-pointer",
              showAll
                ? "bg-gray-300 text-gray-800 hover:bg-gray-400"
                : "bg-red-700 text-white hover:bg-red-800"
            )}
          >
            {showAll ? "Скрыть" : "Показать ещё"}
          </button>
        )}
      </div>
    </section>
  );
}
