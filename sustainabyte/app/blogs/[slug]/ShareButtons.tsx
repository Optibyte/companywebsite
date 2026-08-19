"use client";

import { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : `https://sustainabyte.ai/blogs/${slug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        <Share2 className="w-4 h-4 text-[#4DB846]" />
        Share this article:
      </div>

      <div className="flex items-center gap-3">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#0077B5] text-gray-700 hover:text-white flex items-center justify-center transition-colors text-sm"
        >
          <FaLinkedinIn />
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#25D366] text-gray-700 hover:text-white flex items-center justify-center transition-colors text-sm"
        >
          <FaWhatsapp />
        </a>

        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X (Twitter)"
          className="w-9 h-9 rounded-full bg-gray-100 hover:bg-black text-gray-700 hover:text-white flex items-center justify-center transition-colors text-sm"
        >
          <FaXTwitter />
        </a>

        <button
          onClick={handleCopy}
          aria-label="Copy link"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#4DB846]" />
              <span className="text-[#4DB846]">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
