import { Suspense } from 'react';
import { Metadata } from 'next';
import './globals.scss';
import { Roboto } from 'next/font/google';
import Header from '@/compnonents/Header';
import Footer from '@/compnonents/Footer';
import React from 'react';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['cyrillic'],
  style: ['normal'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
