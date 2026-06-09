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
  logo: "https://sustainabyte.ai/logo.png",
  description: "AI and IoT solutions for energy efficiency, sustainability, and net-zero decarbonization",
  sameAs: [
    "https://www.linkedin.com/company/sustainabyte-technologies",
    "https://twitter.com/sustainabyte",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mumbai, India",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    email: "contact@sustainabyte.ai",
    availableLanguage: "en",
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
  image: image || "https://sustainabyte.ai/logo.png",
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
  image: "https://sustainabyte.ai/logo.png",
  description: "Energy efficiency and sustainability solutions provider",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mumbai",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  telephone: "+91-XXXX-XXXX-XX",
  email: "contact@sustainabyte.ai",
  url: "https://sustainabyte.ai/contact",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

// BlogPosting Schema
export const blogPostSchema = (
  headline: string,
  description: string,
  image: string,
  datePublished: string,
  author: string = "Sustainabyte Technologies"
) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline,
  description,
  image,
  datePublished,
  author: {
    "@type": "Organization",
    name: author,
  },
});

// Blog Schema (for news/blog listing page)
export const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Sustainabyte News & Insights",
  description: "Latest news and insights on energy efficiency, sustainability, and net-zero solutions",
  url: "https://sustainabyte.ai/news",
  publisher: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
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
