export default function CompanyLogos() {
  const logos = [
    { name: 'Google', logo: 'Google' },
    { name: 'Facebook', logo: 'Facebook' },
    { name: 'Microsoft', logo: 'Microsoft' },
    { name: 'LinkedIn', logo: 'LinkedIn' },
    { name: 'Amazon', logo: 'Amazon' },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
      {logos.map((company) => (
        <div
          key={company.name}
          className="text-gray-300 text-2xl md:text-3xl font-light"
        >
          {company.logo}
        </div>
      ))}
    </div>
  );
}
