"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

const stores = [
  {
    title: "Магазин на Жамбыла, 45",
    address: "г. Караганда, ул. Жамбыла, 45",
    phone: "+7 (701) 123-45-67",
    hours: "Пн-Вс: 09:00 - 21:00",
    mapSrc:
      "https://widgets.2gis.com/widget.html?type=firm&regionId=17&firmId=70000001046992828",
  },
  {
    title: "Магазин на Степной, 3",
    address: "г. Караганда, мкр-н Степной 3, 9",
    phone: "+7 (702) 765-43-21",
    hours: "Пн-Вс: 10:00 - 20:00",
    mapSrc:
      "https://widgets.2gis.com/widget.html?type=firm&regionId=17&firmId=70000001100170377",
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
                    href={`tel:${store.phone}`}
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
                ></iframe>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
