import Navigation from '@/components/Navigation';
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header className="flex justify-center px-8">
        <div className="container pt-6 sm:pb-8">
          <Navigation />
        </div>
      </header>
      <main className="flex justify-center px-8">
        <div className="container py-8">{children}</div>
      </main>
      <footer className="flex justify-center px-8 pb-8">
        <div className="container">
          <hr className="w-full border-1 border-gray-200 dark:border-gray-600 my-8" />
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 sm:justify-between">
            <p className="text-gray-700 dark:text-white text-sm">
              Built with Next.js, Tailwind, and ▲ Vercel
            </p>

            <p className="text-gray-700 dark:text-white text-sm">
              &copy; {new Date().getFullYear()} Matt Simpson
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
