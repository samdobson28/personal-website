// ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until after mounting to avoid hydration mismatches.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow hover:scale-105 transition-transform duration-200"
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
