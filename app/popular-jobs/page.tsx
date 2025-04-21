// app/popular-jobs/page.tsx
import { Button } from '@/components/ui/button';
import JobCard from '@/components/JobCard';
import Link from 'next/link';

export default function PopularJobs() {
  return (
    <div className="min-h-screen py-16">
      <header className="container mx-auto py-4">
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
    <span className="text-xl font-bold text-white">JI</span>
  </div>
  <Link href="/">
    <span className="text-xl font-bold">JOBS INTERNATIONAL</span>
  </Link>
</div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Find Companies
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Find Job
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Career Advice
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Company A-Z
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Sign In
            </Link>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
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
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Popular Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <JobCard
            company="Facebook"
            position="Product Designer"
            location="San Francisco"
            salary="$120K"
            logo="/placeholder.svg?height=40&width=40"
          />
          <JobCard
            company="Google"
            position="Frontend Developer"
            location="New York"
            salary="$110K"
            logo="/placeholder.svg?height=40&width=40"
          />
          <JobCard
            company="Apple"
            position="UX Engineer"
            location="Cupertino"
            salary="$125K"
            logo="/placeholder.svg?height=40&width=40"
          />
          <JobCard
            company="Shopify"
            position="Marketing Officer"
            location="Remote"
            salary="$95K"
            logo="/placeholder.svg?height=40&width=40"
          />
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <JobCard
            company="Microsoft"
            position="Frontend Developer"
            location="Seattle"
            salary="$105K"
            logo="/placeholder.svg?height=40&width=40"
          />
          <JobCard
            company="Facebook"
            position="Sr. UI Designer"
            location="Remote"
            salary="$140K"
            logo="/placeholder.svg?height=40&width=40"
          />
          <JobCard
            company="Twitter"
            position="Product Designer"
            location="San Francisco"
            salary="$115K"
            logo="/placeholder.svg?height=40&width=40"
          />
          <JobCard
            company="Instagram"
            position="Frontend Developer"
            location="New York"
            salary="$100K"
            logo="/placeholder.svg?height=40&width=40"
          />
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" className="mt-4">
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
}