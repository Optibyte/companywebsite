import type { Metadata } from "next";
import Script from "next/script";
import { jobPostingSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Careers at Sustainabyte | Jobs in Chennai",
  description:
    "Join Sustainabyte Technologies in Chennai. Open roles in Frontend Dev, Full Stack, DevOps, Energy Engineering & Digital Marketing. Internships available.",
  keywords: [
    "careers sustainabyte",
    "jobs Chennai",
    "frontend developer jobs Chennai",
    "full stack developer Chennai",
    "DevOps jobs India",
    "energy engineering jobs",
    "digital marketing intern Chennai",
    "sustainability jobs India",
    "software jobs Tambaram",
    "startup jobs Chennai",
  ],
  openGraph: {
    title: "Careers at Sustainabyte Technologies | Join Our Team",
    description:
      "Build the future with Sustainabyte. We're hiring Frontend Devs, Full Stack, DevOps, Energy Engineers & Interns in Chennai. AI-powered sustainability startup.",
    type: "website",
    url: "https://sustainabyte.ai/careers",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Careers at Sustainabyte Technologies – Join our team in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Sustainabyte Technologies",
    description:
      "We're hiring Frontend Devs, Full Stack Engineers, DevOps & Energy Interns in Chennai. Join our AI-powered sustainability startup.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/careers",
  },
};

// All open positions as structured JobPosting schemas for Google Jobs
const openPositions = [
  jobPostingSchema(
    "Frontend Developer",
    "Build high-performance, visually stunning web interfaces using React.js, Next.js and TypeScript. Work closely with design and backend teams to deliver seamless UX for industrial and sustainability products.",
    "Chennai (Tambaram), India",
    "FULL_TIME"
  ),
  jobPostingSchema(
    "Full Stack Developer",
    "Own features end-to-end — from database design to pixel-perfect UI — on our industrial SaaS and energy management platforms. Stack: React/Next.js, Node.js, Python, SQL, TypeScript.",
    "Chennai (Tambaram), India",
    "FULL_TIME"
  ),
  jobPostingSchema(
    "DevOps Engineer",
    "Build and manage cloud infrastructure, CI/CD pipelines, and deployment automation on AWS/Azure. Ensure our platforms are highly available, scalable, and secure.",
    "Chennai (Tambaram), India",
    "FULL_TIME"
  ),
  jobPostingSchema(
    "Software Developer Intern",
    "Develop and maintain web applications using Python and Next.js. Design and optimize SQL database queries. Build REST APIs and collaborate with the development team. 3–6 month internship with potential for full-time hire.",
    "Chennai (Tambaram), India",
    "INTERN"
  ),
  jobPostingSchema(
    "Energy Audit Intern",
    "Support industrial and commercial energy audits. Collect field data, document observations, and assist in EMS project implementation. 3–6 month internship for Mechanical/Electrical/Energy Engineering students.",
    "Chennai (Tambaram), India",
    "INTERN"
  ),
  jobPostingSchema(
    "Sales Intern",
    "Support business development through lead generation, customer engagement, market research, and B2B sales. Gain hands-on experience with CRM and sales processes. 3–6 month internship with potential for full-time hire.",
    "Chennai (Tambaram), India",
    "INTERN"
  ),
  jobPostingSchema(
    "Digital Marketing Intern",
    "Support online marketing initiatives including social media, SEO, content marketing, and campaign management. Create social media content, assist in digital campaigns, and track performance. 3–6 month internship.",
    "Chennai (Tambaram), India",
    "INTERN"
  ),
  jobPostingSchema(
    "Energy Engineer Intern",
    "Support energy efficiency and sustainability initiatives. Analyze energy consumption, identify savings opportunities, and assist in implementing energy conservation measures. 3–6 month internship.",
    "Chennai (Tambaram), India",
    "INTERN"
  ),
];

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {openPositions.map((position, index) => (
        <Script
          key={index}
          id={`job-posting-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(position) }}
          strategy="afterInteractive"
        />
      ))}
      {children}
    </>
  );
}

