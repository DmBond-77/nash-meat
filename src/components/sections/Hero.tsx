"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";

const images = [
  "https://source.unsplash.com/1600x900/?meat",
  "https://source.unsplash.com/1600x900/?butcher",
  "https://source.unsplash.com/1600x900/?bbq",
];

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
                <div className="text-center px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Свежесть и качество
                  </h1>
                  <p className="text-lg md:text-2xl mb-6">
                    Мясо напрямую от лучших фермеров
                  </p>
                  <Button size="lg" className="text-lg">
                    Сделать заказ
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
