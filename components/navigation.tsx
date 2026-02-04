"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navigation() {
  const t = useTranslations("header");

  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = () => {
    if (pathname === "/") {
      const el = document.getElementById("product");
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#product");
    }
  };
  const navItems = [
    { label: t("pricing"), href: "/pricing" },
    { label: t("migration"), href: "/migration" },
    { label: t("about"), href: "/about" },
  ];

  return (
    <nav className="hidden lg:flex gap-8">
      <button
        className=" text-foreground hover:text-cyan-400 transition-colors font-gilroy"
        onClick={handleScroll}
      >
        {t("product")}
      </button>
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
