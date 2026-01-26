import { TocItem } from "@/types";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\u0600-\u06FF ]+/g, "") // keep Arabic chars
    .trim()
    .replace(/\s+/g, "-");
}

export function extractToc(markdown: string): TocItem[] {
  const lines = markdown.split("\n");
  const toc: TocItem[] = [];

  for (const line of lines) {
    const match = line.match(/^(##|###)\s+(.*)/);
    if (!match) continue;

    const level = match[1].length; // 2 or 3
    const text = match[2].trim();

    toc.push({
      id: slugify(text),
      text,
      level,
    });
  }

  return toc;
}
