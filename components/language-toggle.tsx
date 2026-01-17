"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LanguageToggle() {
  const t = useTranslations("language");
  const locale = useLocale();
  const router = useRouter();

  const changeLanguage = (newLocale: string) => {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2 text-sm text-white">
      {/* <Image
        src="/translate.svg"
        alt="translate"
        width={18}
        height={18}
        className="md:w-[18px] md:h-[18px]"
      /> */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => changeLanguage("en")}
          className={`px-2 py-1 rounded-md transition-colors border border-transparent cursor-pointer ${
            locale === "en"
              ? "text-[#00d4ff]"
              : "text-white/70 hover:text-white"
          }`}
        >
          EN
        </button>
        <span className="text-white/40">/</span>
        <button
          onClick={() => changeLanguage("ar")}
          className={`px-2 py-1 rounded-md transition-colors border border-transparent cursor-pointer ${
            locale === "ar"
              ? "text-[#00d4ff] "
              : "text-white/70 hover:text-white"
          }`}
        >
          العربية
        </button>
      </div>
    </div>
  );
}
