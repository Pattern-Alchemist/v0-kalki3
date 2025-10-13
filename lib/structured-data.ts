import type { BlogPost } from "./blog-data"

export function generateBlogPostSchema(post: BlogPost, baseUrl = "https://astrokalki.com") {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${baseUrl}${post.image}`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "AstroKalki",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.jpeg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: ["astrology", post.category.toLowerCase(), "horoscope", "zodiac"],
  }
}

export function generateOrganizationSchema(baseUrl = "https://astrokalki.com") {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AstroKalki",
    description: "Sacred insight meets sharp execution. Personalized astrology readings and cosmic wisdom.",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.jpeg`,
    sameAs: ["https://twitter.com/astrokalki", "https://instagram.com/astrokalki", "https://facebook.com/astrokalki"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contact@astrokalki.com",
    },
  }
}

export function generateServiceSchema(baseUrl = "https://astrokalki.com") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Astrology Consultation",
    provider: {
      "@type": "Organization",
      name: "AstroKalki",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Astrology Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Personal Consultation",
            description: "One-on-one session for tailored insights",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Birth Chart Reading",
            description: "Deep dive into your natal chart and life path",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Compatibility Analysis",
            description: "Understand relationship dynamics and harmony",
          },
        },
      ],
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
