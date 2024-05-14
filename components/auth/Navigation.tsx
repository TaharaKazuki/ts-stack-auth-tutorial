'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface NavigationProps {
  user: any;
}

const Navigation = () => {
  return (
    <header className="shadow-lg shadow-gray-100 mb-10">
      <div className="container mx-auto flex max-w-screen-md items-center justify-between px-1 py-3">
        <Link href="/" className="cursor-pointer text-xl font-bold">
          T3 Stack 入門
        </Link>
      </div>
      <div className="flex items-center space-x-1">
        <Button asChild variant="ghost" className="font-bold">
          <Link href="/login">ログイン</Link>
        </Button>
        <Button asChild variant="default" className="font-bold">
          <Link href="signup">新規登録</Link>
        </Button>
      </div>
    </header>
  );
};

export default Navigation;
