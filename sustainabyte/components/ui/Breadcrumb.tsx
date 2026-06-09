import Script from 'next/script';
import Link from 'next/link';
import { breadcrumbSchema } from '@/lib/seo';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = breadcrumbSchema(items);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        strategy="afterInteractive"
      />

      <nav className="bg-gray-50 px-4 py-3 mb-8" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
              )}
              {index === items.length - 1 ? (
                <span className="text-gray-600 font-medium">{item.name}</span>
              ) : (
                <Link
                  href={item.url}
                  className="text-[#4DB846] hover:text-[#3DD68C] transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
