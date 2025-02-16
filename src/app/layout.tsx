import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cashboard',
  description:
    'A personal finance application for those who like to micromanage their budget.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${GeistSans.className} antialiased dark:bg-gray-950`}
    >
      <body>{children}</body>
    </html>
  );
}
