import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { generateOrganizationJsonLd, generateWebsiteJsonLd } from '@/lib/seo';
import BackToTop from '@/components/BackToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Awesome DevSecOps - Comprehensive DevSecOps Guide',
    template: '%s | Awesome DevSecOps'
  },
  description: 'A comprehensive guide to DevSecOps practices and implementation. Learn about SAST, DAST, container security, CI/CD security, and DevSecOps tools.',
  keywords: ['DevSecOps', 'security', 'development', 'operations', 'CI/CD', 'automation', 'SAST', 'DAST', 'container security', 'cloud security'],
  authors: [{ name: 'Awesome DevSecOps Team' }],
  creator: 'Awesome DevSecOps',
  publisher: 'Awesome DevSecOps',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://awesome-devsecops.example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Awesome DevSecOps - Comprehensive DevSecOps Guide',
    description: 'A comprehensive guide to DevSecOps practices and implementation. Learn about SAST, DAST, container security, CI/CD security, and DevSecOps tools.',
    url: 'https://awesome-devsecops.example.com',
    siteName: 'Awesome DevSecOps',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Awesome DevSecOps - Security for Everyone',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Awesome DevSecOps - Comprehensive DevSecOps Guide',
    description: 'A comprehensive guide to DevSecOps practices and implementation. Learn about SAST, DAST, container security, CI/CD security, and DevSecOps tools.',
    creator: '@devsecops',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const organizationSchema = generateOrganizationJsonLd();
  const websiteSchema = generateWebsiteJsonLd();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}