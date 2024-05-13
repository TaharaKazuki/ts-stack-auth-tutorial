'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface NavigationProps {
  user: any;
}

const Navigation = () => {
  return (
    <header className="shadow-lg shadow-gray-100 mb-10">
      <div className="container mx-auto flex max-w-screen-md items-center justify-between"></div>
    </header>
  );
};

export default Navigation;
