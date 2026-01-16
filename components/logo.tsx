import Image from "next/image";

export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-3 shrink-0">
      <Image
        src="/astrah-logo.png"
        alt="ASTRAH QS"
        width={135}
        height={32}
        className="h-4 w-auto"
        priority
        quality={100}
      />
    </a>
  );
}
