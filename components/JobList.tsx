import { Job } from '@/app/types/types';

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <div className="grid gap-6">
      {jobs.map((job) => (
        <div key={job.slug} className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold">{job.title}</h2>
          <p className="text-gray-600">{job.company_name}</p>
          <p className="text-gray-600">{job.location}</p>
          <p className="text-sm text-gray-500">
            {job.remote ? 'Remote' : 'On-site'}
            {job.visa_sponsorship && ' | Visa Sponsorship Available'}
          </p>
          <p className="mt-2 text-gray-700 line-clamp-3">{job.description}</p>
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            Apply Now
          </a>
        </div>
      ))}
    </div>
  );
}
