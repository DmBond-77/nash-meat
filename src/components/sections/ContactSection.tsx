"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

const stores = [
  {
    title: "Магазин на Кузембаева, 77/1",
    address: "г. Караганда, 17-й м-н Улица Кузембаева, 77/1,",
    phone: "+7 (771) 670-670-7",
    hours: "Пн-Вс: 09:00 - 19:30",
    weekday: "Вс: 09:00 - 18:30",
    // embed ссылка из Google Maps для iframe
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2570.741013310163!2d73.19761199999999!3d49.88489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sru!2skz!4v1748448886117!5m2!1sru!2skz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
  },
  {
    title: "Магазин на Дружбы, 124/1",
    address: "г.Караганда п.Сортировка, Улица Дружбы, 124/1",
    phone: "+7 (771) 670-670-7",
    hours: "Пн-Сб: 10:00 - 18:30",
    weekday: "Вс: 10:00 - 17:00",
    // embed ссылка для второго адреса
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.6299874535336!2d73.21343831523098!3d49.97336607939233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4243521ef1f49091%3A0x53b220be942ccb6e!2z0J3QvtCy0L7QstCwIDExMSwg0JrQsNC70YzQutC-0LrQsNGG0LAsINCQ0L7QsdC7Liwg0JrQvtC70L7Qv9C10YDQtdGC0LXRgdGC0LgwMDAwMA!5e0!3m2!1sru!2skz!4v1685288498000!5m2!1sru!2skz",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-12"
        >
          Контакты
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {stores.map((store, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
              itemScope
              itemType="http://schema.org/LocalBusiness"
            >
              <div className="p-6 space-y-4">
                <h3
                  className="text-xl font-semibold text-red-700"
                  itemProp="name"
                >
                  {store.title}
                </h3>
                <p className="flex items-start gap-2 text-gray-700">
                  <MapPin className="w-5 h-5 mt-1 text-red-500" />
                  <span itemProp="address">{store.address}</span>
                </p>
                <p className="flex items-start gap-2 text-gray-700">
                  <Phone className="w-5 h-5 mt-1 text-red-500" />
                  <a
                    href={`tel:${store.phone.replace(/\s+/g, "")}`}
                    className="hover:underline"
                    itemProp="telephone"
                  >
                    {store.phone}
                  </a>
                </p>
                <p className="flex items-start gap-2 text-gray-700">
                  <Clock className="w-5 h-5 mt-1 text-red-500" />
                  <span itemProp="openingHours">{store.hours}</span>
                </p>
                <p className="flex items-start gap-2 text-gray-700">
                  <Clock className="w-5 h-5 mt-1 text-red-500" />
                  <span itemProp="openingHours">{store.weekday}</span>
                </p>
              </div>
              <div className="w-full h-64">
                <iframe
                  src={store.mapSrc}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Карта ${store.title}`}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
