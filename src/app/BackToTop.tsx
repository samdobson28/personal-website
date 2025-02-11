// BackToTop.tsx
"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /*************  ✨ Codeium Command ⭐  *************/
    /**
     * Checks if the user has scrolled past 300px from the top.
     * Updates the `visible` state with the result.
     */
    /******  582ba4b3-9466-4e89-8878-16377a13b612  *******/ const handleScroll =
      () => {
        setVisible(window.pageYOffset > 300);
      };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50"
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}
