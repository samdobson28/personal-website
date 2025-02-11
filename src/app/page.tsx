// page.tsx
"use client";

import Image from "next/image";
import WorkExperienceCarousel from "./WorkExperienceCarousel";
import ProjectsResearchCarousel from "./ProjectsResearchCarousel";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      <motion.section
        id="about"
        className="hero-section section relative flex flex-col items-center text-center text-white"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
      >
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
          🕺 In my free time, I enjoy participating in dance and performing arts
          on campus, writing, and other creative projects!
        </p>
      </motion.section>

      <motion.section
        id="work-experience"
        className="section bg-gradient-to-b from-bg-light to-secondary-color dark:from-bg-dark dark:to-primary-color"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="section-title text-center">Work Experience</h2>
        <WorkExperienceCarousel />
      </motion.section>

      <motion.section
        id="projects-research"
        className="section bg-gradient-to-b from-bg-light to-secondary-color dark:from-bg-dark dark:to-primary-color"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="section-title text-center">Projects & Research</h2>
        <ProjectsResearchCarousel />
      </motion.section>

      <motion.section
        id="skills"
        className="section text-center"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.8 }}
      >
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
      </motion.section>

      <motion.section
        id="contact"
        className="section text-center"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 1 }}
      >
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
      </motion.section>
    </>
  );
}
