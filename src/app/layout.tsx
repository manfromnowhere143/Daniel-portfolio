import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Wahnich | Autonomous Systems Engineer",
  description: "Daniel Wahnich builds autonomous systems - algorithmic trading platforms, multi-agent AI systems, and cognitive frameworks. 600+ Python files, 290K+ lines of code.",
  keywords: ["Daniel Wahnich", "Autonomous Systems", "Algorithmic Trading", "Multi-Agent Systems", "Machine Learning", "Python Developer"],
  authors: [{ name: "Daniel Wahnich" }],
  creator: "Daniel Wahnich",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danielwahnich.vercel.app",
    title: "Daniel Wahnich | Autonomous Systems Engineer",
    description: "Building intelligence that operates independently. Algorithmic trading, multi-agent orchestration, cognitive frameworks.",
    siteName: "Daniel Wahnich",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Wahnich | Autonomous Systems Engineer",
    description: "Building intelligence that operates independently.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
