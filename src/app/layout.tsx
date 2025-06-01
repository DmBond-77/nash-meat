import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nash-meat-website.vercel.app"),
  title: {
    default: "Nash Meat | Натуральное мясо в Караганде",
    template: "%s | Nash Meat",
  },
  description:
    "Свежайшее мясо от фермеров Казахстана — говядина, конина, свинина, курица. Быстрая доставка, честные цены. Заказывайте онлайн!",
  keywords: [
    "мясо Караганда",
    "фермерское мясо",
    "свежее мясо доставка",
    "говядина",
    "курица",
    "свинина",
    "Nash Meat",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Nash Meat | Натуральное мясо с доставкой",
    description:
      "Мясная продукция от проверенных фермеров. Без гормонов. Без посредников. Только вкус!",
    url: "https://nash-meat-website.vercel.app",
    siteName: "Nash Meat",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nash Meat - Натуральное мясо в Караганде",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nash Meat | Натуральное мясо с доставкой",
    description:
      "Доставляем свежее мясо в Караганде и пригороде. Высокое качество, доступная цена, быстрая доставка!",
    images: ["/images/og-image.jpg"],
    creator: "@nashmeat",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// ✅ отдельный экспорт viewport, как требует Next.js 15.3+
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
