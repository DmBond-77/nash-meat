"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

export const porkProducts = [
  {
    id: 1,
    title: "Суп набор – Көжеге арналған жиынтық",
    description: "Набор костей и мяса, идеально подходит для варки бульонов.",
    descriptionKz: "Сорпа қайнатуға арналған сүйек пен ет жиынтығы.",
    price: "600 ₸/кг",
    image: "/images/pork-card1.webp",
  },
  {
    id: 2,
    title: "Щеки – Жақ",
    description: "Мясистые щеки, отличающиеся нежной текстурой.",
    descriptionKz: "Жұмсақ құрылымды етті жақ бөліктері.",
    price: "800 ₸/кг",
    image: "/images/pork-card1.webp",
  },
  {
    id: 3,
    title: "Сало – Май",
    description: "Классическое сало с прослойкой, подходит для засолки.",
    descriptionKz: "Тұздауға арналған дәстүрлі май.",
    price: "150 ₸/кг",
    image: "/images/pork-card1.webp",
  },
  {
    id: 4,
    title: "Ножка свиная – Шошқаның сан еті",
    description: "Свиные ножки для запекания и холодца.",
    descriptionKz: "Қуыруға және сірне жасауға арналған сан еті.",
    price: "800 ₸/кг",
    image: "/images/pork-card1.webp",
  },
  {
    id: 5,
    title: "Копыто – Тұяқ",
    description: "Используется для приготовления наваристого холодца.",
    descriptionKz: "Құнарлы сірне қайнатуға қолайлы тұяқ.",
    price: "350 ₸/кг",
    image: "/images/pork-card1.webp",
  },
  {
    id: 6,
    title: "Мякоть – Жұмсақ ет",
    description: "Сочное мясо без костей для жарки и тушения.",
    descriptionKz: "Қуыру мен бұқтыруға арналған сүйексіз шырынды ет.",
    price: "2500 ₸/кг",
    image: "/images/pork-card1.webp",
  },
  {
    id: 7,
    title: "Филе – Сүбе",
    description: "Нежное филе, идеальное для диетических блюд.",
    descriptionKz: "Диеталық тағамдарға арналған жұмсақ сүбе еті.",
    price: "2700 ₸/кг",
    image: "/images/pork-card1.webp",
  },
  {
    id: 8,
    title: "Антрекот – Антрекот",
    description: "Мясо с мраморной текстурой для стейков и гриля.",
    descriptionKz: "Стейк пен грильге арналған мәрмәр құрылымды ет.",
    price: "2250 ₸/кг",
    image: "/images/pork-card1.webp",
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

export default function PorkSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? porkProducts : porkProducts.slice(0, 3);

  return (
    <section id="свинина" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-8">
          Ассортимент свинина- Шошқа еті ассортименті
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

        {porkProducts.length > 3 && (
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
