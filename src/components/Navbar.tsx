"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import SocialIcons from "@/components/shared/SocialIcons";
import Container from "@/components/shared/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("/");

  const links = [
    { label: "Главная", href: "/" },
    { label: "Почему мы", href: "#why" },
    { label: "О компании", href: "#about" },
    { label: "Контакты", href: "#contact" },
    // { label: "Продукция", href: "#products" },
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
        } else if (link.href === "/" && window.scrollY < 100) {
          current = "/";
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
        <Container className="flex items-center justify-between py-3">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Nash Meat"
              width={150}
              height={200}
              priority
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

          {/* Каталог с подменю (Desktop) */}
          <div className="relative group ">
            <button className="text-gray-600 hover:text-red-800 font-semibold text-md px-2 flex items-center gap-2 cursor-pointer">
              <span>Каталог</span>
              <ChevronDown className="w-4 h-4 inline-block relative top-[2px] transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 bg-white border shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-20 min-w-[150px]">
              {["Свинина", "Говядина", "Курица", "Конина"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-red-700 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <SocialIcons className="hidden sm:flex" />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              if (isOpen) setIsCatalogOpen(false); // закрыть каталог при закрытии меню
            }}
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

          {/* Каталог (Mobile dropdown с плавным раскрытием) */}
          <div className="w-full text-center px-6">
            {" "}
            {/* добавлен px-6 для отступов слева и справа */}
            <button
              onClick={() => setIsCatalogOpen(!isCatalogOpen)}
              className="cursor-pointer py-2 text-gray-600 hover:text-red-800 font-semibold flex justify-center items-center gap-2 transition-colors w-full"
              aria-expanded={isCatalogOpen}
              aria-controls="mobile-catalog-menu"
            >
              Каталог
              <ChevronDown
                className={clsx(
                  "w-4 h-4 transition-transform duration-300",
                  isCatalogOpen ? "rotate-180" : "rotate-0"
                )}
              />
            </button>
            <div
              id="mobile-catalog-menu"
              className={clsx(
                "overflow-hidden transition-[max-height] duration-300 ease-in-out",
                isCatalogOpen ? "max-h-96 mt-2" : "max-h-0"
              )}
            >
              <nav className="flex flex-col space-y-2">
                {["Свинина", "Говядина", "Курица", "Конина"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => {
                      setIsOpen(false);
                      setIsCatalogOpen(false);
                    }}
                    className="block px-4 py-2 text-gray-600 hover:bg-red-700 hover:text-white transition-colors rounded-md"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>

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
