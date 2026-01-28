"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import LanguageToggle from "./language-toggle";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import Navigation from "./navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("header");

  return (
    <header className="fixed top-0 w-full z-50 bg-background border-b border-white/5 px-6  lg:px-16">
      <div className="max-w-7xl mx-auto  py-4 lg:py-5">
        <div className="flex items-center justify-between ">
          {/* Left section */}
          <div className="flex items-center lg:w-1/3 justify-start">
            <Logo />
          </div>

          {/* Center section - Navigation */}
          <div className="hidden  lg:flex items-center lg:w-1/3 justify-center">
            <Navigation />
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3 lg:gap-6 lg:w-1/3 justify-end">
            <LanguageToggle />
            <Link href="/contact">
              <button className="cursor-pointer hidden lg:inline-block px-7 py-4 border-[1.5px] border-primary text-white rounded-lg hover:bg-white/10 transition-colors font-gilroy  text-sm">
                {t.rich("talkToAstrah", {
                  bold: (chunk) => (
                    <span className="font-semibold">{chunk}</span>
                  ),
                })}
              </button>
            </Link>
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {<MobileMenuPanel isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header>
  );
}

function MobileMenuPanel({
  setIsOpen,
  isOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const t = useTranslations("header");
  const closeMenu = () => {
    setIsOpen(false);
  };

  const mobileMenuItems = [
    { label: t("product"), href: "/#product" },
    { label: t("pricing"), href: "/pricing" },
    { label: t("migration"), href: "/migration" },
    { label: t("about"), href: "/about" },
  ];

  return (
    <div
      className={cn(
        "lg:hidden bg-background transition-all overflow-hidden ",
        isOpen ? "h-56" : "h-0",
      )}
    >
      <nav className="px-4 py-4 space-y-3">
        {mobileMenuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block text-sm text-gray-400 hover:text-[#00d4ff] transition-colors"
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/contact" onClick={closeMenu}>
          <button
            className="cursor-pointer w-full mt-4 px-4 py-2.5 rounded-full font-medium transition-colors text-black"
            style={{ backgroundColor: "#00d4ff" }}
          >
            {t.rich("talkToAstrah", {
              bold: (chunk) => <span className="font-semibold">{chunk}</span>,
            })}
          </button>
        </Link>
      </nav>
    </div>
  );
}
