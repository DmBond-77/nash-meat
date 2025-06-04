"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { beefProducts } from "@/data/beefProducts";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

export default function BeefProductsList() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {beefProducts.map((product, index) => (
        <motion.div
          key={product.id}
          custom={index}
          initial="hidden"
          animate="visible"
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
            <h2 className="text-xl font-semibold text-gray-800">
              {product.title}
            </h2>
            <p className="text-sm text-gray-600 my-2">
              {product.descriptionKz}
            </p>
            <p className="text-sm text-gray-600 my-2">{product.description}</p>
            <p className="text-lg font-bold text-red-700">{product.price}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
