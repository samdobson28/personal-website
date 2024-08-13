import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Sam Dobson - Personal Website",
  description:
    "Welcome to the personal website of Sam Dobson, a Computer Science and Mathematics student at Columbia University.",
  icons: {
    icon: "/favicon.ico",
  },
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
    <html lang="en">
      <head></head>
      <body
        className={`${poppins.className} bg-bg-light dark:bg-bg-dark text-text-dark dark:text-text-light`}
      >
        <header className="bg-gradient p-6">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-extrabold text-white">Sam Dobson</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="#about" className="text-white hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-white hover:underline">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-white hover:underline">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/document/d/1ETUo9cUpL6WZE4nv2AcNEnX--b_Y-oqH/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gradient text-center text-white p-6 mt-12">
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
      </body>
    </html>
  );
}
