import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        h-12 w-12 rounded-full
        bg-red-600 text-white shadow-xl
        flex items-center justify-center
        transition-all duration-300
        hover:bg-red-700 hover:-translate-y-1
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
      `}
    >
      <Icon icon="mdi:arrow-up" className="h-6 w-6" />
    </button>
  );
}
