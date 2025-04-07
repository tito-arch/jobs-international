import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin } from 'lucide-react';
import JobCard from '@/components/JobCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import CompanyLogos from '@/components/CompanyLogos';
import JobCategories from '@/components/JobCategories';
import NewsletterSignup from '@/components/NewsLetterSignup';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xl font-bold text-white">JI</span>
            </div>
            <span className="text-xl font-bold">JOBS INTERNATIONAL</span>
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 py-16 md:py-24 overflow-hidden min-h-[600px]">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
              10,500 Job Listed Here!
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Your Dream Job Is Waiting
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-2 p-2 bg-white rounded-lg shadow-md">
                <div className="flex-1 flex items-center px-3 border rounded-md">
                  <Search className="h-5 w-5 text-gray-400 mr-2" />
                  <Input
                    type="text"
                    placeholder="Job Title or Keywords"
                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="flex-1 flex items-center px-3 border rounded-md">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                  <Input
                    type="text"
                    placeholder="City or Zip Code"
                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Button className="w-full md:w-auto">Search</Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0">
            <div className="w-full h-full">
              <Image
                src="/jobs-international-2025-travel.png"
                alt="Jobs International - Global job opportunities"
                layout="fill"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Popular Jobs Section */}
        <section className="py-16">
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
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">
              Reviews Of People Who
            </h2>
            <h2 className="text-3xl font-bold text-center mb-12">
              Have Found Job Through Jobs International
            </h2>
            <TestimonialSlider />
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <NewsletterSignup />
          </div>
        </section>

        {/* Partner Companies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Powering The World&apos;s Most Advanced Companies
            </h2>
            <CompanyLogos />
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-2">One Platform</h2>
            <h2 className="text-4xl font-bold mb-12">Many Solutions</h2>
            <JobCategories />
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xl font-bold text-white">JI</span>
                </div>
                <span className="text-xl font-bold">JOBS INTERNATIONAL</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Find & Hire Top Talent From All Over The World In One Platform
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-primary">
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary">
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary">
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary">
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
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-primary"
                  >
                    Find Job
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-primary"
                  >
                    Find Companies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-primary"
                  >
                    Career Advice
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-primary"
                  >
                    Company A-Z
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">About Jobs International</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-primary"
                  >
                    Working For Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-primary"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Terms</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-primary"
                  >
                    Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-primary"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-primary"
                  >
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-primary"
                  >
                    Site Map
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Jobs International. All Rights
              Reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-primary"
              >
                Login
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-primary"
              >
                Sign Up
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-primary"
              >
                English
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
