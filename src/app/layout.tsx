// layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import BackToTop from "./BackToTop";
import SpeedInsightsClient from "./SpeedInsightsClient";
import Providers from "./Providers";
import ThemeToggle from "./ThemeToggle";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Sam Dobson - Personal Website",
  description:
    "Welcome to the personal website of Sam Dobson, a Computer Science and Mathematics student at Columbia University.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Sam Dobson - Personal Website",
    description:
      "Welcome to the personal website of Sam Dobson, a Computer Science and Mathematics student at Columbia University.",
    url: "https://www.yourwebsite.com",
    siteName: "Sam Dobson Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 600,
        alt: "Sam Dobson",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${poppins.className} overflow-x-hidden bg-theme text-theme transition-colors duration-300`}
      >
        <Providers>
          <header className="bg-gradient p-6 shadow-md">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
              <h1 className="text-4xl font-extrabold text-white mb-4 md:mb-0">
                Sam Dobson
              </h1>
              <nav>
                <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                  {/* Dark/light toggle as the first nav item */}
                  <li>
                    <ThemeToggle />
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-white hover:underline text-sm md:text-base"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#work-experience"
                      className="text-white hover:underline text-sm md:text-base"
                    >
                      Work Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects-research"
                      className="text-white hover:underline text-sm md:text-base"
                    >
                      Projects & Research
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className="text-white hover:underline text-sm md:text-base"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-white hover:underline text-sm md:text-base"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/document/d/1ETUo9cUpL6WZE4nv2AcNEnX--b_Y-oqH/edit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline text-sm md:text-base"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="bg-gradient text-center text-white p-6 mt-12 shadow-inner">
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:sedobson28@gmail.com"
                aria-label="Email"
                className="footer-icon"
              >
                <Image
                  src="/email.png"
                  alt="Email Sam Dobson"
                  width={40}
                  height={40}
                  className="inline-block"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sam-dobson-url/"
                aria-label="LinkedIn"
                className="footer-icon"
              >
                <Image
                  src="/linkedin.png"
                  alt="Sam Dobson LinkedIn"
                  width={40}
                  height={40}
                  className="inline-block"
                />
              </a>
              <a
                href="https://github.com/samdobson28"
                aria-label="GitHub"
                className="footer-icon"
              >
                <Image
                  src="/github.png"
                  alt="Sam Dobson GitHub"
                  width={40}
                  height={40}
                  className="inline-block"
                />
              </a>
            </div>
            <p className="mt-4">&copy; 2024 Sam Dobson. All rights reserved.</p>
          </footer>
          <BackToTop />
          <Analytics />
          <SpeedInsightsClient />
        </Providers>
      </body>
    </html>
  );
}
