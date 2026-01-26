import fs from "fs";
import path from "path";
import matter from "gray-matter";

const legalDir = path.join(process.cwd(), "content/legal");
const validLocales = ["en", "ar"];
export function getLegalContent(slug: string, locale: string) {
  if (!validLocales.includes(locale)) return;
  const filePath = path.join(legalDir, `${slug}.${locale}.md`);

  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(file);

  return {
    content,
    meta: data, // optional frontmatter
  };
}
