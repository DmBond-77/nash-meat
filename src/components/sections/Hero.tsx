"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Swiper as SwiperClass } from "swiper/types";

const slides = [
  {
    src: "/images/hero1.webp",
    title: "Премиальные стейки",
    subtitle: "Отборное мясо высшего качества",
  },
  {
    src: "/images/hero2.webp",
    title: "Фермерская свинина",
    subtitle: "Разделка по всем стандартам",
  },
  {
    src: "/images/hero3.webp",
    title: "Мясо с любовью",
    subtitle: "Лучшие повара выбирают нас",
  },
];

export default function Hero() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      // @ts-ignore
      swiperInstance.params.navigation.prevEl = prevRef.current;
      // @ts-ignore
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        navigation={false} // <--- ВАЖНО: отключаем внутренние кнопки
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
                <div className="text-center px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl mb-6">{slide.subtitle}</p>
                  <Button size="lg" className="text-lg cursor-pointer">
                    Сделать заказ
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Кастомные кнопки навигации */}
        <Button
          ref={prevRef}
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm cursor-pointer"
          aria-label="Предыдущий слайд"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          ref={nextRef}
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm cursor-pointer"
          aria-label="Следующий слайд"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </Swiper>
    </section>
  );
}
