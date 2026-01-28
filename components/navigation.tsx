"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Navigation() {
  const t = useTranslations("header");

  const navItems = [
    { label: t("product"), href: "/#product" },
    { label: t("pricing"), href: "/pricing" },
    { label: t("migration"), href: "/migration" },
    { label: t("about"), href: "/about" },
  ];

  return (
    <nav className="hidden lg:flex gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className=" text-foreground hover:text-cyan-400 transition-colors font-gilroy"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
