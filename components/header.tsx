"use client";

import { useMenuStore } from "@/store/menu-store";
import { useTranslations } from "next-intl";
import LanguageToggle from "./language-toggle";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import Navigation from "./navigation";
import Link from "next/link";

export default function Header() {
  const { isOpen } = useMenuStore();
  const t = useTranslations("header");

  return (
    <header className="fixed top-0 w-full z-50 bg-background border-b border-white/5 px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto  py-4 md:py-5">
        <div className="flex items-center justify-between ">
          {/* Left section */}
          <div className="flex items-center md:w-1/3 justify-start">
            <Logo />
          </div>

          {/* Center section - Navigation */}
          <div className="hidden  md:flex items-center md:w-1/3 justify-center">
            <Navigation />
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3 lg:gap-6 md:w-1/3 justify-end">
            <LanguageToggle />

            <button className="cursor-pointer hidden md:inline-block px-7 py-4 border-[1.5px] border-white text-white rounded-lg hover:bg-white/10 transition-colors font-gilroy  text-sm">
              {t.rich("talkToAstrah", {
                bold: (chunk) => <span className="font-semibold">{chunk}</span>,
              })}
            </button>
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && <MobileMenuPanel />}
    </header>
  );
}

function MobileMenuPanel() {
  const t = useTranslations("header");
  const { closeMenu } = useMenuStore();

  const mobileMenuItems = [
    { label: t("product"), href: "#product" },
    { label: t("pricing"), href: "pricing" },
    { label: t("migration"), href: "migration" },
  ];

  return (
    <div className="md:hidden bg-background ">
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
        <button
          className="cursor-pointer w-full mt-4 px-4 py-2.5 rounded-full font-medium transition-colors text-black"
          style={{ backgroundColor: "#00d4ff" }}
        >
          {t.rich("talkToAstrah", {
            bold: (chunk) => <span className="font-semibold">{chunk}</span>,
          })}
        </button>
      </nav>
    </div>
  );
}
