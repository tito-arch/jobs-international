'use client';

import { useState, useEffect } from 'react';
import { fetchJobs } from '@/app/lib/api';
import { ApiResponse, Job } from '@/app/types/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import DOMPurify from 'dompurify';
import HomeLayout from '../layouts/home-layout';
export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [page, setPage] = useState<number>(1);
  const [meta, setMeta] = useState<ApiResponse['meta']>({
    current_page: 1,
    from: 0,
    last_page: 1,
    per_page: 0,
    to: 0,
    total: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showList, setShowList] = useState<boolean>(true); // Toggle for small devices

  // Filter states
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [remoteOnly, setRemoteOnly] = useState<boolean>(false);
  const [visaSponsorship, setVisaSponsorship] = useState<boolean>(false);
  const [location, setLocation] = useState<string>('');

  // Fetch jobs on page change
  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      setError(null);
      const response = await fetchJobs(page);
      // Deduplicate jobs based on slug
      const uniqueJobs = Array.from(
        new Map(response.data.map((job) => [job.slug, job])).values()
      );
      setJobs(uniqueJobs);
      setMeta(response.meta);
      setLoading(false);
      // Select the first job by default if none is selected
      if (uniqueJobs.length > 0 && !selectedJob) {
        setSelectedJob(uniqueJobs[0]);
      }
    };
    loadJobs();
  }, [page]);

  // Apply filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      searchTerm === '' ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRemote = !remoteOnly || job.remote;
    const matchesVisa = !visaSponsorship || job.visa_sponsorship;
    const matchesLocation =
      location === '' ||
      job.location.toLowerCase().includes(location.toLowerCase());
    return matchesSearch && matchesRemote && matchesVisa && matchesLocation;
  });

  // Update selected job when filters change
  useEffect(() => {
    if (
      filteredJobs.length > 0 &&
      (!selectedJob || !filteredJobs.includes(selectedJob))
    ) {
      setSelectedJob(filteredJobs[0]);
    } else if (filteredJobs.length === 0) {
      setSelectedJob(null);
    }
  }, [filteredJobs, selectedJob]);

  // Function to parse job title and extract gender notation
  const parseJobTitle = (
    title: string
  ): { cleanTitle: string; inclusivityTag: string | null } => {
    const genderNotations = /\((f\/m\/d|H\/F|M\/F)\)/i; // Match (f/m/d), (H/F), (M/F)
    const match = title.match(genderNotations);
    if (match) {
      return {
        cleanTitle: title.replace(genderNotations, '').trim(),
        inclusivityTag: 'Open to All Genders',
      };
    }
    return { cleanTitle: title, inclusivityTag: null };
  };

  return (
    <HomeLayout>
      <div className="min-h-screen mt-7">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center justify-center">
            <div className="flex-1 max-w-xs">
              <Input
                type="text"
                placeholder="Search for Next.js jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                checked={remoteOnly}
                onChange={(e) => setRemoteOnly(e.target.checked)}
                className="text-purple-500"
              />
              Remote Only
            </label>
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                checked={visaSponsorship}
                onChange={(e) => setVisaSponsorship(e.target.checked)}
                className="text-purple-500"
              />
              Visa Sponsorship
            </label>
            <div className="flex-1 max-w-xs">
              <Input
                type="text"
                placeholder="Filter by location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Layout */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left: Job List (Scrollable) */}
            <div
              className={`h-[90vh] w-full md:w-1/3 bg-white rounded-lg border border-gray-200 shadow-md flex flex-col overflow-hidden ${
                showList ? 'block' : 'hidden md:block'
              }`}
            >
              <div className="p-4 flex-1 overflow-y-auto">
                {loading && <p className="text-gray-600">Loading jobs...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {!loading && filteredJobs.length === 0 && (
                  <p className="text-gray-600">
                    No jobs found matching your criteria.
                  </p>
                )}
                {!loading &&
                  filteredJobs.map((job, index) => {
                    const { cleanTitle, inclusivityTag } = parseJobTitle(
                      job.title
                    );
                    // Use a combination of slug and index to ensure unique keys
                    const uniqueKey = `${job.slug}-${index}`;
                    return (
                      <div
                        key={uniqueKey}
                        onClick={() => {
                          setSelectedJob(job);
                          setShowList(false); // Switch to details view on small devices
                        }}
                        className={`p-4 mb-2 rounded-lg cursor-pointer border ${
                          selectedJob?.slug === job.slug
                            ? 'bg-purple-600 border-purple-700 text-white'
                            : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-800'
                        }`}
                      >
                        <h2 className="text-lg font-semibold">{cleanTitle}</h2>
                        <p
                          className={
                            selectedJob?.slug === job.slug
                              ? 'text-gray-200'
                              : 'text-gray-600'
                          }
                        >
                          {job.company_name}
                        </p>
                        <p
                          className={
                            selectedJob?.slug === job.slug
                              ? 'text-gray-200'
                              : 'text-gray-600'
                          }
                        >
                          {job.location}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <p
                            className={`text-sm ${
                              selectedJob?.slug === job.slug
                                ? 'text-gray-300'
                                : 'text-gray-500'
                            }`}
                          >
                            {job.remote ? 'Remote' : 'On-site'}
                            {job.visa_sponsorship &&
                              ' | Visa Sponsorship Available'}
                          </p>
                          {inclusivityTag && (
                            <span
                              className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
                                selectedJob?.slug === job.slug
                                  ? 'bg-purple-700 text-white'
                                  : 'bg-purple-100 text-purple-700'
                              }`}
                            >
                              <Users className="h-4 w-4" />
                              {inclusivityTag}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Right: Job Description (Scrollable) */}
            <div
              className={`h-[90vh] w-full md:w-2/3 bg-white rounded-lg border border-gray-200 shadow-md flex flex-col overflow-hidden ${
                showList ? 'hidden md:flex' : 'flex'
              }`}
            >
              {selectedJob ? (
                <>
                  {/* Fixed Header Section */}
                  <div className="p-6 border-b border-gray-200">
                    {/* Back Button for Small Devices */}
                    <div className="md:hidden mb-4">
                      <Button
                        variant="outline"
                        onClick={() => setShowList(true)}
                        className="border-gray-300 text-gray-700 hover:bg-gray-100"
                      >
                        <ChevronLeft className="h-5 w-5 mr-2" />
                        Back to List
                      </Button>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {parseJobTitle(selectedJob.title).cleanTitle}
                    </h2>
                    <p className="text-gray-600 mb-1">
                      {selectedJob.company_name}
                    </p>
                    <p className="text-gray-600 mb-4">{selectedJob.location}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <a
                        href={selectedJob.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                      >
                        Apply now
                      </a>
                      {parseJobTitle(selectedJob.title).inclusivityTag && (
                        <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700 flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {parseJobTitle(selectedJob.title).inclusivityTag}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Scrollable Description */}
                  <div
                    className="p-6 flex-1 overflow-y-auto text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(selectedJob.description),
                    }}
                  />
                </>
              ) : (
                <div className="p-6 flex-1 overflow-y-auto">
                  <p className="text-gray-600">Select a job to view details.</p>
                </div>
              )}
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-between items-center">
            <Button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 disabled:text-gray-400"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Previous
            </Button>
            <span className="text-gray-700">
              Page {meta.current_page} of {meta.last_page}
            </span>
            <Button
              onClick={() => setPage((p) => p + 1)}
              disabled={page === meta.last_page}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 disabled:text-gray-400"
            >
              Next
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
