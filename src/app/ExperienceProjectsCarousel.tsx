"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Founding Mobile Engineer, Fintech Startup",
    date: "Jan 2024 - Aug 2024 | New York, NY",
    description: (
      <>
        Created new iOS app from day 0 that returns a custom tax strategy so
        entrepreneurs can receive a maximum tax reduction.
        <br />
        Implement Plaid API financial monetization stack to connect with
        backend, Machine Learning, AWS and PostgreSQL, scaling startup towards
        $35M market size.
      </>
    ),
    image: "/xcode.png",
  },
  {
    title: "Software Development Intern, Series A Startup",
    date: "Jun 2024 - Aug 2024 | New York, NY",
    description:
      "Develop cross-platform, cross-device, real-time cloud engine with geolocation support, expand developer documentation, and implement thorough software testing in an Angular, Java, AWS stack.",
    image: "/angular.png",
  },
  {
    title: "ML-Powered Legal Workflow App",
    date: "May 2024 - Present",
    description:
      "Building legal document workflow mobile app using React Native and MongoDB as part of the Out in Tech U (OIT U) LGBTQ+ in Tech Mentorship program. App targets Big Law market.",
    image: "/legaleyes.png",
  },
  {
    title: "Hackathon Organizer & Head Developer",
    date: "",
    description:
      "Develop publicity website with React and Node in collaboration with 7 engineers and 5 designers to advertise Columbia's annual hackathon and tech festival, DevFest, attracting 600 expected hackers.",
    image: "/devfest.png",
  },
];

export default function ExperienceProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000); // 8 seconds per slide

    return () => clearInterval(interval);
  }, []); // Empty dependency array

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex flex-col md:flex-row items-center justify-center space-x-4 p-4"
          >
            <div className="w-full md:w-2/5 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {slide.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {slide.date}
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                {slide.description}
              </p>
            </div>
            <div className="w-full md:w-2/5 p-4 flex justify-center">
              <Image
                src={slide.image}
                alt="Experience Image"
                width={250}
                height={250}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-[10px] transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        &#8592; {/* Left Arrow Symbol */}
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-[10px] transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        &#8594; {/* Right Arrow Symbol */}
      </button>

      <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-2 py-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-blue-500"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
