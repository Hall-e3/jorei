import React from "react";
import { Button, Carousel, Footer, Hero } from "../components";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { image2, image3 } from "../constants";
import { data, datas, goods, news, slides, slidesData } from "../utils/data";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [longText, setLongText] = React.useState(false);
  const [currentItem, setCurrentItem] = React.useState(null);
  const [current, setCurrent] = React.useState(goods[0].id);
  const [description, setDescription] = React.useState(goods[0].description);
  const navigate = useNavigate();
  const [image, setImage] = React.useState(goods[0].image);
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

  const handleMouseEnter = (itemId) => {
    setLongText(true);
    setCurrentItem(itemId);
  };

  const handleMouseLeave = () => {
    setLongText(false);
  };

  const isLongText = () => longText;

  const isCurrentItem = (itemId) => currentItem === itemId;

  const renderDescription = (description, isCurrent, isLong) => {
    return isCurrent ? (isLong ? description : description.slice(0, 70)) : description.slice(0, 70);
  };

  return (
    <div className="h-screen w-full overflow-x-hidden">
      <Hero />
      <div className="bg-SECONDARY_GREEN pt-8 pb-15 " id="curve">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4">
            <div className="md:flex-1 flex flex-col space-y-4 md:space-y-6 md:items-start md:pr-40">
              <h1 className="text-center md:text-start text-white text-title-md md:text-title-lg font-bold leading-10 md:leading-tight">
                Wholesome Ingredients and Innovative Solutions for Exquisite Food and Beverages.
              </h1>
              <div className="flex flex-col space-y-3">
                <p className="text-center md:text-start text-white text-[16px]">
                  Unleash <span>Nature's</span> Potential from ingredients to technology and explore with us the endless possibilities.
                </p>
                <p className="text-center md:text-start text-white text-[16px]">We don't just accept what's put in front of us.</p>
                <p className="text-center md:text-start text-white  text-[16px]">
                  Embracing imagination and expertise at every level, we redefine the norm, crafting innovative, productive, and sustainable solutions for a
                  brighter future.
                </p>
              </div>
            </div>
            <div className="md:flex-none">
              <div className="border-2 border-white rounded-full p-4">
                <img src={image2} alt="image2" className="h-[15.5rem] w-[15.5rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 px-8 hidden">
        <div className="max-w-[1260px] mx-auto">
          <div className="bg-[#f78c2a] px-8 py-4 rounded-[0.45rem] flex flex-col space-y-4 items-center justify-evenly overflow-hidden">
            <div className="flex flex-row items-center space-x-3">
              <CalendarIcon className="w-7 h-7 text-white" />
              <p className="text-white font-semibold">November 28-30</p>
            </div>
            <div>
              <p className="text-[1.125rem] text-white font-bold text-center">It's not a product. It's a partnership.</p>
              <p className="text-white font-extralight text-center">Meet ofi at FIE in Frankfurt on stand 3.1 H40</p>
            </div>
            <div className="h-[60px]">
              <img src={image3} alt="image4" className="h-full w-full" />
            </div>
            <div>
              <Button
                text="Meet ofi at Fi Europe"
                buttonStyle=" py-[.625rem] px-[2.8125rem] bg-white text-[#860063] text-[.875rem] text-center text-center font-semibold rounded-[1.875rem] max-w-[21.4375rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 md:py-20">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col space-y-8 md:space-y-10 items-center">
            <div className="flex flex-col space-y-3 px-8 md:px-0">
              <h4 className="text-[#222] font-bold text-title-md md:text-title-lg leading-8 text-center">
                Our Primary Product Platforms Uniting to Meet The Increasing Demands of Customers.
              </h4>
              <p className="text-[16px] leading-6 text-center">
                Unleash Culinary Potential beyond reliable supplies of cocoa, coffee, grain, nuts, or spices, with our expertise. We don't just deliver – we
                innovate, cross-pollinating ideas to unlock thrilling possibilities in every flavor.
              </p>
            </div>

            <div className="w-full relative px-4 md:hidden">
              <Carousel slidesData={slidesData} autoSlide={true} />
            </div>
            <div className="hidden w-full md:flex flex-row justify-evenly space-x-5 items-center">
              {slidesData.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                  className={`flex-1 flex flex-col ${
                    isCurrentItem(item.id) && isLongText() ? "space-y-1" : "space-y-6"
                  } items-center bg-white rounded-md shadow-lg py-8 px-4 h-[22.25rem] group transition-all duration-[800ms]`}>
                  <div className="flex flex-col space-y-3 items-center">
                    <img src={item.image} alt={item.title} className="h-[8.5rem] w-[8.5rem] rounded-full group-hover:hidden" />
                    <p className="text-[16px] font-bold leading-6 text-[#222]">{item.title}</p>
                  </div>
                  <p className="text-[15px] leading-5 text-center font-light">{renderDescription(item.description, isCurrentItem(item.id), isLongText())}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 md:py-20 bg-background2 bg-no-repeat bg-cover bg-center">
        <div className="max-w-[1260px] mx-auto px-8 ">
          <div className="flex flex-col space-y-6 md:space-y-10 py-20">
            <h5 className="font-bold text-title-md md:text-title-lg leading-8 text-center md:text-start">Revolutionizing taste, from crop to creation</h5>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="h-full md:w-1/3 md:overflow-hidden order-last md:order-none">
                <p className="text-center md:text-start text-[17px] font-bold leading-5 md:leading-7">
                  Unleashing our global expertise in <span className="text-[#f78c2a]">cocoa</span>, coffee, grain, nuts, and spices,{" "}
                  <span className="text-white">we're not just</span> maintaining but enhancing our offerings. Explore our added capabilities, especially in
                  product development. Collaborate with us, turning fresh ideas into tangible delights, from plant to palate, redefining the culinary
                  experience.
                </p>
              </div>
              {/* <div className="w-full mb-8 md:mb-0 md:w-2/3  border border-SECONDARY_GREEN rounded-lg relative order-first md:order-none ">
                <div className="md:h-[300px] w-full shadow-lg">
                  <img src={image2} alt="staff1" className="object-contain w-full h-full rounded-lg" />
                </div>
                
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 md:py-20 relative">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <div className="bg-[#f78c2a] h-[.375rem] w-[7.5rem] z-1" />
            </div>
            <div className="flex flex-col items-center space-y-4 md:space-y-10">
              <h5 className="font-bold text-title-md md:text-title-lg leading-8 text-center pt-10">Traceable, delicious & nutritious?</h5>
              <div className="w-full md:hidden">
                <div className="overflow-hidden w-full">
                  <div className="flex transition-transform ease-in-out duration-500 py-5" style={{ transform: `translateX(${translateValue}%)` }}>
                    {slides.map((slide, index) => (
                      <div key={index} className="flex-shrink-0 w-full px-8">
                        <div className="flex flex-col space-y-6 items-center bg-white rounded-[1.25rem] shadow-lg h-[70vh]">
                          <img src={slide.image} alt="mid1" className="rounded-[1.25rem] h-[21.375rem] w-[100%] object-cover" />
                          <div className="flex flex-col space-y-5 px-6 pt-10 pb-10">
                            <h6 className="text-[17px] font-bold leading-5">{slide.title}</h6>
                            <p className="text-[16px] font-normal leading-6 text-[#4a4949]">{slide.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-18 md:bottom-8 left-[50%] -translate-x-1/2 flex flex-row items-center space-x-5">
                    <button className="bg-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={goToPreviousSlide}>
                      <ChevronLeftIcon className="h-6 w-6 text-white" />
                    </button>
                    <button className="bg-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={goToNextSlide}>
                      <ChevronRightIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden w-full md:flex">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                  <div className="col-span-1">
                    <div key={slides[0].id} className="flex-shrink-0 w-full">
                      <div className="flex flex-col space-y-6 items-center bg-white rounded-[1.25rem] shadow-lg">
                        <img src={slides[0].image} alt="mid1" className="rounded-tl-[1.25rem] rounded-tr-[1.25rem] h-[31.375rem] w-[100%] object-cover" />
                        <div className="flex flex-col space-y-5 px-6 pt-10 pb-10">
                          <h6 className="text-[16px] font-bold leading-5">{slides[0].title}</h6>
                          <p className="text-[15px] font-normal leading-6 text-[#4a4949]">{slides[0].description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-rows-2 gap-10">
                      <div className="flex flex-row items-center justify-between space-x-10">
                        <div key={slides[1].id} className="flex-shrink-1 w-full">
                          <div className="flex flex-col space-y-3 items-center bg-white rounded-[1.25rem] shadow-lg">
                            <img src={slides[1].image} alt="mid1" className="rounded-tl-[1.25rem] rounded-tr-[1.25rem]  object-cover" />
                            <div className="flex flex-col space-y-5 px-6 py-3">
                              <h6 className="text-[16px] font-bold leading-5">{slides[1].title}</h6>
                              <p className="text-[15px] font-normal leading-6 text-[#4a4949]">{slides[1].description}</p>
                            </div>
                          </div>
                        </div>
                        <div key={slides[0].id} className="flex-shrink-1 w-full h-full">
                          <div className="h-full flex flex-col space-y-3 items-center justify-center bg-white rounded-[1.25rem] shadow-lg">
                            <div className="flex flex-col space-y-5 px-6 py-3">
                              <h6 className="text-[16px] font-bold leading-5">{slides[0].title}</h6>
                              <p className="text-[15px] font-normal leading-6 text-[#4a4949]">{slides[0].description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div key={slides[4].id} className="flex-shrink-1 w-full">
                          <div className="flex flex-row space-x-3 items-center bg-white rounded-[1.25rem] shadow-lg">
                            <div className="w-2/6">
                              <img src={slides[4].image} alt="mid1" className="rounded-tl-[1.25rem] rounded-tr-[1.25rem]  object-contain" />
                            </div>
                            <div className="flex flex-col space-y-5 px-6 py-3">
                              <h6 className="text-[16px] font-bold leading-5">{slides[4].title}</h6>
                              <p className="text-[15px] font-normal leading-6 text-[#4a4949]">{slides[4].description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 ">
                    <div key={slides[3].id} className="flex-shrink-0 w-full">
                      <div className="flex flex-col justify-between items-center bg-[#860063] rounded-[1.25rem] shadow-lg">
                        <div className="flex flex-col space-y-5 px-6 pt-10 pb-10">
                          <h6 className="text-[16px] font-bold leading-5 text-white">{slides[3].title}</h6>
                          <p className="text-[15px] font-normal leading-6 text-white">{slides[3].description}</p>
                        </div>
                        <img src={slides[3].image} alt="mid1" className="rounded-bl-[1.25rem] rounded-br-[1.25rem] h-[31.375rem] w-[100%] object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Button
                text="Read about ofi innovation"
                buttonStyle="flex bg-[#860063] rounded-[1.875rem] h-[2.625rem] text-center py-[.625rem] px-[2.8125rem] text-[#fff]"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 relative bg-[#f8f6f8]">
        <div className="max-w-[1260px] mx-auto md:px-20">
          <div className="flex flex-col space-y-10 ">
            <div className="flex flex-col space-y-8 px-8">
              <h4 className="block md:hidden text-title-md md:text-title-xl font-bold leading-6 text-center text-[#f78c2a]">Elevate Your Culinary Creations</h4>
              <div className="hidden md:flex md:flex-col md:space-y-1">
                <h4 className=" text-title-md md:text-title-lg font-bold leading-6 text-center text-[#f78c2a]">Elevate Your Culinary Creations.</h4>
                <h4 className=" text-title-md md:text-title-md font-bold leading-6 text-center text-[#222]">
                  Infuse nutrition, Ethical Sourcing, and Planetary Consciousness into Every Bite!
                </h4>
              </div>
              <p className="text-[16px]  text-center leading-6 text-[#4a4949]">
                Discover the art of culinary brilliance – it's more than just taste. Infuse nutrition, ethical sourcing, and planetary consciousness into every
                bite. Elevate your creations with our carefully matched, natural, and delectable ingredients. Join the effortless journey of co-creation where
                excellence knows no compromise!
              </p>
            </div>
            <div className="">
              <div className="hidden md:block px-10 md:px-0">
                <div className="max-w-[1580px] mx-auto">
                  <div className="flex flex-col space-y-8">
                    <div className=" ">
                      <div className="flex items-center space-x-1">
                        {goods.map((item) => (
                          <p
                            key={item.id}
                            onClick={() => {
                              setDescription(item.description);
                              setCurrent(item.id);
                              setImage(item.image);
                            }}
                            className={`px-4 py-3.5 rounded-tr-[10px] rounded-tl-[10px] cursor-pointer duration-300 transition ${
                              current === item.id ? "bg-white text-[#860063]" : "text-white bg-[#860063]"
                            }  font-medium text-[15px] capitalize`}>
                            {item.title}
                          </p>
                        ))}
                      </div>
                      <div className="py-20 bg-white px-20 rounded-lg">
                        <div className="flex flex-row justify-between items-center">
                          <div className="flex-1 pr-40">
                            <p className="leading-snug font-normal text-[16px] text-[#333]">{description}</p>
                          </div>
                          <div className="flex-none">
                            <div className="border-2 border-[#ccc] rounded-full p-[.5rem]">
                              <img src={image} alt={`${image}imgs`} className="h-[15.5rem] w-[15.5rem] rounded-full object-cover" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:hidden">
                <div className="overflow-hidden w-full">
                  <div className="flex transition-transform ease-in-out duration-500 py-5" style={{ transform: `translateX(${translateValue}%)` }}>
                    {data.map((item, index) => (
                      <div key={index} className="flex-shrink-0 w-full px-8">
                        <div className="flex flex-col space-y-8 bg-[#f8f6f8] rounded-[1.25rem] shadow-lg py-8">
                          <div className="bg-[#860063] flex items-center justify-center py-[1.375rem] rounded-tl-[1rem] rounded-tr-[1rem]">
                            <h6 className="text-[17px] font-bold leading-6 text-[#222]">{item.title}</h6>
                          </div>
                          <div className="flex flex-col space-y-6 items-center bg-[#f8f6f8]">
                            <p className="text-[16px] text-center leading-6 text-[#4a4949]">{item.description.slice(0, 200)}....</p>
                            <h6 className="text-[16px] text-[#860063] leading-5 text-center">Read More</h6>
                            <div>
                              <div className="border-2 border-[#ccc] rounded-full p-[.5rem]">
                                <img src={item.image} alt="image2" className="h-[15.5rem] w-[15.5rem] rounded-full" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-12 left-[50%] -translate-x-1/2 flex flex-row items-center space-x-5">
                    <button className="bg-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={goToPreviousSlide}>
                      <ChevronLeftIcon className="h-6 w-6 text-white" />
                    </button>
                    <button className="bg-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={goToNextSlide}>
                      <ChevronRightIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 relative">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col space-y-10 ">
            <h4 className="text-title-md md:text-title-lg font-bold leading-6 text-center text-[#222]">A Sneak Peek into Your Everyday Adventure!</h4>

            <div className="">
              <div className="w-full md:hidden">
                <div className="overflow-hidden w-full">
                  <div className="flex transition-transform ease-in-out duration-500 py-5" style={{ transform: `translateX(${translateValue}%)` }}>
                    {datas.map((item, index) => (
                      <div key={index} className="flex-shrink-0 w-full px-8">
                        <div className="flex flex-col space-y-8 bg-white rounded-[1.25rem]">
                          <div className="flex flex-col space-y-6 items-center">
                            <div>
                              <img src={item.image} alt="image2" className="h-[15.5rem] w-[15.5rem] rounded-full" />
                            </div>
                            <p className="text-[16px] text-center font-light leading-6 text-[#4a4949]">{item.description}</p>
                            <h6 className="text-[16px] font-medium text-[#860063] leading-5 text-center">{item.title}</h6>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-12 left-[50%] -translate-x-1/2 flex flex-row items-center space-x-5">
                    <button className="bg-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={goToPreviousSlide}>
                      <ChevronLeftIcon className="h-6 w-6 text-white" />
                    </button>
                    <button className="bg-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={goToNextSlide}>
                      <ChevronRightIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden w-full md:flex flex-row justify-evenly space-x-5 items-center">
                {datas.map((item) => (
                  <div
                    key={item.id}
                    className="flex-1 flex flex-col space-y-6 border border-white  items-center bg-white py-8 px-4 h-[22.25rem] group hover:border hover:border-SECONDARY_GREEN duration-300 transition hover:rounded-md">
                    <div className="flex flex-col space-y-3 items-center">
                      <img src={item.image} alt={item.title} className="h-[8.5rem] w-[8.5rem] rounded-full group-hover:scale-125 duration-300" />
                      <p className="text-[1.125rem] font-bold leading-6 hidden text-[#222]">{item.title}</p>
                    </div>
                    <p className="text-[.875rem] leading-5  text-center font-light">{item.description}</p>

                    <div className="flex flex-row items-center space-x-3 cursor-pointer">
                      <h6 className="text-[15px] font-medium text-[#860063] leading-5">{item.title}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 md:py-20 relative bg-[#f8f6f8]">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <div className="bg-[#f78c2a] h-[.375rem] w-[7.5rem] z-1" />
            </div>
            <div className="flex flex-col items-center space-y-4 md:space-y-10 ">
              <h5 className="font-bold text-title-md md:text-title-xl leading-8 text-center pt-10">Read Jor-El news</h5>
              <div className="w-full md:hidden">
                <div className="overflow-hidden w-full">
                  <div className="w-full flex transition-transform ease-in-out duration-500 py-5" style={{ transform: `translateX(${translateValue}%)` }}>
                    {news.map((slide, index) => (
                      <div key={index} className="flex-shrink-0 px-6 w-full">
                        <div className="flex flex-col space-y-6 items-center bg-white rounded-[1.25rem] shadow-lg ">
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
                            <a target="#" href={`${slide.link}`} className="text-[1rem] font-medium text-[#860063] leading-5 text-center">
                              Read More
                            </a>
                            {/* <div className="h-12 w-12 flex items-center justify-center rounded-full shadow-lg">
                              <ShareIcon className="w-7 h-7" />
                            </div> */}
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
                  <div key={item.id} className="flex flex-col space-y-6 items-center bg-white rounded-[1.25rem] shadow-lg md:w-3/6 md:h-[65vh]">
                    <img src={item.image} alt="mid1" className="rounded-tl-[1.25rem] rounded-tr-[1.25rem] h-[21.375rem] w-[100%] object-cover" />

                    <div className="flex flex-col space-y-6 items-center px-6 md:px-4">
                      <div className="w-full flex flex-row items-center justify-between px-6">
                        <Button text={item.title} buttonStyle="flex bg-[#860063] text-[14px] rounded-[1.875rem]  text-center px-6 py-2 text-[#fff]" />
                        <p className="text-[14px] font-medium text-[#860063] leading-5 text-center">{item.date}</p>
                      </div>
                      <div className="flex flex-col space-y-5 px-6">
                        <h6 className="text-[16px] font-bold leading-5">{item.title}</h6>
                        <p className="text-[15px] font-normal leading-6 text-[#4a4949]">{item.description}</p>
                      </div>
                      <div className="w-full flex flex-row items-center justify-between px-6 pb-3">
                        <a target="#" href={`${item.link}`} className="text-[15px] font-medium text-[#860063] leading-5 text-center">
                          Read More
                        </a>
                        {/* <div className="h-9 w-9 flex items-center justify-center rounded-full shadow-lg">
                          <ShareIcon className="w-5 h-5" />
                        </div> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <Button
                text="Read more news"
                buttonStyle="flex bg-[#860063] rounded-[1.875rem] h-[2.625rem] text-center py-[.625rem] px-[2.8125rem] md:px-6 md:py- text-[#fff]"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 relative bg-[#f78c2a] px-10">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col space-y-8 md:space-y-6 items-center">
            <h4 className="font-bold text-title-md md:text-title-xl leading-6 text-center text-[#222]">Jor-el is has been here longer than you can imagine.</h4>
            <p className="text-center text-[16px] font-light text-white">We are because you are. Share with us your experiences.</p>
            <Button
              text="Contact Us"
              onClick={() => navigate("/contact-us")}
              buttonStyle="text-[16px] font-light border-[.0625rem] border-white text-white h-[2.625rem] max-w-[21.4375rem] py-[.625rem] px-[2.8125rem] flex item-center rounded-[1.875rem]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
