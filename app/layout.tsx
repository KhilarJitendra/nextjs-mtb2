import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

import Haeder from '../components/header/Header';

import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Montblanc Online Store',
  description: 'MTB website by next js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Haeder />
        {children}
        <Footer />
      </body>
    </html>
  );
}
