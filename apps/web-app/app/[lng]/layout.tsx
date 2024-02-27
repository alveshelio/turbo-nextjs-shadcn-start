import { languages } from '@/i18n/settings';
import { cn } from '@/lib/utils';
import { LanguageParams } from '@/types/common';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { dir } from 'i18next';
import { PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<PropsWithChildren<LanguageParams>>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}