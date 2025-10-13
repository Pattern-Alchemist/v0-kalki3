import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { BlogPostView } from "@/components/blog/blog-post-view"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data"
import { generateBlogPostSchema, generateBreadcrumbSchema } from "@/lib/structured-data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | AstroKalki Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const blogSchema = generateBlogPostSchema(post)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://astrokalki.com" },
    { name: "Blog", url: "https://astrokalki.com/blog" },
    { name: post.title, url: `https://astrokalki.com/blog/${post.slug}` },
  ])

  return (
    <div className="min-h-dvh flex flex-col relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10">
        <BlogPostView post={post} />
      </main>
      <SiteFooter />
    </div>
  )
}
