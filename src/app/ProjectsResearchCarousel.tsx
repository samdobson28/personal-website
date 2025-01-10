"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProjectsResearchCarousel() {
  const slides = [
    {
      title: "Audio Deepfake Machine Learning Research",
      date: "September - December 2024",
      description:
        "Building models for detecting audio deepfakes in real-time, focusing on political speech alterations. Utilized contrastive learning and locality-sensitive hashing techniques.",
      image: "/audio-research.png",
      link: "https://drive.google.com/file/d/1PKyZJAOeeagtEHii7spqwbF8ou7x4ZB8/view?usp=sharing",
    },
    {
      title: "iOS App: Chorely",
      date: "September - December 2024",
      description:
        "Developed a chore management app using Swift, incorporating dynamic scheduling, reminders, and data persistence to streamline household task management.",
      image: "/chorely.png",
    },
    {
      title: "Quant Momentum Trading Bot",
      date: "January 2025",
      description:
        "Created an algorithmic trading bot to analyze and execute trades based on momentum signals, optimizing for efficiency and profitability in real-time markets.",
      image: "/trading-bot.png",
    },
    {
      title: "BARTER Online Marketplace (Hackathon Project)",
      date: "June 2023",
      description:
        "Engineered interactive map and chat services for users to drop pins, post queries, and connect with React, Firebase, and Google Maps API, targeting an 8M user base. Selected #1 Best Sustainability Winner Tech Together Hackathon.",
      image: "/barter.png",
      link: "https://devpost.com/software/barter-u7k5bs",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

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
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex flex-col md:flex-row items-center justify-center space-x-4 p-4"
          >
            {slide.link ? (
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row items-center justify-center w-full space-x-4"
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
                    alt={slide.title}
                    width={250}
                    height={250}
                    className="rounded-lg"
                  />
                </div>
              </a>
            ) : (
              <div className="flex flex-col md:flex-row items-center justify-center w-full space-x-4">
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
                    alt={slide.title}
                    width={250}
                    height={250}
                    className="rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-[10px] transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        &#8592;
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-[10px] transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        &#8594;
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
