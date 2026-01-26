import { getLegalContent } from "@/lib/legal";
import { extractToc } from "@/lib/toc";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import { notFound, redirect } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import TableOfContents from "@/components/table-of-contents";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const validSlugs = ["privacy", "terms", "acceptableUse", "refunds"];

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  if (!validSlugs.includes(slug)) return notFound();
  const locale = await getLocale();
  const t = await getTranslations("legal");
  const data = getLegalContent(slug, locale);
  if (!data) return notFound();

  const toc = extractToc(data.content);

  return (
    <main className="section-container">
      <div className="section-content pt-24 md:pt-32 ">
        <p className=" text-3xl lg:text-[40px] font-medium my-12">{t(slug)}</p>
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
