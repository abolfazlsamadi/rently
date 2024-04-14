import { useState, useEffect } from 'react';
import FilterContentSection from "./FilterContentSection";
import TopMainSwiper from "./TopMainSwiper";

const TopMain = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={scrollPosition === 0 ? "main-content__top-main" : "main-content__top-main top-main-scrolled"}>
      <TopMainSwiper />
      <FilterContentSection />
    </div>
  );
};

export default TopMain;
