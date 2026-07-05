import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Providers } from "./providers";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pritz.dev"),
  title: "Pritz Belleza | Senior Front-End Engineer",
  description:
    "Portfolio of John Pritz Belleza, senior front-end engineer specializing in design systems, Storybook, and Chromatic.",
  openGraph: {
    title: "Pritz Belleza | Senior Front-End Engineer",
    description:
      "Portfolio of John Pritz Belleza, senior front-end engineer specializing in design systems, Storybook, and Chromatic.",
    images: ["/brand/og-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/brand/og-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
