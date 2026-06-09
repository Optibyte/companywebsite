import Script from 'next/script';
import { ChevronDown } from 'lucide-react';
import { faqPageSchema } from '@/lib/seo';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  description?: string;
}

export function FAQSection({ items, title = "Frequently Asked Questions", description }: FAQSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const schema = faqPageSchema(items);

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        strategy="afterInteractive"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-5xl font-black text-[#0D1B3E] mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">{description}</p>
            )}
            <div className="w-20 h-1.5 bg-[#4DB846] mx-auto mt-6 rounded-full" />
          </div>

          <div className="space-y-4">
            {items.map((item, index) => (
              <details
                key={index}
                className="group border border-gray-200 rounded-lg overflow-hidden hover:border-[#4DB846]/50 transition-colors"
                open={expandedIndex === index}
                onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
                  <h3 className="font-bold text-lg text-[#0D1B3E] pr-4 flex-1 text-left">
                    {item.question}
                  </h3>
                  <ChevronDown className="w-5 h-5 text-[#4DB846] flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-6 bg-white text-gray-600 leading-relaxed border-t border-gray-200">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
