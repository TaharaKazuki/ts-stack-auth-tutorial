import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/auth/Navigation';

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
        <div></div>
      </body>
    </html>
  );
};

export default RootLayout;
