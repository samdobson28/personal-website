// page.tsx

import Image from "next/image";
import ExperienceProjectsCarousel from "./ExperienceProjectsCarousel"; // Import the custom carousel component

export default function Home() {
  return (
    <>
      <section
        id="about"
        className="hero-section section relative flex flex-col items-center text-center text-white"
      >
        <div className="absolute top-4 left-4 flex flex-col space-y-2 md:space-y-4 items-start">
          <a
            href="https://www.cs.columbia.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg">
              <Image
                src="/columbia.png"
                alt="Columbia CS"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span className="ml-2 text-gray-900 dark:text-white">
                Columbia CS + Math &apos;25
              </span>
            </div>
          </a>
          <a
            href="https://outintech.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg">
              <Image
                src="/OIT.png"
                alt="Out in Tech U '24"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span className="ml-2 text-gray-900 dark:text-white">
                Out in Tech U &apos;24
              </span>
            </div>
          </a>

          <a
            href="https://www.codepath.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg">
              <Image
                src="/codepath.png"
                alt="CodePath '23"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span className="ml-2 text-gray-900 dark:text-white">
                CodePath &apos;23
              </span>
            </div>
          </a>
        </div>

        <Image
          src="/profile.png"
          alt="Sam Dobson"
          width={200}
          height={200}
          className="profile-picture mb-6 border-4 border-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full"
        />
        <h2 className="section-title">Welcome!</h2>
        <p className="section-content max-w-3xl">
          👋 Hi! My name is Sam, and I’m a senior studying Computer Science and
          Math at Columbia University.
          <br />
          💻 I’m a full-stack developer with experience in startups, web,
          mobile, machine learning, and more.
          <br />
          🔍 I’m currently looking for 2025 new grad roles and/or summer 2025
          internships in SWE & PM.
          <br />
          🕺 In my free time, I dance on campus, cook, and take on other
          creative projects like sewing!
        </p>
      </section>

      <section
        id="portfolio"
        className="section bg-gradient-to-b from-bg-light to-secondary-color dark:from-bg-dark dark:to-primary-color"
      >
        <h2 className="section-title text-center">Portfolio</h2>
        <ExperienceProjectsCarousel />
      </section>

      <section id="skills" className="section text-center">
        <h2 className="section-title">Skills</h2>
        <ul className="list-disc pl-5 inline-block text-left">
          <li>
            Front-end: JavaScript, TypeScript, HTML, CSS, React, React Native,
            Swift, Angular.
          </li>
          <li>
            Data and Back-end: Java, Python, C, C++, Machine Learning, SQL,
            NoSQL, PostgreSQL, MongoDB, Django, Node.
          </li>
          <li>
            Fundamentals: DS/Algorithms, Unix/Linux, Web Development, Mobile
            Dev, Version Control & Git, Agile.
          </li>
          <li>(Ps, this website is React and Next in Typescript)</li>
        </ul>
      </section>

      <section id="contact" className="section text-center">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-content max-w-3xl mx-auto">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out via{" "}
          <a
            href="mailto:sedobson28@gmail.com"
            className="text-highlight underline"
          >
            email
          </a>
          , or connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/sam-dobson-url/"
            className="text-highlight underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </>
  );
}
