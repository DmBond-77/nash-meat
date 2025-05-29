'use client';

import { motion } from 'framer-motion';

export default function CompanySection() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50"
      aria-labelledby="company-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          id="company-heading"
          className="text-4xl font-bold text-red-700 mb-8 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          О компании
        </motion.h2>

        <motion.p
          className="text-lg text-gray-800 leading-relaxed text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Мы — команда, которая действительно любит своё дело. Уже более 10 лет
          мы доставляем свежее мясо высшего качества по доступным ценам.
          Заботимся о каждом клиенте, как о члене семьи.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 text-center text-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            {
              title: '🌿 Натуральный продукт',
              text: 'Никаких гормонов и добавок. Только фермерское мясо от проверенных поставщиков.',
            },
            {
              title: '🚚 Быстрая доставка',
              text: 'Доставляем свежую продукцию день в день. Упаковано в вакуум и готово к приготовлению.',
            },
            {
              title: '❤️ Нам доверяют',
              text: 'Более 15 000 довольных клиентов и 100+ партнёров по Казахстану.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md border border-red-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-red-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-lg mb-4">
            Мы верим, что хорошее питание начинается с качественного продукта.
            Попробуйте — и вы почувствуете разницу.
          </p>
          <p className="text-red-700 font-bold text-xl">
            Присоединяйтесь к нашей семье вкуса!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
