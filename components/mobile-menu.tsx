"use client";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <button
      className="lg:hidden p-2 hover:bg-cyan-400/10 rounded-lg transition-colors"
      onClick={() => setIsOpen((prev: boolean) => !prev)}
      aria-label="Toggle menu"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
}
