import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { RevealProvider } from '@/components/site/reveal-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  title: 'Biology Group 3',
  description:
    'A modern educational platform exploring cells and tissues through clean, interactive lessons.',
  openGraph: {
    title: 'Explore the Living World',
    description:
      'A modern educational platform exploring cells and tissues through clean, interactive lessons.',
    // Add your own OG image if you have one
    // images: [{ url: '/images/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    // images: [{ url: '/images/og-image.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <RevealProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="page-enter">
            {children}
          </main>
          <Footer />
        </RevealProvider>
      </body>
    </html>
  );
}