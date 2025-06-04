"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const beefProducts = [
  {
    id: 1,
    title: "Крестец – Жамбас басы",
    description: "Отлично подходит для наваристых бульонов и супов.",
    descriptionKz: "Қайнатпа сорпа мен көже үшін таптырмас таңдау.",
    price: "1500тг/кг",
    image: "/images/beef-card1.webp",
  },
  {
    id: 2,
    title: "Медальоны – Медальондар",
    description: "Нежные кусочки для жарки и стейков.",
    descriptionKz: "Қуыру мен стейкке арналған жұмсақ ет бөліктері.",
    price: "2850тг/кг",
    image: "/images/beef-card1.webp",
  },
  {
    id: 3,
    title: "Култышка – Кәрі жілік",
    description: "Идеально для тушения с овощами.",
    descriptionKz: "Көкөністермен бұқтырып пісіруге өте ыңғайлы.",
    price: "1700тг/кг",
    image: "/images/beef-card1.webp",
  },
  {
    id: 4,
    title: "Печень – Бауыр",
    description: "Полезный субпродукт, богатый железом.",
    descriptionKz: "Темірге бай, пайдалы ет өнімі.",
    price: "1000тг/кг",
    image: "/images/beef-card1.webp",
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

export default function BeefSection() {
  const visibleProducts = beefProducts.slice(0, 3);

  return (
    <section id="говядина" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-8">
          Ассортимент говядина — Сиыр еті ассортименті
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

        {beefProducts.length > 3 && (
          <Link
            href="/beef"
            className="mt-8 inline-block px-6 py-2 rounded-lg font-semibold bg-red-700 text-white hover:bg-red-800 transition-colors duration-300"
          >
            Показать ещё
          </Link>
        )}
      </div>
    </section>
  );
}
