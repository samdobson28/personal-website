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
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg">
            <Image
              src="/columbia.png"
              alt="Columbia CS"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="ml-2 text-gray-900 dark:text-white">
              Columbia CS + Math '25
            </span>
          </div>
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg">
            <Image
              src="/OIT.png"
              alt="Out in Tech U '24"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="ml-2 text-gray-900 dark:text-white">
              Out in Tech U '24
            </span>
          </div>
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg">
            <Image
              src="/codepath.png"
              alt="CodePath '23"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="ml-2 text-gray-900 dark:text-white">
              CodePath '23
            </span>
          </div>
        </div>

        {/* Profile Picture with Gradient Border */}
        <div className="rounded-full p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          <div className="rounded-full p-1 bg-white dark:bg-gray-900">
            <Image
              src="/profile.png"
              alt="Sam Dobson"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
        </div>

        <h2 className="section-title mt-6 text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient">
          Welcome!
        </h2>
        <p className="section-content max-w-3xl">
          I’m Sam Dobson, a senior at Columbia University studying Computer
          Science and Mathematics. I’m passionate about software development,
          machine learning, and creating impactful solutions. I aim to blend
          creativity with technology to produce innovative applications that
          make a difference.
        </p>
      </section>

      <section
        id="portfolio"
        className="section bg-gradient-to-b from-bg-light to-secondary-color dark:from-bg-dark dark:to-primary-color"
      >
        <h2 className="section-title text-center text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient">
          Portfolio
        </h2>
        <ExperienceProjectsCarousel />
      </section>

      <section id="skills" className="section text-center">
        <h2 className="section-title text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient">
          Skills
        </h2>
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
          <li>(Ps, this website is React and Next in TypeScript)</li>
        </ul>
      </section>

      <section id="contact" className="section text-center">
        <h2 className="section-title text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient">
          Contact Me
        </h2>
        <p className="section-content max-w-3xl mx-auto">
          I’m always open to new opportunities and collaborations. Feel free to
          reach out via{" "}
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
