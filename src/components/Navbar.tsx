"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import SocialIcons from "./shared/SocialIcons";
import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("/");

  const links = [
    { label: "Главная", href: "/" },
    { label: "О нас", href: "#about" },
    { label: "Продукция", href: "#products" },
    { label: "Почему мы", href: "#why" },
    { label: "Контакты", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let current = "/";
      for (const link of links) {
        if (link.href.startsWith("#")) {
          const section = document.querySelector(link.href);
          if (section && section instanceof HTMLElement) {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            if (scrollPos >= top && scrollPos < bottom) {
              current = link.href;
              break;
            }
          }
        } else if (link.href === "/") {
          if (window.scrollY < 100) {
            current = "/";
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full shadow-md bg-white border-b border-red-200">
        <Container className=" flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="">
            <Image
              src="/images/logo.png" // Подставь свой путь
              alt="Nash Meat"
              width={150}
              height={200}
              priority
              className=""
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-4 text-base font-semibold">
            {links.map((link) => {
              const isActive =
                activeSection === link.href ||
                (link.href === "/" &&
                  (activeSection === "/" || activeSection === ""));

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={clsx("group relative transition-colors text-md", {
                    "text-red-700": isActive,
                    "text-gray-600 hover:text-red-800": !isActive,
                  })}
                >
                  {link.label}
                  <span
                    className={clsx(
                      "absolute -bottom-1 left-0 h-[2px] bg-red-700 transition-all duration-300",
                      {
                        "w-0 group-hover:w-full": !isActive,
                        "w-full": isActive,
                      }
                    )}
                  />
                </Link>
              );
            })}
          </nav>
          <div>
            <SocialIcons className="hidden sm:flex" />
          </div>
          {/* CTA */}

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer md:hidden text-red-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>
      </header>

      {/* Mobile nav */}
      <div
        className={clsx(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-white text-red-700 transition-all duration-300 md:hidden",
          {
            "pointer-events-auto translate-y-0 opacity-100": isOpen,
            "pointer-events-none -translate-y-10 opacity-0": !isOpen,
          }
        )}
      >
        <nav className="flex flex-col items-center space-y-6 text-xl font-semibold">
          {links.map((link) => {
            const isActive =
              activeSection === link.href ||
              (link.href === "/" &&
                (activeSection === "/" || activeSection === ""));

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={clsx("group relative transition-colors", {
                  "text-red-700": isActive,
                  "text-gray-600 hover:text-red-800": !isActive,
                })}
              >
                {link.label}
                <span
                  className={clsx(
                    "absolute -bottom-1 left-0 h-[2px] bg-red-700 transition-all duration-300",
                    {
                      "w-0 group-hover:w-full": !isActive,
                      "w-full": isActive,
                    }
                  )}
                />
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
          >
            Заказать звонок
          </a>

          <SocialIcons className="mt-6" />
        </nav>
      </div>
    </>
  );
}
