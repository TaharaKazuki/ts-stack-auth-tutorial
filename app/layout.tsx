import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/auth/Navigation';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'T3Stack入門',
  description: 'T3Stack入門',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({}: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="container mx-auto max-w-screen-md flex-1 px-2"></main>
          <footer className="py-5">
            <div className="text-center text-sm">
              Copyright © All rights reserved |{' '}
              <Link
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                YouTube
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
