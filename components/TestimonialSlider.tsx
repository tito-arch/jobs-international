'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Nathan Jennings',
    position: 'Product Designer at Microsoft',
    avatar: '/placeholder.svg?height=60&width=60',
    quote:
      '"Truly, Jobs International Is The Best Platform For Not Any Kind Of Job, Especially Their Support Was Awesome. They Have Tried To Level Best To Give Support Of New Candidates."',
  },
  {
    id: 2,
    name: 'Sarah Thompson',
    position: 'Frontend Developer at Google',
    avatar: '/placeholder.svg?height=60&width=60',
    quote:
      '"Jobs International helped me find my dream job in just two weeks! Their platform is intuitive and the job recommendations were spot on with my skills and experience."',
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    position: 'UX Designer at Apple',
    avatar: '/placeholder.svg?height=60&width=60',
    quote:
      '"The career advice section was invaluable during my job search. The personalized support from the Jobs International team made all the difference in landing my current position."',
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col items-center text-center">
          <div className="h-16 w-16 relative mb-4">
            <Image
              src={testimonials[currentIndex].avatar || '/placeholder.svg'}
              alt={testimonials[currentIndex].name}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h3 className="font-bold text-lg">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            {testimonials[currentIndex].position}
          </p>
          <p className="text-gray-700 italic mb-4">
            {testimonials[currentIndex].quote}
          </p>
          <div className="flex justify-center">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#FFD700"
                  stroke="#FFD700"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
