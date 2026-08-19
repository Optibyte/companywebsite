// SEO utilities for structured data (JSON-LD) and metadata

interface SchemaProps {
  [key: string]: any;
}

export const generateSchema = (schema: SchemaProps) => {
  return {
    __html: JSON.stringify(schema),
  };
};

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sustainabyte Technologies",
  url: "https://sustainabyte.ai",
  logo: "https://sustainabyte.ai/icon.png",
  description: "AI and IoT solutions for industrial energy efficiency, sustainability, and net-zero decarbonization.",
  sameAs: [
    "https://www.linkedin.com/company/sustainabyte-ai/",
    "https://www.youtube.com/@SustainabyteTechnologies",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tambaram",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600045",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support & Sales",
    telephone: "+91-83770-07638",
    email: "contact@sustainabyte.ai",
    availableLanguage: ["en", "ta", "hi"],
  },
};

// Website Schema with Search Action
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sustainabyte Technologies",
  url: "https://sustainabyte.ai",
  searchAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://sustainabyte.ai/search?q={search_term_string}",
    },
    query: "required name=search_term_string",
  },
};

// SiteNavigationElement Schema for Google Sitelinks
export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SiteNavigationElement",
      name: "Technology & AI Products",
      description: "Explore AI-powered energy intelligence platforms: OptiByte, InByte, FixByte, and IoT solutions.",
      url: "https://sustainabyte.ai/technology",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Energy Solutions & Audits",
      description: "Industrial energy management, efficiency consulting, and BEE-compliant energy audits.",
      url: "https://sustainabyte.ai/energy",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Careers & Internships",
      description: "Explore open engineering roles, tech jobs, and internships in Chennai (Tambaram).",
      url: "https://sustainabyte.ai/careers",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Our Team & Leadership",
      description: "Meet the engineers, leadership, and sustainability innovators at Sustainabyte.",
      url: "https://sustainabyte.ai/people",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Blogs & Sustainability Insights",
      description: "In-depth articles on Agentic AI, smart utilities, ASHRAE energy audits, and industrial decarbonization.",
      url: "https://sustainabyte.ai/blogs",
    },
    {
      "@type": "SiteNavigationElement",
      name: "News & Media Insights",
      description: "Latest media coverage, publications, and thought leadership articles.",
      url: "https://sustainabyte.ai/news",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Contact Us",
      description: "Get in touch with our team in Chennai for product demos, audits, and inquiries.",
      url: "https://sustainabyte.ai/contact",
    },
  ],
};

// Service Schema
export const serviceSchema = (
  name: string,
  description: string,
  url: string,
  image?: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    url: "https://sustainabyte.ai",
  },
  image: image || "https://sustainabyte.ai/icon.png",
  url,
  serviceArea: {
    "@type": "Country",
    name: "India",
  },
  areaServed: "IN",
});

// LocalBusiness Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sustainabyte Technologies",
  image: "https://sustainabyte.ai/icon.png",
  description: "AI-powered industrial energy intelligence, IoT monitoring, and net-zero sustainability solutions provider.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tambaram",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600045",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9249",
    longitude: "80.1000",
  },
  telephone: "+91-83770-07638",
  email: "contact@sustainabyte.ai",
  url: "https://sustainabyte.ai",
  priceRange: "$$",
  currenciesAccepted: "INR, USD, AED",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.linkedin.com/company/sustainabyte-ai/",
    "https://www.youtube.com/@SustainabyteTechnologies",
  ],
};

// BlogPosting Schema
export const blogPostSchema = (
  headline: string,
  description: string,
  image: string,
  datePublished: string,
  authorName: string = "Sustainabyte Technologies",
  authorLinkedIn?: string,
  dateModified?: string
) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline,
  description,
  image,
  datePublished,
  dateModified: dateModified || datePublished,
  author: {
    "@type": "Person",
    name: authorName,
    ...(authorLinkedIn && { sameAs: authorLinkedIn }),
    worksFor: {
      "@type": "Organization",
      name: "Sustainabyte Technologies",
      url: "https://sustainabyte.ai",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    logo: {
      "@type": "ImageObject",
      url: "https://sustainabyte.ai/logo.png",
    },
  },
});

// Blog Schema (for blogs listing page)
export const blogsSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Sustainabyte Sustainability & Energy AI Blogs",
  description: "Expert articles on smart utilities, Agentic AI, ASHRAE energy audits, and industrial decarbonization.",
  url: "https://sustainabyte.ai/blogs",
  publisher: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    url: "https://sustainabyte.ai",
    logo: {
      "@type": "ImageObject",
      url: "https://sustainabyte.ai/logo.png",
    },
  },
};

// News Schema (for news listing page)
export const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Sustainabyte News & Insights",
  description: "Latest news and insights on energy efficiency, sustainability, and net-zero solutions",
  url: "https://sustainabyte.ai/news",
  publisher: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    url: "https://sustainabyte.ai",
    logo: {
      "@type": "ImageObject",
      url: "https://sustainabyte.ai/logo.png",
    },
  },
};

// FAQPage Schema
export const faqPageSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// BreadcrumbList Schema
export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Product Schema (for technology products)
export const productSchema = (
  name: string,
  description: string,
  image: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name,
  description,
  image,
  url,
  brand: {
    "@type": "Brand",
    name: "Sustainabyte Technologies",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
  },
});

// NewsArticle Schema (for news/blog posts)
export const newsArticleSchema = (
  headline: string,
  description: string,
  image: string,
  datePublished: string,
  dateModified?: string,
  authorName: string = "Sustainabyte Technologies",
  authorLinkedIn?: string
) => ({
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline,
  description,
  image,
  datePublished,
  dateModified: dateModified || datePublished,
  author: {
    "@type": "Person",
    name: authorName,
    ...(authorLinkedIn && { sameAs: authorLinkedIn }),
    worksFor: {
      "@type": "Organization",
      name: "Sustainabyte Technologies",
      url: "https://sustainabyte.ai",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    logo: {
      "@type": "ImageObject",
      url: "https://sustainabyte.ai/logo.png",
    },
  },
});

// JobPosting Schema (for career positions)
export const jobPostingSchema = (
  title: string,
  description: string,
  jobLocation: string = "Chennai, India",
  employmentType: string = "FULL_TIME",
  salary?: { currency: string; value: { minValue: number; maxValue: number } }
) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title,
  description,
  datePosted: new Date().toISOString().split("T")[0],
  employmentType,
  hiringOrganization: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    sameAs: "https://sustainabyte.ai",
    logo: "https://sustainabyte.ai/logo.png",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: jobLocation.split(",")[0],
      addressCountry: "IN",
    },
  },
  ...(salary && {
    baseSalary: {
      "@type": "PriceSpecification",
      priceCurrency: salary.currency,
      minPrice: salary.value.minValue,
      maxPrice: salary.value.maxValue,
    },
  }),
  validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0],
});

// Person Schema (for team members)
export const personSchema = (
  name: string,
  jobTitle: string,
  image?: string,
  url?: string,
  email?: string,
  sameAs?: string | string[]
) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  jobTitle,
  image: image || undefined,
  url: url || undefined,
  email: email || undefined,
  ...(sameAs && { sameAs }),
  worksFor: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    url: "https://sustainabyte.ai",
  },
});

// ProfilePage Schema (for team/people pages)
export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Sustainabyte Team",
  description: "Meet the innovative team driving sustainability through technology",
  url: "https://sustainabyte.ai/people",
};

// LocalBusiness Schema for multiple India regions
export const localBusinessRegionalSchema = (city: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sustainabyte Technologies",
  image: "https://sustainabyte.ai/icon.png",
  description: `Sustainabyte Technologies - Energy efficiency and sustainability solutions in ${city}, India`,
  address: {
    "@type": "PostalAddress",
    addressLocality: city,
    addressRegion: city,
    postalCode: "600045",
    addressCountry: "IN",
  },
  telephone: "+91-83770-07638",
  email: "contact@sustainabyte.ai",
  url: "https://sustainabyte.ai/contact",
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: city,
  },
});
