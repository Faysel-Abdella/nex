"use client";
import { TocItem } from "@/types";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

interface TableOfContentsProps {
  tocSections: TocItem[];
}
const TableOfContents = ({ tocSections }: TableOfContentsProps) => {
  const t = useTranslations("legal");
  const [activeSection, setActiveSection] = useState("");
  const tocRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const tocContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const SCROLL_OFFSET = 200;

    const handleScroll = () => {
      let currentSectionId = "";

      for (let i = tocSections.length - 1; i >= 0; i--) {
        const section = tocSections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect(); // Check if the element's top edge is above the SCROLL_OFFSET line.
          // This means the section has entered the 'active' reading area.
          if (rect.top <= SCROLL_OFFSET) {
            currentSectionId = section.id;
            break; // Found the highest section in the view, so we stop and set it.
          }
        }
      }
      setActiveSection(currentSectionId);
    }; // Use passive scroll event listener for performance

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocSections]);

  const handleLinkClick = (id: string) => {
    const FIXED_HEADER_HEIGHT = 100;
    const element = document.getElementById(id);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;

      const offsetPosition =
        elementPosition + window.scrollY - FIXED_HEADER_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className=" w-68 md:min-h-screen h-auto  ">
      <div
        ref={tocContainerRef}
        className="md:sticky md:top-32 lg:top-26 flex flex-col gap-6 h-auto max-h-[calc(100vh-2rem)] overflow-y-auto"
      >
        <h3 className="text-xl font-inter font-bold">{t("toc")}</h3>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute start-0 top-0 bottom-0 w-0.75 bg-white/10 rounded-full"></div>

          <ul className="space-y-4 relative ms-5">
            {tocSections.map((section) => (
              <li
                key={section.id}
                ref={(el) => {
                  tocRefs.current[section.id] = el;
                }}
                className="relative"
              >
                <button
                  onClick={() => handleLinkClick(section.id)}
                  className={`block  text-start  relative transition-all duration-300 ease-in-out  ${
                    activeSection === section.id
                      ? "text-white font-semibold"
                      : "text-muted-foreground hover:cursor-pointer hover:text-white/90"
                  }`}
                >
                  {/* Blue indicator for active section */}

                  {activeSection === section.id && (
                    <div className="absolute start-0 top-0 bottom-0 rounded-lg -ms-5 w-0.75  bg-primary transition-all duration-300 ease-in-out"></div>
                  )}
                  {section.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
