import { getLegalContent } from "@/lib/legal";
import { extractToc } from "@/lib/toc";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import { notFound, redirect } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import TableOfContents from "./table-of-contents";

interface LegalPageContentsProps {
  title: string;
}

export default async function LegalPageContents({
  title,
}: LegalPageContentsProps) {
  const locale = await getLocale();
  const t = await getTranslations("legal");
  const data = getLegalContent(title, locale);
  if (!data) return notFound();

  const toc = extractToc(data.content);

  return (
    <main className="section-container">
      <div className="section-content pt-24 md:pt-32 ">
        <p className=" text-3xl lg:text-[40px] font-semibold md:font-medium my-12">
          {t(title)}
        </p>
        <div className="flex gap-12 max-md:flex-col-reverse">
          <article className="prose prose-invert max-w-none flex-1">
            <ReactMarkdown rehypePlugins={[rehypeSlug]}>
              {data.content}
            </ReactMarkdown>
          </article>
          {/* Sidebar TOC */}
          <TableOfContents tocSections={toc} />
        </div>
      </div>
    </main>
  );
}
