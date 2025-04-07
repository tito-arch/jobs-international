import {
  Briefcase,
  PenTool,
  Users,
  BarChart,
  PieChart,
  HeartPulse,
} from 'lucide-react';

export default function JobCategories() {
  const categories = [
    {
      title: 'Marketing & Communication',
      count: '150 Jobs Available',
      icon: <BarChart className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Design & Development',
      count: '250 Jobs Available',
      icon: <PenTool className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Human Research & Development',
      count: '100 Jobs Available',
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Business & Consulting',
      count: '120 Jobs Available',
      icon: <Briefcase className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Finance Management',
      count: '80 Jobs Available',
      icon: <PieChart className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Customer Support Care',
      count: '90 Jobs Available',
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg border shadow-sm flex items-center"
        >
          <div className="mr-4 bg-primary/10 p-3 rounded-full">
            {category.icon}
          </div>
          <div className="text-left">
            <h3 className="font-bold">{category.title}</h3>
            <p className="text-sm text-gray-500">{category.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
