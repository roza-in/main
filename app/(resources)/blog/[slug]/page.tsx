import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, User, Calendar, BookOpen, Share2 } from "lucide-react";
import { sanityClient } from "@/sanity/client/sanity";
import { postBySlugQuery } from "@/sanity/queries/blog";

export const revalidate = 3600; // Cache and update once per hour

export async function generateStaticParams() {
  try {
    const blogSlugsQuery = `*[_type == "post" && defined(slug.current)].slug.current`;
    const slugs = await sanityClient.fetch<string[]>(blogSlugsQuery);
    if (!slugs) return [];
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error("Failed to fetch blog slugs for generateStaticParams:", error);
    return [];
  }
}

interface ArticleDetails {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
  body: unknown; // PortableText block[]
}

function renderPostBody(body: unknown): React.ReactNode[] {
  if (!body) return [];
  if (Array.isArray(body)) {
    return body.map((block: Record<string, unknown>, idx: number) => {
      if (block && block._type === "block" && Array.isArray(block.children)) {
        const text = (block.children as Array<{ text?: string }>).map((child) => child.text || "").join("");
        const style = (block.style as string) || "normal";

        if (style === "h2") {
          return (
            <h2 key={idx} className="text-xl sm:text-2xl font-extrabold text-foreground mt-10 mb-3 tracking-tight">
              {text}
            </h2>
          );
        }
        if (style === "h3") {
          return (
            <h3 key={idx} className="text-base sm:text-lg font-bold text-foreground mt-7 mb-2">
              {text}
            </h3>
          );
        }
        if (style === "h4") {
          return (
            <h4 key={idx} className="text-sm sm:text-base font-bold text-foreground mt-5 mb-1.5">
              {text}
            </h4>
          );
        }

        return (
          <p key={idx} className="text-sm sm:text-base text-foreground/85 leading-relaxed">
            {text}
          </p>
        );
      }
      if (typeof block === "string") {
        return (
          <p key={idx} className="text-sm sm:text-base text-foreground/85 leading-relaxed">
            {block}
          </p>
        );
      }
      return null;
    });
  }
  return [];
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let article: ArticleDetails | null = null;

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawPost = await sanityClient.fetch<Record<string, any>>(postBySlugQuery, { slug });
    if (rawPost) {
      article = {
        slug: rawPost.slug?.current || "",
        title: rawPost.title || "",
        excerpt: rawPost.excerpt || "",
        author: rawPost.author?.name || "Unknown Author",
        publishedAt: rawPost.publishedAt
          ? new Date(rawPost.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "Recent",
        category: rawPost.categories?.[0]?.title || "Operations",
        body: rawPost.body || [],
      };
    }
  } catch (error) {
    console.error(`Failed to fetch article slug ${slug} from Sanity:`, error);
  }

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[100%_48px] opacity-10" />

      <div className="container max-w-3xl text-left">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <div className="space-y-4 mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary uppercase tracking-wide w-fit">
            <BookOpen className="h-3 w-3" />
            {article.category}
          </span>
          <h1 className="text-display text-2xl sm:text-3xl md:text-4xl tracking-tight">
            {article.title}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between border-y border-border/60 py-3.5 text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-semibold text-foreground/80">
                <User className="h-3.5 w-3.5 text-primary" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {article.publishedAt}
              </span>
            </div>
            
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors text-xs font-bold">
              <Share2 className="h-3.5 w-3.5" />
              Share
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-6 text-sm sm:text-base text-foreground/90 leading-relaxed font-sans">
          {renderPostBody(article.body)}
        </div>
      </div>
    </div>
  );
}
