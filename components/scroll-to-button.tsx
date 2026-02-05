"use client";
import Link from "next/link"; // Use Next.js Link for internal routing
import { usePathname, useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";

const ScrollToLink = ({
  children,
  className,
  sectionId,
  sourcePath,
}: PropsWithChildren & {
  className?: string;
  sectionId: string;
  sourcePath: string;
}) => {
  const pathname = usePathname();

  // Create the full destination URL for SEO crawlers
  const destination = `${sourcePath}#${sectionId}`;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === sourcePath) {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link href={destination} className={className} onClick={handleScroll}>
      {children}
    </Link>
  );
};

export default ScrollToLink;
