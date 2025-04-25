import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="container mx-auto py-4 sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center">
            <span className="text-xl font-bold text-white">JI</span>
          </div>
          <Link href="/">
            <span className="text-xl font-bold text-gray-900">JOBS INTERNATIONAL</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Find Job
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Find Companies
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Career Advice
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Company A-Z
          </Link>
          <Link href="#" className="border-primary text-sm font-medium hover:text-primary">
            Sign In
          </Link>
          <Button
            variant="outline"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:bg-primary hover:text-white"
          >
            Create Account
          </Button>
        </nav>
        <Button variant="ghost" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  );
}