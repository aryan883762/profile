
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import AOSInit from '@/components/AOSInit';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kumar Aryan | Full-Stack & Mobile Developer',
  description: 'Portfolio of Kumar Aryan - Full-Stack & Mobile Developer (React, Next.js, Angular, React Native, Flutter, Node.js)',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
