'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const porkProducts = [
  {
    id: 1,
    title: 'Свинина на косточке',
    description: 'Мясо с костью для жарки и тушения.',
    price: '1800 ₸/кг',
    image: '/images/pork-card1.webp',
  },
  {
    id: 2,
    title: 'Свиной окорок',
    description: 'Отлично подходит для запекания.',
    price: '1750 ₸/кг',
    image: '/images/pork-card1.webp',
  },
  {
    id: 3,
    title: 'Свиной фарш',
    description: 'Идеален для котлет и начинки.',
    price: '1600 ₸/кг',
    image: '/images/pork-card1.webp',
  },
  {
    id: 4,
    title: 'Свиной стейк',
    description: 'Сочный кусок для гриля.',
    price: '1850 ₸/кг',
    image: '/images/pork-card1.webp',
  },
  {
    id: 5,
    title: 'Грудинка свиная',
    description: 'Жирная часть для копчения и жарки.',
    price: '1700 ₸/кг',
    image: '/images/pork-card1.webp',
  },
];

export default function PorkSlider() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  useEffect(() => {
    if (
      swiper &&
      prevRef.current &&
      nextRef.current &&
      typeof swiper.params.navigation === 'object'
    ) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <section id="свинина" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center relative">
        <h2 className="text-3xl font-bold text-red-700 mb-8">Свинина</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          onSwiper={setSwiper}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={false}
          className="!px-2 shadow-2xl py-6"
        >
          {porkProducts.map((product, index) => (
            <SwiperSlide key={product.id}>
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-red-100 h-full flex flex-col"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-left flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 my-2">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold text-red-700 mt-auto">
                    {product.price}
                  </p>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.button
          ref={prevRef}
          whileHover={{ scale: 1.1, x: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-red-600 shadow cursor-pointer rounded-full p-2"
          aria-label="Предыдущий слайд"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          ref={nextRef}
          whileHover={{ scale: 1.1, x: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-red-600 shadow cursor-pointer rounded-full p-2"
          aria-label="Следующий слайд"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
}
