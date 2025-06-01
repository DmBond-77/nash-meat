"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import SocialIcons from "@/components/shared/SocialIcons";
import Container from "@/components/shared/Container";
import { motion, AnimatePresence } from "framer-motion";

// Navigation links (adjusted for full page + anchors)
const NAV_LINKS = [
  { label: "Главная", href: "/" },
  { label: "Почему мы", href: "/#why" },
  { label: "О компании", href: "/#about" },
  { label: "Контакты", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu open/close
  const [isCatalogOpen, setIsCatalogOpen] = useState(false); // Catalog submenu open/close
  const [activeSection, setActiveSection] = useState<string>("/");

  // Highlight active nav link based on scroll position (only on home page)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = "/";

      for (const link of NAV_LINKS) {
        if (link.href.startsWith("/#")) {
          const id = link.href.split("#")[1];
          const section = document.getElementById(id);
          if (section) {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            if (scrollPos >= top && scrollPos < bottom) {
              current = link.href;
              break;
            }
          }
        }
      }

      setActiveSection(current);
    };

    if (typeof window !== "undefined" && window.location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation presets
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  return (
    <>
      {/* Sticky header container */}
      <header className="fixed top-0 left-0 z-50 w-full shadow-md bg-white border-b border-red-200">
        <Container className="flex items-center justify-between gap-6 py-3">
          {/* Logo */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            className="flex-shrink-0"
          >
            <Link href="/" aria-label="На главную">
              <Image
                src="/images/logo.png"
                alt="Логотип Nash Meat"
                width={150}
                height={200}
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop navigation (shown at lg and above) */}
          <motion.nav
            custom={1}
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            className="hidden lg:flex items-center space-x-6 text-base font-semibold"
            aria-label="Main navigation"
          >
            {/* Main nav links */}
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className="group relative inline-block transition-colors text-md"
                >
                  <span
                    className={clsx("relative", {
                      "text-red-700": isActive,
                      "text-gray-600 hover:text-red-800": !isActive,
                    })}
                  >
                    {link.label}
                    <span
                      className={clsx(
                        "absolute left-0 -bottom-1 h-[2px] bg-red-700 transition-all duration-300",
                        {
                          "w-0 group-hover:w-full": !isActive,
                          "w-full": isActive,
                        }
                      )}
                    />
                  </span>
                </Link>
              );
            })}

            {/* Catalog dropdown (desktop) */}
            <div className="relative group">
              <button
                className="text-gray-600 hover:text-red-800 font-semibold text-md px-0 flex items-center gap-2 cursor-pointer"
                aria-haspopup="true"
                aria-expanded="false"
                aria-controls="catalog-dropdown"
              >
                <span>Каталог</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div
                id="catalog-dropdown"
                className="absolute top-full left-0 bg-white border shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-20 min-w-[150px]"
              >
                {["Свинина", "Говядина", "Курица", "Баранина", "Фарш"].map(
                  (item) => (
                    <Link
                      key={item}
                      href={`/#${item.toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-red-700 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
            </div>
          </motion.nav>

          {/* Social icons (desktop) */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            className="ml-auto hidden sm:flex"
          >
            <SocialIcons />
          </motion.div>

          {/* Burger button (mobile only) */}
          <motion.button
            custom={3}
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            onClick={() => {
              setIsOpen(!isOpen);
              if (isOpen) setIsCatalogOpen(false);
            }}
            className="lg:hidden text-red-700 cursor-pointer"
            aria-label={
              isOpen ? "Закрыть мобильное меню" : "Открыть мобильное меню"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </Container>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white text-red-700 lg:hidden px-6"
            role="dialog"
            aria-label="Mobile menu"
          >
            {/* Mobile nav links */}
            <nav
              className="flex flex-col items-center space-y-6 text-xl font-semibold"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "group relative inline-block transition-colors",
                      {
                        "text-red-700": isActive,
                        "text-gray-600 hover:text-red-800": !isActive,
                      }
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="relative">
                      {link.label}
                      <span
                        className={clsx(
                          "absolute left-0 -bottom-1 h-[2px] bg-red-700 transition-all duration-300",
                          {
                            "w-0 group-hover:w-full": !isActive,
                            "w-full": isActive,
                          }
                        )}
                      />
                    </span>
                  </Link>
                );
              })}

              {/* Catalog (mobile dropdown) */}
              <div className="w-full text-center">
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

                {isCatalogOpen && (
                  <div
                    id="mobile-catalog-menu"
                    className="mt-2 w-full overflow-hidden"
                  >
                    <nav className="flex flex-col space-y-2">
                      {[
                        "Свинина",
                        "Говядина",
                        "Курица",
                        "Баранина",
                        "Фарш",
                      ].map((item) => (
                        <Link
                          key={item}
                          href={`/#${item.toLowerCase()}`}
                          onClick={() => {
                            setIsOpen(false);
                            setIsCatalogOpen(false);
                          }}
                          className="block px-4 py-2 text-gray-600 hover:bg-red-700 hover:text-white transition-colors rounded-md"
                        >
                          {item}
                        </Link>
                      ))}
                    </nav>
                  </div>
                )}
              </div>

              {/* Order button (mobile) */}
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
              >
                Сделать заказ
              </Link>

              {/* Social icons (mobile) */}
              <SocialIcons className="mt-6" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
