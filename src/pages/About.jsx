import React from "react";
import { CareerComponent, Footer, Hero, HeroBottom, ServiceProducts } from "../components";
import { cewcew, our_organization } from "../constants";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { aboutGoods } from "../utils/data";

export default function About() {
  const [mobileCurrent, setMobileCurrent] = React.useState(0);
  const [current, setCurrent] = React.useState(aboutGoods[0].id);
  const [description, setDescription] = React.useState(aboutGoods[0].description);
  const [image, setImage] = React.useState(aboutGoods[0].image);
  return (
    <div className="h-screen w-full">
      <Hero />
      <HeroBottom
        title="Cultivating Sustainable Future"
        button={true}
        buttonStyle="flex bg-[#f78c2a] rounded-md h-[2.625rem] text-center justify-center py-[.625rem] px-[2.8125rem] md:px-6 md:py- text-[#fff]"
        buttonText="Down Factsheet"
        image={cewcew}
      />
      <div className="py-20 relative">
        <div className="max-w-[1260px] mx-auto">
          <div className="px-10 md:px-0">
            <div className="max-w-[1580px] mx-auto">
              <div className="flex flex-col space-y-5 md:space-y-8">
                <h4 className="text-title-sm sm:text-title-md md:text-title-lg text-center md:text-start font-semibold text-[#860063]leading-tight">
                  Proven Expertise that Meet Your Needs
                </h4>
                <div className="">
                  <div className="hidden md:block px-10 md:px-0">
                    <div className="max-w-[1580px] mx-auto">
                      <div className="flex flex-col space-y-8">
                        <div className=" ">
                          <div className="flex items-center space-x-1">
                            {aboutGoods.map((item) => (
                              <p
                                key={item.id}
                                onClick={() => {
                                  setDescription(item.description);
                                  setCurrent(item.id);
                                  setImage(item.image);
                                }}
                                className={`px-4 py-3.5 rounded-tr-[10px] rounded-tl-[10px] cursor-pointer duration-300 transition ${
                                  current === item.id ? "bg-[#f8f6f8] text-[#2e2d2c]" : "bg-[#f78c2a] text-white"
                                }  font-medium text-[15px] capitalize`}>
                                {item.title}
                              </p>
                            ))}
                          </div>
                          <div className="py-20 bg-[#f8f6f8] px-20 rounded-lg">
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
                </div>
                <div className="flex md:hidden flex-col space-y-4">
                  {aboutGoods.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setMobileCurrent((prev) => (prev === item.id ? 0 : item.id))}
                      className={`flex flex-col space-y-6 p-[1.25rem] ${
                        mobileCurrent === item.id ? "bg-white text-[#2e2d2c]" : "bg-[#f78c2a] text-[#2e2d2c]"
                      }  rounded-md cursor-pointer transition-all duration-[800ms]`}>
                      {mobileCurrent === item.id ? (
                        <>
                          <div className="flex flex-row items-center justify-between">
                            <h2 className="text-[16px] text-[#2e2d2c] leading-tight font-semibold">{item.title}</h2>
                            <ChevronDownIcon className="w-7 h-7" />
                          </div>
                          <div className="transition duration-[800ms]">
                            <p className="text-[16px] leading-snug">{item.description}</p>
                            <img src={item.image} alt="cotton" className="h-full w-full bg-cover rounded-md" />
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-row items-center justify-between">
                          <h2 className="text-[16px] text-[#2e2d2c] leading-tight font-semibold">{item.title}</h2>
                          <ChevronDownIcon className="w-7 h-7" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceProducts />
      <CareerComponent />
      <div className=" pt-125  mb:pt-0 md:pt-20 md:pb-20 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 relative">
            <div className="flex flex-col items-center space-y-5 absolute top-70 left-[-5%]">
              <div className="p-1.5 border-2 rounded-full border-[#860063]" />
              <div className="p-1.5 border-2 rounded-full border-[#860063]" />
              <div className="p-1.5 border-2 rounded-full border-[#860063]" />
            </div>
            <div>
              <img src={our_organization} alt="work" className="h-full w-full md:rounded-md" />
            </div>
            <div className="flex flex-col items-center mb-[-1.875rem]  py-[1.5625rem]  px-[1.25rem] md:px-15 justify-start md:justify-center h-[30.1875rem] max-w-[19.6875rem] bg-[#2e2d2c] md:bg-white shadow-lg md:max-w-[55%] md:w-[100%] rounded-md absolute bottom-70 left-10 md:bottom-0 md:left-[45%] w-full md:top-40 md:right-0 z-1">
              <div className="flex flex-col space-y-5">
                <h4 className="text-title-sm sm:text-title-md md:text-title-xl text-center md:text-start font-semibold text-white md:text-[#2e2d2c] leading-9 md:leading-none">
                  Olam Group's <span className="text-[#860063]">Re-organization</span>
                </h4>
                <p className="text-[15px] md:text-[16px] leading-snug  text-white md:text-[#2e2d2c]">
                  In January 2020, Olam announced a re-organization to create new operating groups. Olam Agri is now established as a market leading and
                  differentiated food, feed and fibre global agri-business with unique focus on high-growth emerging markets with operations across grains and
                  oilseeds, edible oils, animal feed and protein, rice, specialty grains and seeds, cotton, wood, rubber, commodity financial services and risk
                  management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
