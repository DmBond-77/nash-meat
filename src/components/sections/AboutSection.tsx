"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section
      id="why"
      className="py-16 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Animated text block */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            id="about-heading"
            className="text-3xl font-bold text-red-700 mb-4"
          >
            Немного о нас
          </h2>

          <p className="text-gray-700 text-lg mb-4">
            Мы предлагаем только свежее мясо высшего качества. Работаем с
            проверенными поставщиками и доставляем продукцию прямо к вашему
            столу.
          </p>

          <p className="text-gray-600 mb-4">
            Наша цель — сделать вкусное и полезное питание доступным каждому. Мы
            заботимся о каждом клиенте и гордимся своей репутацией.
          </p>

          {/* ✅ New paragraph with additional info */}
          <p className="text-gray-600 mb-6">
            В нашем ассортименте вы найдёте говядину, свинину и курицу —
            натуральную, сочную и без добавок. Мы следим за всеми этапами — от
            фермы до прилавка — чтобы вы получали только лучшее.
          </p>

          <a href="#about">
            <Button className="bg-red-700 text-white hover:bg-red-800 transition-colors duration-300 cursor-pointer">
              Подробнее
            </Button>
          </a>
        </motion.div>

        {/* Animated image block */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/meat-gif.gif"
            alt="Сочное мясо на гриле"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
