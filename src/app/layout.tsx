import type { Metadata, Viewport } from "next";
import "./globals.css";

const description =
  "Better Off Studio offers premium digital design, brand strategy, and content creation to elevate businesses’ online presence with innovative UI/UX and branding.";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:4317";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Better Off Studio I Add-to-cart creative™",
  description,
  icons: { icon: "/sites/betteroff/img/favicon.gif" },
  openGraph: {
    type: "website",
    title: "Better Off Studio I Add-to-cart creative™",
    description,
    images: [{ url: "/sites/betteroff/img/og-share.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Better Off Studio I Add-to-cart creative™",
    description,
    images: ["/sites/betteroff/img/og-share.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1e1e1e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/sites/betteroff/fonts/PPNeueMontreal-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/sites/betteroff/fonts/founders-grotesk-x.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
