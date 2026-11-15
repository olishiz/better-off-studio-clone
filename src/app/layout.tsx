import type { Metadata, Viewport } from "next";
import { Anton } from "next/font/google";
import "./globals.css";

const display = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const title = "The Shiz — Web Design & Development in Malaysia";
const description =
  "The Shiz is a Malaysian web and AI engineering studio. Custom websites, web applications, e-commerce, SEO and applied AI for Malaysian businesses.";

const vercelHost =
  process.env.VERCEL_ENV === "production"
    ? process.env.VERCEL_PROJECT_PRODUCTION_URL
    : (process.env.VERCEL_BRANCH_URL ?? process.env.VERCEL_URL);
const siteUrl = vercelHost ? `https://${vercelHost}` : "http://localhost:4317";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: { icon: "/sites/the-shiz/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "The Shiz",
    title,
    description:
      "Web design, development and applied AI for Malaysian businesses — simple, functional and well built.",
    images: [{ url: "/sites/the-shiz/img/og-image.png", width: 1200, height: 630, alt: "The Shiz wordmark" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "Simple, functional, well-built websites for Malaysian businesses.",
    images: ["/sites/the-shiz/img/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#26251f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY" className={display.variable}>
      <head>
        <link
          rel="preload"
          href="/sites/the-shiz/fonts/inter-latin-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
