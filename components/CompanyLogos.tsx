export default function CompanyLogos() {
  const logos = [
    { name: 'Google', logo: 'Google' },
    { name: 'Calcurious', logo: 'Calcurious' },
    { name: 'Microsoft', logo: 'Microsoft' },
    { name: 'Amazon', logo: 'Amazon' },
    { name: 'Bunnie ABC', logo: 'Bunnie abc' },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
      {logos.map((company) => (
        <div
          key={company.name}
          className="text-gray-600 text-2xl md:text-3xl font-light"
        >
          {company.logo}
        </div>
      ))}
    </div>
  );
}
