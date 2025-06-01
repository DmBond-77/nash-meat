"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Айгуль С.",
      text: "Всегда свежее мясо и быстрая доставка. Пользуемся услугами уже 3 года — всегда довольны!",
      rating: 5,
    },
    {
      name: "Руслан К.",
      text: "Очень вежливый персонал и удобный заказ через сайт. Качество продукции отличное!",
      rating: 5,
    },
    {
      name: "Жанна Т.",
      text: "Удивлена качеством сервиса и скорости доставки. Теперь покупаю мясо только здесь.",
      rating: 4,
    },
    {
      name: "Алексей П.",
      text: "Приятные цены, доброжелательная команда. Сервис на высоте, рекомендую всем знакомым!",
      rating: 5,
    },
    {
      name: "Гульмира Ж.",
      text: "Заказываем мясо для всей семьи. Качество всегда на уровне. Спасибо за честный продукт!",
      rating: 5,
    },
    {
      name: "Нурлан Д.",
      text: "Очень рад, что открыл для себя вашу компанию. Надёжность, вкус и сервис — всё супер!",
      rating: 5,
    },
    {
      name: "Абылайхан А.",
      text: "Мальчишки молодцы. Всегда свежее мясо и фарш очень хороший. Все чисто, аккуратно. Большой выбор мяса и полуфабрикатов.",
      rating: 5,
    },
    {
      name: "К.Н.",
      text: "Очень нравится этот магазин. Всегда чисто, персонал приветливый, мясо свежее и качественное. Часто беру здесь говядину и фарш — никогда не подводили.",
      rating: 4,
    },
    {
      name: "Марат Б.",
      text: "Очень доволен качеством продукции. Персонал всегда вежливый, доставка своевременная. Отличный магазин для всей семьи!",
      rating: 5,
    },
  ];

  // Фильтруем только 4 и 5 звёзд
  const filteredTestimonials = testimonials.filter((t) => t.rating >= 4);

  return (
    <motion.section
      id="testimonials"
      className="py-20 bg-white border-t border-gray-100"
      aria-labelledby="testimonials-heading"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          id="testimonials-heading"
          className="text-4xl font-bold text-red-700 mb-10 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Отзывы наших клиентов
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow-2xl border border-red-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              itemScope
              itemType="https://schema.org/Review"
            >
              <p className="text-gray-700 mb-4" itemProp="reviewBody">
                “{t.text}”
              </p>
              <footer className="text-sm text-gray-500">
                <span itemProp="author">{t.name}</span>
              </footer>
              <div
                className="flex justify-center mt-2"
                itemProp="reviewRating"
                itemScope
                itemType="https://schema.org/Rating"
              >
                {Array.from({ length: 5 }, (_, j) => (
                  <Star
                    key={j}
                    className={`h-5 w-5 ${
                      j < t.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300 fill-gray-300"
                    }`}
                    aria-hidden="true"
                  />
                ))}
                <meta itemProp="ratingValue" content={t.rating.toString()} />
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
