"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  {
    url: "/paris.jpg",
    title: "Travel and Tourism Industry",
    subtitle: "Explore New Horizons",
    description:
      "Join the dynamic world of travel and tourism, connecting people with unforgettable experiences across the globe. From tour operations to destination management, help create memories that last a lifetime.",
  },
  {
    url: "/social-health.jpg",
    title: "Social Health Workers",
    subtitle: "Supporting Communities",
    description:
      "Make a meaningful difference in people's lives through social health work. Provide essential support, guidance, and advocacy for vulnerable populations while building stronger, more resilient communities.",
  },
  {
    url: "/medicalindustry.jpg",
    title: "Medical Industry",
    subtitle: "Advancing Healthcare",
    description:
      "Be at the forefront of healthcare innovation and patient care. From clinical practices to research and development, the medical industry offers rewarding careers dedicated to improving and saving lives.",
  },
  {
    url: "/informationtechnology.jpg",
    title: "Information Technology Industry",
    subtitle: "Powering Digital Transformation",
    description:
      "Shape the future through technological innovation. The IT industry offers diverse opportunities in software development, data science, cybersecurity, and digital infrastructure that drive progress across all sectors.",
  },
  {
    url: "/hospitality.jpg",
    title: "Hospitality",
    subtitle: "Creating Exceptional Experiences",
    description:
      "Excel in the art of service excellence through hotels, restaurants, and entertainment venues. The hospitality industry combines creativity and management to deliver unforgettable guest experiences worldwide.",
  },
  {
    url: "/factoryworkers.jpg",
    title: "Factory Workers",
    subtitle: "Manufacturing Excellence",
    description:
      "Power the production backbone of the global economy. Factory workers combine skilled craftsmanship with modern manufacturing techniques to create the products that shape our daily lives and drive economic growth.",
  },
  {
    url: "/constructionworkers.jpg",
    title: "Construction Workers",
    subtitle: "Building Tomorrow",
    description:
      "Transform skylines and create infrastructure that stands the test of time. Construction offers rewarding careers combining physical skill, technical knowledge, and teamwork to build the foundations of society.",
  },
];

const IndustrySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % industries.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Container for the shrunk images */}
      <div className="relative w-10/12 h-[500px] mx-auto rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url('${industries[currentIndex].url}')`,
                  transform: isTransitioning ? "scale(1.05)" : "scale(1)",
                  transition: "transform 1.5s ease-out",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 rounded-lg" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text positioned at bottom left */}
        <div className="absolute bottom-0 left-0 z-10 p-8 pb-12 w-full md:w-2/3 lg:w-1/2 text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-yellow-400"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {industries[currentIndex].title}
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl text-yellow-200"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {industries[currentIndex].subtitle}
              </motion.p>
              <motion.p
                className="text-base md:text-lg text-white max-w-2xl"
                style={{ fontFamily: "sans-serif", lineHeight: 1.5 }}
              >
                {industries[currentIndex].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default IndustrySlider;