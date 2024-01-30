import { useState, useEffect } from "react";

const useSlider = (initialSlide, slidesLength) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesLength);
    }, 230000);

    return () => clearInterval(interval);
  }, [slidesLength]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return { currentSlide, handleDotClick };
};

export default useSlider;
