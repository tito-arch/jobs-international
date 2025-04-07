import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface JobCardProps {
  company: string;
  position: string;
  location: string;
  salary: string;
  logo: string;
}

export default function JobCard({
  company,
  position,
  location,
  salary,
  logo,
}: JobCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 relative mr-3">
          <Image
            src={logo || '/placeholder.svg'}
            alt={`${company} logo`}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="font-semibold text-sm">{company}</h3>
        </div>
      </div>
      <h3 className="font-bold mb-1">{position}</h3>
      <p className="text-sm text-gray-500 mb-3">{location}</p>
      <p className="text-sm mb-4">
        You will be expected to meet the Company&apos;s KPIs in Strategy
      </p>
      <div className="flex items-center justify-between">
        <span className="font-bold">{salary}</span>
        <Button variant="outline" size="sm" className="text-xs">
          Apply
        </Button>
      </div>
    </div>
  );
}
