import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Header() {
  return (
    <header className="fixed top-4 left-4 right-4 z-50 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg overflow-hidden">
      <div className="relative">
        <span className="absolute top-0 right-0 w-20 h-1" />
        <div className="container mx-auto py-4 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/jobs-international-logo.png" alt="@shadcn" />
              <AvatarFallback>JI</AvatarFallback>
            </Avatar>
            <Link href="/">
              <span className="text-xl font-bold text-gray-900">
                JOBS INTERNATIONAL
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/popular-jobs"
              className="text-sm font-medium hover:text-primary"
            >
              Explore Jobs
            </Link>
            <Link
              href="/#career-advice"
              className="text-sm font-medium hover:text-primary"
            >
              Career Advice
            </Link>
            <Link
              href="/#about-us"
              className="text-sm font-medium hover:text-primary"
            >
              About us
            </Link>
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
      </div>
    </header>
  );
}
