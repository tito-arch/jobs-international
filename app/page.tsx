// app/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Search,
  MapPin,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Award,
  Briefcase,
  Users,
  Lightbulb,
} from 'lucide-react';
import TestimonialSlider from '@/components/TestimonialSlider';
import CompanyLogos from '@/components/CompanyLogos';
import JobCategories from '@/components/JobCategories';
import NewsletterSignup from '@/components/NewsLetterSignup';
import Image from 'next/image';
import IndustrySlider from '@/components/IndustrySlider';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
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
        <section className="relative bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 py-16 md:py-24 overflow-hidden min-h-[600px]">
          <div className="container mx-auto px-4 text-center relative z-10">
            {/* <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
              10,500 Job Listed Here!
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Your Dream Job Is Waiting
            </p> */}
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
          <div className="absolute inset-0 bg-white">
  <div className="z h-full flex justify-center">
    <div className="relative w-[90%] h-full">
      <Image
        src="/jobs-international-2025-travel.png"
        alt="Jobs International - Global job opportunities"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  </div>
</div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Explore Popular Jobs</h2>
            <Link href="/popular-jobs">
              <Button variant="outline" className="mt-4">
                View All Popular Jobs
              </Button>
            </Link>
          </div>
        </section>

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

        <section className="py-12">
          <div className="container mx-auto px-4">
            <NewsletterSignup />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
            Powering The World&apos;s Most Advanced Companies
            </h2>
            <CompanyLogos />
          </div>
        </section>

        {/* About Us Section */}
        <section id="about-us" className="py-16 bg-gradient-to-br from-white to-pink-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-200 rounded-full opacity-50"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full opacity-50"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/about-us-image.png"
                      alt="Jobs International Team"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
                  About Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Connecting Talent With <span className="text-pink-500">Opportunity</span>
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>At Jobs International, we connect talented professionals with dynamic companies worldwide.</p>
                  <p>
                    Our recruitment agency provides tailored staffing solutions that drive success for both job seekers
                    and employers.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Expert Recruiters</h3>
                      <p className="text-gray-600">
                        Our team works closely with clients to understand their unique needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Perfect Matches</h3>
                      <p className="text-gray-600">
                        We find candidates who are qualified and fit the organizational culture.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Global Reach</h3>
                      <p className="text-gray-600">Connect with opportunities and talent from around the world.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  >
                    <Link href="/remote-jobs" className="flex items-center">
                      View Available Jobs <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <IndustrySlider />

        {/* Our Values Section */}
        <section className="py-16 bg-gradient-to-br from-pink-500 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/values-bg.png')] opacity-10 bg-cover bg-center"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="max-w-2xl mx-auto">The principles that guide everything we do at Jobs International</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm border-0 shadow-lg hover:bg-white/20 transition-all p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-white/80">We operate with transparency and honesty in everything we do.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border-0 shadow-lg hover:bg-white/20 transition-all p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-white/80">We strive to exceed expectations by offering outstanding service.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border-0 shadow-lg hover:bg-white/20 transition-all p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-white/80">
                  We believe in the power of working together to achieve mutual success.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border-0 shadow-lg hover:bg-white/20 transition-all p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-white/80">
                  We embrace creative solutions to meet evolving needs of clients and candidates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Advice Section */}
        <section id="career-advice" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
                Career Advice
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Build Your <span className="text-pink-500">Dream Career</span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Expert tips to help you stand out and make the most of your job search
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/career-image.png"
                  alt="Career Development"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-100">
                  <h3 className="text-xl font-bold mb-3 flex items-center text-pink-700">
                    <span className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      1
                    </span>
                    Know Your Strengths and Goals
                  </h3>
                  <p className="text-gray-700">
                    Assess your skills and values to target roles that align with your strengths and aspirations.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-100">
                  <h3 className="text-xl font-bold mb-3 flex items-center text-pink-700">
                    <span className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      2
                    </span>
                    Tailor Your Resume
                  </h3>
                  <p className="text-gray-700">
                    Customize your resume for each application to highlight relevant skills and experience.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-100">
                  <h3 className="text-xl font-bold mb-3 flex items-center text-pink-700">
                    <span className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      3
                    </span>
                    Network Effectively
                  </h3>
                  <p className="text-gray-700">
                    Build meaningful connections that can open doors to hidden opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-pink-100 hover:shadow-md transition-all p-6">
                <div className="bg-pink-100 text-pink-600 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold">4</span>
                </div>
                <h3 className="font-bold mb-2">Prepare for Interviews</h3>
                <p className="text-gray-600 text-sm">Research the company and practice common interview questions.</p>
              </div>
              <div className="border border-pink-100 hover:shadow-md transition-all p-6">
                <div className="bg-pink-100 text-pink-600 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold">5</span>
                </div>
                <h3 className="font-bold mb-2">Stay Positive</h3>
                <p className="text-gray-600 text-sm">
                Keep refining your approach and don&apos;t be discouraged by setbacks.
                </p>
              </div>
              <div className="border border-pink-100 hover:shadow-md transition-all p-6">
                <div className="bg-pink-100 text-pink-600 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold">6</span>
                </div>
                <h3 className="font-bold mb-2">Be Open to Opportunities</h3>
                <p className="text-gray-600 text-sm">Explore new roles that may offer exciting growth potential.</p>
              </div>
              <div className="border border-pink-100 hover:shadow-md transition-all p-6">
                <div className="bg-pink-100 text-pink-600 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold">7</span>
                </div>
                <h3 className="font-bold mb-2">Keep Learning</h3>
                <p className="text-gray-600 text-sm">Invest in upskilling to enhance your qualifications.</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
              >
                <Link href="/remote-jobs" className="flex items-center">
                  Browse Available Jobs <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Job?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Join thousands of professionals who have found their perfect career match with Jobs International
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                <Link href="/remote-jobs">Browse Jobs</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link href="#">For Employers</Link>
              </Button>
            </div>
          </div>
        </section>

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
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Find Job
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Find Companies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Career Advice
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Company A-Z
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">About Jobs International</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Working For Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Terms</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    Site Map
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Jobs International. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                Login
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                Sign Up
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                English
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}