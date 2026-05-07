import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ISO Global Insight',

  description:
    'Professional article submission platform for business, technology, compliance, and industry insights.',

  openGraph: {
    title: 'ISO Global Insight',

    description:
      'Professional article submission platform for business, technology, compliance, and industry insights.',

    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'ISO Global Insight',

    description:
      'Professional article submission platform for business, technology, compliance, and industry insights.',

    images: ['https://bolt.new/static/og_default.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}