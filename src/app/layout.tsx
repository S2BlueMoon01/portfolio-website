import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/simple-header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollAnimations } from "@/components/scroll-animations";
import CustomCursor from "@/components/CustomCursor";
import { personalInfo } from "@/data";
import { en } from "@/locales/en";

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} - ${en.seo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: en.seo.description,
  keywords: en.seo.keywords.split(', '),
  authors: [{ name: personalInfo.name, url: personalInfo.website }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personalInfo.website,
    title: `${personalInfo.name} - ${en.seo.title}`,
    description: en.seo.description,
    siteName: personalInfo.name,
    images: [
      {
        url: `${personalInfo.website}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${en.seo.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${en.seo.title}`,
    description: en.seo.description,
    images: [`${personalInfo.website}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background font-sans">
        <ThemeProvider
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <CustomCursor />
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <ScrollAnimations />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
