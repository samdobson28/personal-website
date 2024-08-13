import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'button-hover-color': '#FFB347',  // Define this color in the theme
        'text-dark': '#1F2937',
        'text-light': '#F1F5F9',
        'primary-color': '#007ACC',
        'secondary-color': '#83CDFF',
        'accent-color': '#FFD700',
        'bg-light': '#F8FAFC',
        'bg-dark': '#1E293B',
      },
    },
  },
  plugins: [],
};

export default config;
