import { useState, useEffect } from "react";

export const useScrollDebounce = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const percent = (scrollTop / scrollHeight) * 100;

      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }

      const newTimeoutId = setTimeout(() => {
        setScrollPercentage(percent);
      }, 500);

      setTimeoutId(newTimeoutId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return scrollPercentage;
};
