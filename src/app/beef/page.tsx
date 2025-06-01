import { Metadata } from "next";
import BeefProductsList from "@/app/beef/BeefProductsList"; // клиентский компонент

export const metadata: Metadata = {
  title: "Говядина | Ассортимент | Nash Meat",
  description:
    "Полный ассортимент говядины: от вырезки до фарша. Только свежее мясо по честным ценам. Караганда.",
  keywords: [
    "говядина Караганда",
    "купить говядину",
    "свежее мясо Караганда",
    "ассортимент говядины",
    "Nash Meat говядина",
  ],
  openGraph: {
    title: "Говядина от Nash Meat",
    description:
      "Натуральное фермерское мясо. Весь ассортимент говядины в одном месте.",
    url: "https://nash-meat-website.vercel.app/beef",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ассортимент говядины — Nash Meat",
      },
    ],
  },
};

export default function BeefPage() {
  return (
    <section className="py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-red-700 mb-10">
          Ассортимент говядина — Сиыр еті ассортименті
        </h1>
        <BeefProductsList />
      </div>
    </section>
  );
}
