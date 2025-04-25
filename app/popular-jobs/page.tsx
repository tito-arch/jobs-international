// app/popular-jobs/page.tsx
import { Button } from '@/components/ui/button';
import JobCard from '@/components/JobCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PopularJobs() {
  return (
    <div className="min-h-screen py-16">
     <Header />
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
      <Footer />
    </div>
  );
}