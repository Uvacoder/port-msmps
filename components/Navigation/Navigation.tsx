import DarkModeToggle from '@/components/DarkModeToggle';
import Link from '@/components/Link';

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center">
      <Link href="/" className="text-black dark:text-white font-bold">
        M.
      </Link>

      <DarkModeToggle />
    </nav>
  );
}
