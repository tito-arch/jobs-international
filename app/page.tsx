import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Search,
  MapPin,
  CheckCircle,
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
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 py-16 md:py-24 overflow-hidden min-h-[600px]">
          <div className="container mx-auto px-4 text-center relative z-10">
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
                <Button className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white cursor-pointer">Search</Button>
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
              <Button variant="outline" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white cursor-pointer mt-4">
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

        <section id="about-us" className="py-16 bg-gradient-to-br from-white to-pink-50">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
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
      <div className="mt-8 space-y-6">
        <div className="flex flex-col items-center">
          <CheckCircle className="h-8 w-8 text-pink-500 mb-2" />
          <h3 className="font-semibold text-lg">Expert Recruiters</h3>
          <p className="text-gray-600">
            Our team works closely with clients to understand their unique needs.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <CheckCircle className="h-8 w-8 text-pink-500 mb-2" />
          <h3 className="font-semibold text-lg">Perfect Matches</h3>
          <p className="text-gray-600">
            We find candidates who are qualified and fit the organizational culture.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <CheckCircle className="h-8 w-8 text-pink-500 mb-2" />
          <h3 className="font-semibold text-lg">Global Reach</h3>
          <p className="text-gray-600">Connect with opportunities and talent from around the world.</p>
        </div>
      </div>
      <div className="mt-8">
      </div>
    </div>
  </div>
</section>

        <IndustrySlider />

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
                  src="/career-image.jpg"
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
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Job?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Join thousands of professionals who have found their perfect career match with Jobs International
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                <Link href="/popular-jobs">Browse Jobs</Link>
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

      <Footer />
    </div>
  );
}