import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Carousel({ slidesData, autoSlide = false, autoSlideInterval = 3000 }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const prev = () => {
    setCurrentSlide((currentSlide) => (currentSlide === 0 ? slidesData.length - 1 : currentSlide - 1));
  };

  const next = () => {
    setCurrentSlide((currentSlide) => (currentSlide === slidesData.length - 1 ? 0 : currentSlide + 1));
  };

  React.useEffect(() => {
    let intervalId;

    if (autoSlide) {
      intervalId = setInterval(() => {
        setCurrentSlide((currentSlide) => (currentSlide === slidesData.length - 1 ? 0 : currentSlide + 1));
      }, autoSlideInterval);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [autoSlide, autoSlideInterval, slidesData.length]);

  const translateValue = -currentSlide * 100;

  return (
    <div className="overflow-hidden relative w-full">
      <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(${translateValue}%)` }}>
        {slidesData.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full px-4">
            <div className="w-full flex flex-col space-y-6 items-center bg-white rounded-[1.25rem] shadow-lg py-10 px-10">
              <div className="flex flex-col space-y-3 items-center">
                <img src={slide.image} alt={slide.title} className="h-[12.5rem] w-[12.5rem] rounded-full" />
                <p className="text-[1.125rem] font-bold leading-6 text-[#222]">{slide.title}</p>
              </div>
              <p className="text-[.875rem] leading-5 text-center font-light">{slide.description}</p>
              <div className="flex flex-row items-center space-x-3">
                <h6 className="text-[1rem] font-medium text-[#860063] leading-5">Read More</h6>
                <div className="h-5 w-5 flex items-center justify-center rounded-full bg-[#860063]">
                  <ChevronRightIcon className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-[45%] -translate-x-1/2 flex flex-row items-center space-x-5">
        <button className="bg-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={prev}>
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
        <button className="bg-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={next}>
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}
