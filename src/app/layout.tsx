import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SwipeNavigation from "@/components/SwipeNavigation";

const inter = Inter({ subsets: ["latin"] });

// Disable zoom on mobile (pinch to zoom disabled)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Daniel Wahnich",
  description: "Artist, Autodidact, Builder.",
  keywords: ["Daniel Wahnich", "Autonomous Systems", "Algorithmic Trading", "Multi-Agent Systems", "Machine Learning", "Python Developer", "Artist", "Autodidact", "Builder"],
  authors: [{ name: "Daniel Wahnich" }],
  creator: "Daniel Wahnich",
  publisher: "Daniel Wahnich",
  applicationName: "Daniel Wahnich",
  verification: {
    google: "oUl-My2-hKLVi79mstsvLVV9hrNo5pOAi45KqqkGOIs",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danielwahnich.vercel.app",
    title: "Daniel Wahnich",
    description: "Artist, Autodidact, Builder.",
    siteName: "Daniel Wahnich",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Wahnich",
    description: "Artist, Autodidact, Builder.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('site-theme');
                  if (theme !== 'light' && theme !== 'dark') theme = 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.style.backgroundColor = theme === 'light' ? '#F5F5F0' : '#050506';
                  document.body && (document.body.style.backgroundColor = theme === 'light' ? '#F5F5F0' : '#050506');
                } catch (e) {}
              })();
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body {
                background-color: #050506;
              }
              html[data-theme="dark"], html[data-theme="dark"] body { background-color: #050506 !important; }
              html[data-theme="light"], html[data-theme="light"] body { background-color: #F5F5F0 !important; }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <SwipeNavigation>
          {children}
        </SwipeNavigation>
      </body>
    </html>
  );
}