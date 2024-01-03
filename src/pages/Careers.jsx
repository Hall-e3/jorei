import React from "react";
import { Button, CareerComponent, Footer, Hero, HeroBottom, ServiceProducts } from "../components";
import { cotton_american, featured3, featured4, featured5, grow_source, image10, image2, image3, image4, our_organization, p4 } from "../constants";
import { ChevronDownIcon, ChevronRightIcon, ShareIcon } from "@heroicons/react/24/solid";
import { news, slidesData } from "../utils/data";

export default function Careers() {
  const [one, setOne] = React.useState(false);
  const [two, setTwo] = React.useState(false);
  const [three, setThree] = React.useState(false);
  const [four, setFour] = React.useState(false);

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slidesData.length) % slidesData.length);
  };

  React.useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  const translateValue = -currentSlide * 100;

  return (
    <div className="h-screen w-full">
      <Hero />
      <HeroBottom
        title="Creating Opportunities toMake a Difference"
        button={true}
        buttonStyle="flex bg-[#f78c2a] rounded-md h-[2.625rem] text-center py-[.625rem] px-[2.8125rem] md:px-6 md:py- text-[#fff]"
        buttonText="Down Fact sheet"
        componentStyle="color_black"
        image={image4}
      />
      <div className="py-20 px-[30px] md:px-0">
        <div className="max-w-[1260px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0 md:gap-20">
            <div>
              <h3 className="text-title-md md:text-title-xl font-semibold text-[#2e2d2c] leading-tight">
                Our challenge to you is to
                <span className="text-[#ff7000]"> imagine the extraordinary.</span>
              </h3>
            </div>
            <div className="flex flex-col space-y-8">
              <p className="text-[16px] leading-1 text-[#2e2d2c]">
                We’re a Purpose-led organisation with a clear ambition to help customers, farmers, and communities prosper sustainably.
              </p>
              <p className="text-[16px] leading-1 text-[#2e2d2c]">
                We seek to empower you to imagine extraordinary answers to the world’s everyday food supply challenges, fulfilling your own ambitions and
                positively influencing our global business and the world around us.
              </p>
              <p className="text-[16px] leading-1 text-[#2e2d2c]">
                Because of the scale of the challenge, we encourage colleagues to take ownership of decisions and explore new ways of doing things.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f6f8] pt-8 pb-15">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4">
            <div className="md:flex-none">
              <div className="border-2 border-white rounded-full p-4">
                <img src={image2} alt="image2" className="h-[20.5rem] w-[20.5rem]" />
              </div>
            </div>
            <div className="md:flex-1 flex flex-col space-y-4 md:space-y-6 md:items-end pl-40">
              <h1 className="text-center md:text-end text-title-md md:text-title-xl font-bold leading-10 md:leading-tight">Who are we looking for?</h1>
              <div className="flex flex-col space-y-6">
                <p className="text-center md:text-start text-[16px]">
                  We ask, what else could this be? At every level we use our imagination and expertise to find more creative, productive and sustainable ways of
                  doing things.We don't just accept what's put in front of us. At <span>Ofi</span> we believe in raw potential of nature, ingredients, people,
                  technology,ideas.
                </p>
                <Button
                  text="Job Opportunities"
                  buttonStyle="flex bg-[#860063] rounded-[1.875rem] h-[2.625rem] w-[30%] text-center  justify-center py-[.625rem] px-[2.8125rem] md:px-6 md:py- text-[#fff]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 pb-15">
        <div className="max-w-[1260px] mx-auto">
          <div className="hidden w-full md:flex flex-row justify-center space-x-5 items-center ">
            {slidesData.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col space-y-6 items-center justify-center bg-white rounded-lg shadow-lg py-8 px-4 h-[30.25rem] w-[30rem] group transition duration-300">
                <div className="flex flex-col space-y-3 items-center">
                  <img src={item.image} alt={item.title} className="h-[12.5rem] w-[12.5rem] rounded-full group-hover:hidden" />
                  <p className="text-[16px] font-bold leading-6 text-[#222]">{item.title}</p>
                </div>
                <p className="text-[15px] leading-5 text-center font-light">{item.description.slice(0, 70)}</p>

                <div className="flex flex-row items-center space-x-3">
                  <h6 className="text-[15px] font-medium text-[#860063] leading-5">Read More</h6>
                  <div className="h-4 w-4 flex items-center justify-center rounded-full bg-[#860063]">
                    <ChevronRightIcon className="h-3 w-3 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#f8f6f8] pt-8 pb-15">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4">
            <div className="md:flex-1 flex flex-col space-y-4 md:space-y-6 md:items-start md:pr-40">
              <h1 className="text-center md:text-start text-title-md md:text-title-xl font-bold leading-10 md:leading-tight">Find your place at Jorei</h1>
              <div className="flex flex-col space-y-6">
                <p className="text-center md:text-start  text-[16px]">
                  We ask, what else could this be? At every level we use our imagination and expertise to find more creative, productive and sustainable ways of
                  doing things.We don't just accept what's put in front of us. At <span>Ofi</span> we believe in raw potential of nature, ingredients, people,
                  technology,ideas.
                </p>
                <Button
                  text="Job Opportunities"
                  buttonStyle="flex bg-[#860063] rounded-[1.875rem] h-[2.625rem] w-[30%] text-center  justify-center py-[.625rem] px-[2.8125rem] md:px-6 md:py- text-[#fff]"
                />
              </div>
            </div>
            <div className="md:flex-none">
              <div className="border-2 border-white rounded-full p-4">
                <img src={image2} alt="image2" className="h-[20.5rem] w-[20.5rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 md:py-20 relative ">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <div className="bg-[#f78c2a] h-[.375rem] w-[7.5rem] z-1" />
            </div>
            <div className="flex flex-col items-center space-y-4 md:space-y-10 ">
              <h5 className="font-bold text-title-md md:text-title-xl leading-8 text-center pt-10">Read ofi news</h5>
              <div className="w-full md:hidden">
                <div className="overflow-hidden w-full">
                  <div className="flex transition-transform ease-in-out duration-500 py-5" style={{ transform: `translateX(${translateValue}%)` }}>
                    {news.map((slide, index) => (
                      <div key={index} className="flex-shrink-0 w-full px-6">
                        <div className="flex flex-col space-y-6 items-center bg-white rounded-[1.25rem] shadow-lg">
                          <img src={slide.image} alt="mid1" className="rounded-tl-[1.25rem] rounded-tr-[1.25rem] h-[21.375rem] w-[100%] object-cover" />

                          <div className="w-full flex flex-row items-center justify-between px-6">
                            <Button text="Articles" buttonStyle="flex bg-[#860063] rounded-[1.875rem] text-[16px]  text-center px-6 py-2 text-[#fff]" />
                            <p className="text-[.85rem] font-medium text-[#860063] leading-5 text-center">{slide.date}</p>
                          </div>
                          <div className="flex flex-col space-y-5 px-6">
                            <h6 className="text-[17px] font-bold leading-5">{slide.title}</h6>
                            <p className="text-[16px] font-normal leading-6 text-[#4a4949]">{slide.description}</p>
                          </div>
                          <div className="w-full flex flex-row items-center justify-between px-6 pb-3">
                            <h6 className="text-[1rem] font-medium text-[#860063] leading-5 text-center">Read More</h6>
                            <div className="h-12 w-12 flex items-center justify-center rounded-full shadow-lg">
                              <ShareIcon className="w-7 h-7" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-18 md:bottom-8 left-[50%] -translate-x-1/2 flex flex-row items-center space-x-5">
                    <button
                      className="bg-white border border-[#860063] h-4 w-4 flex items-center justify-center rounded-full"
                      onClick={goToPreviousSlide}></button>
                    <button className="bg-white border border-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={goToNextSlide}></button>
                    <button className="bg-white border border-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={goToNextSlide}></button>
                  </div>
                </div>
              </div>
              <div className="hidden w-full md:flex flex-row justify-evenly space-x-5 items-center">
                {news.map((item) => (
                  <div key={item.id} className="flex flex-col space-y-6 items-center bg-white rounded-[1.25rem] shadow-lg">
                    <img src={item.image} alt="mid1" className="rounded-tl-[1.25rem] rounded-tr-[1.25rem] h-[21.375rem] w-[100%] object-cover" />

                    <div className="flex flex-col space-y-6 items-center px-6 md:px-4">
                      <div className="w-full flex flex-row items-center justify-between px-6">
                        <Button text="Articles" buttonStyle="flex bg-[#860063] text-[14px] rounded-[1.875rem]  text-center px-6 py-2 text-[#fff]" />
                        <p className="text-[14px] font-medium text-[#860063] leading-5 text-center">{item.date}</p>
                      </div>
                      <div className="flex flex-col space-y-5 px-6">
                        <h6 className="text-[16px] font-bold leading-5">{item.title}</h6>
                        <p className="text-[15px] font-normal leading-6 text-[#4a4949]">{item.description.slice(0, 100)}</p>
                      </div>
                      <div className="w-full flex flex-row items-center justify-between px-6 pb-3">
                        <h6 className="text-[15px] font-medium text-[#860063] leading-5 text-center">Read More</h6>
                        <div className="h-9 w-9 flex items-center justify-center rounded-full shadow-lg">
                          <ShareIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                text="Read more news"
                buttonStyle="flex bg-[#860063] rounded-[1.875rem] h-[2.625rem] text-center py-[.625rem] px-[2.8125rem] md:px-6 md:py- text-[#fff]"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
