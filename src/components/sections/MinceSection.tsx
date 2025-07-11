"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

export const minceProducts = [
  {
    id: 1,
    title: "Говяжий постный – Майсыз тартылған сиыр еті",
    description: "Постное мясо для диетических блюд.",
    descriptionKz: "Диеталық тағамдарға арналған майсыз ет.",
    price: "3900 ₸/кг",
    image: "/images/mince-card1.webp",
  },
  {
    id: 2,
    title: "Рубленный говяжий – Туралған сиыр еті",
    description: "Мелко нарубленное мясо для котлет и тефтелей.",
    descriptionKz: "Котлет пен тефтельге арналған ет.",
    price: "4100 ₸/кг",
    image: "/images/mince-card1.webp",
  },
  {
    id: 3,
    title: "Говядина+баранина – Сиыр еті + қой еті",
    description: "Смешанный фарш для разнообразных блюд.",
    descriptionKz: "Әртүрлі тағамдарға арналған аралас фарш.",
    price: "3500 ₸/кг",
    image: "/images/mince-card1.webp",
  },
  {
    id: 4,
    title: "Говяжий – Сиыр еті",
    description: "Классический говяжий фарш для повседневной готовки.",
    descriptionKz: "Күнделікті тағамға арналған сиыр еті фаршы.",
    price: "3400 ₸/кг",
    image: "/images/mince-card1.webp",
  },
  {
    id: 5,
    title: "Смешанный – Аралас",
    description: "Фарш из разных видов мяса для универсального использования.",
    descriptionKz: "Көптеген тағамдарға арналған аралас ет фаршы.",
    price: "2850 ₸/кг",
    image: "/images/mince-card1.webp",
  },
  {
    id: 6,
    title: "Куриный – Тауық еті",
    description: "Легкий куриный фарш для диетических блюд.",
    descriptionKz: "Диеталық тағамдарға арналған жеңіл тауық еті.",
    price: "2100 ₸/кг",
    image: "/images/mince-card1.webp",
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

export default function MinceSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? minceProducts : minceProducts.slice(0, 3);

  return (
    <section id="фарш" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-8">
          Ассортимент Фарш: Тартылған ет ассортименті
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

        {minceProducts.length > 3 && (
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
