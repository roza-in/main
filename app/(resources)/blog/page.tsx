import React from "react";
import Link from "next/link";
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";
import { sanityClient } from "@/sanity/client/sanity";
import { allPostsQuery } from "@/sanity/queries/blog";
import { BlogNewsletter } from "@/components/blog/blog-newsletter";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
}

export default async function BlogIndexPage() {
  let displayPosts: BlogPost[] = [];

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawPosts = await sanityClient.fetch<Record<string, any>[]>(allPostsQuery);
    if (rawPosts && rawPosts.length > 0) {
      displayPosts = rawPosts.map((post) => ({
        slug: post.slug?.current || "",
        title: post.title || "",
        excerpt: post.excerpt || "",
        author: post.author?.name || "Unknown Author",
        publishedAt: post.publishedAt
          ? new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "Recent",
        category: post.categories?.[0]?.title || "Operations",
      }));
    }
  } catch (error) {
    console.error("Failed to fetch blog posts from Sanity:", error);
  }

  // Extract featured post (first post) and remaining posts
  const featuredPost = displayPosts.length > 0 ? displayPosts[0] : null;
  const remainingPosts = displayPosts.length > 1 ? displayPosts.slice(1) : [];

  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background ambient spots & grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[100%_48px] opacity-10" />
      <div className="absolute top-0 left-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />

      {/* Hero Section */}
      <div className="pt-28 pb-20 relative overflow-hidden">
        <div className="container max-w-5xl text-center space-y-8">
          <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
            Resources Hub
          </span>
          <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto tracking-tight leading-none">
            The Rozx <span className="text-primary font-bold">Blog</span>.
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Operational blueprints, tax guidelines, and growth marketing guides curated specifically for service business leaders.
          </p>
        </div>
      </div>

      <div className="container max-w-5xl">

        {/* Empty State */}
        {displayPosts.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center max-w-md mx-auto space-y-3.5 shadow-xs mb-16">
            <BookOpen className="h-8 w-8 text-muted-foreground/45 mx-auto" />
            <h3 className="text-xs sm:text-sm font-bold text-foreground">No articles published yet</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We are preparing detailed guides and blueprints. Please check back soon.
            </p>
          </div>
        ) : (
          <div className="space-y-12 mb-16">
            {/* Featured Post Card */}
            {featuredPost && (
              <div className="rounded-xl border border-border bg-card overflow-hidden shadow-xs hover:border-primary/45 transition-all duration-200">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="p-6 sm:p-8 md:col-span-8 flex flex-col justify-between space-y-6 text-left">
                    <div className="space-y-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary uppercase tracking-wide w-fit">
                        <BookOpen className="h-3 w-3" />
                        Featured blueprint
                      </span>
                      <h2 className="text-heading-2 text-xl sm:text-2xl md:text-3xl text-foreground hover:text-primary transition-colors">
                        <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                      </h2>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground pt-4 border-t border-border/60">
                      <span className="flex items-center gap-1.5 font-semibold text-foreground/80">
                        <User className="h-3.5 w-3.5" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {featuredPost.publishedAt}
                      </span>
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline ml-auto"
                      >
                        Read Article
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Decorative Side Panel */}
                  <div className="hidden md:flex md:col-span-4 bg-surface-1 border-l border-border items-center justify-center p-8 text-center select-none">
                    <BookOpen className="h-16 w-16 text-primary/15" />
                  </div>
                </div>
              </div>
            )}

            {/* Remaining Posts Grid */}
            {remainingPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {remainingPosts.map((post) => (
                  <div
                    key={post.slug}
                    className="rounded-xl border border-border bg-card p-5 shadow-xs hover:border-primary/45 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="space-y-4 text-left">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[9px] font-bold text-primary uppercase tracking-wide">
                        {post.category}
                      </span>
                      
                      <h3 className="text-heading-3 text-base leading-snug hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">{post.excerpt}</p>
                    </div>

                    <div className="mt-6 pt-3.5 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1.5 font-medium">
                        <User className="h-3 w-3 text-foreground/75" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" />
                        {post.publishedAt}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Newsletter Subscription Box */}
        <BlogNewsletter />
      </div>
    </div>
  );
}
