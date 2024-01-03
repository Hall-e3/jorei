import React from "react";
import { Button, Footer, Hero } from "../components";
import { cotton_american, featured3, featured4, featured5, grow_source, image3, our_organization } from "../constants";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const data = [
  {
    id: 1,
    date: "09 November 2023 | News",
    title: "Supporting Akosombo Flood victims",
    subtitle: "Corporate / Sustainability",
    image: featured3
  },
  {
    id: 2,
    date: "13 October 2023 | News",
    title: "Bridging the Gap for Gender Equity in Agriculture",
    subtitle: "Sustainability",
    image: featured5
  },
  {
    id: 3,
    date: "29 September 2023 | Blog",
    title: "Reducing crop loss to improve Food Security",
    subtitle: "Sustainability",
    image: featured4
  }
];

export default function About() {
  const [one, setOne] = React.useState(false);
  const [two, setTwo] = React.useState(false);
  const [three, setThree] = React.useState(false);
  const [four, setFour] = React.useState(false);
  return (
    <div className="h-screen w-full">
      <Hero />
      <div className="h-[100vh] bg-[#ff7000] flex flex-col md:flex-row overflow-hidden relative w-full">
        <div className="px-10 py-8 md:py-0 md:px-0 md:flex-1 flex items-center md:pl-42.5">
          <div className="flex flex-col space-y-6">
            <h4 className="text-white text-[2.25rem] md:text-8xl font-medium leading-10 md:leading-tight">
              Cultivating
              <span className="text-white">a Sustainable Future</span>
            </h4>
            <div>
              <Button text="Download Factsheet" buttonStyle=" py-3 px-13 bg-white text-black text-md font-semibold rounded-sm" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <picture>
            <img src={image3} alt="image3" className="w-full h-full bg-contain" />
          </picture>
        </div>
      </div>

      <div className="py-20 px-10 md:px-0 bg-[#2e2d2c]">
        <div className="max-w-[1580px] mx-auto">
          <div className="flex flex-col space-y-10">
            <h4 className="text-[2rem] md:text-5xl font-semibold text-white leading-tight">Proven Expertise that Meet Your Needs</h4>
            <div className="flex md:hidden flex-col space-y-4">
              <div
                onClick={() => setOne(!one)}
                className={`p-[1.25rem] ${
                  one ? "bg-white text-[#2e2d2c]" : "bg-[#ff7000] text-[#2e2d2c]"
                }  rounded-tr-[1.875rem] rounded-bl-[1.875rem] cursor-pointer transition-all duration-[800ms]`}>
                {!one && (
                  <div className="flex flex-row items-center justify-between">
                    <h4 className="text-[1.5625rem] text-[#2e2d2c] leading-tight font-semibold">We Grow & Source</h4>
                    <ChevronDownIcon className="w-7 h-7" />
                  </div>
                )}
                {one && (
                  <div className="flex flex-col space-y-6">
                    <div className="flex flex-row items-center justify-between">
                      <h2 className="text-[1.5625rem] text-[#2e2d2c] leading-tight font-semibold">We Grow & Source</h2>
                      <ChevronDownIcon className="w-7 h-7" />
                    </div>

                    <p className="text-[1rem] font-normal leading-snug">
                      Through our own growing operations and partnerships with both large- and small-scale producers, our global sourcing capabilities enable us
                      to reliably source and deliver high-quality products to customers around the world.
                    </p>
                    <img src={cotton_american} alt="cotton" className="h-full w-full bg-cover rounded-tr-[1.875rem] rounded-bl-[1.875rem]" />
                  </div>
                )}
              </div>
              <div
                onClick={() => setTwo(!two)}
                className={`p-[1.25rem] ${
                  two ? "bg-white text-[#2e2d2c]" : "bg-[#ff7000] text-[#2e2d2c]"
                }  rounded-tr-[1.875rem] rounded-bl-[1.875rem] cursor-pointer transition-all duration-[800ms]`}>
                {!two && (
                  <div className="flex flex-row items-center justify-between">
                    <h4 className="text-[1.5625rem] text-[#2e2d2c] leading-tight font-semibold">We Process & Manufacture</h4>
                    <ChevronDownIcon className="w-7 h-7" />
                  </div>
                )}
                {two && (
                  <div className="flex flex-col space-y-6">
                    <div className="flex flex-row items-center justify-between">
                      <h2 className="text-[1.5625rem] text-[#2e2d2c] leading-tight font-semibold">We Process & Manufacture</h2>
                      <ChevronDownIcon className="w-7 h-7" />
                    </div>
                    <p className="text-[1rem] font-normal leading-snug">
                      Our world-class processing operations have unparalleled operational efficiency. We transform raw materials such as grains, rice and cotton
                      and produce value-added products including flour, pasta, semolina, fortified branded rice and animal feeds.
                    </p>
                    <img src={cotton_american} alt="cotton" className="h-full w-full bg-cover rounded-tr-[1.875rem] rounded-bl-[1.875rem]" />
                  </div>
                )}
              </div>
              <div
                onClick={() => setThree(!three)}
                className={`p-[1.25rem] ${
                  three ? "bg-white text-[#2e2d2c]" : "bg-[#ff7000] text-[#2e2d2c]"
                }  rounded-tr-[1.875rem] rounded-bl-[1.875rem] cursor-pointer transition-all duration-[800ms]`}>
                {!three && (
                  <div className="flex flex-row items-center justify-between">
                    <h4 className="text-[1.5625rem] text-[#2e2d2c] leading-tight font-semibold">We Transport & Distribute</h4>
                    <ChevronDownIcon className="w-7 h-7" />
                  </div>
                )}
                {three && (
                  <div className="flex flex-col space-y-6">
                    <div className="flex flex-row items-center justify-between">
                      <h2 className="text-[1.5625rem] text-[#2e2d2c] leading-tight font-semibold">We Transport & Distribute</h2>
                      <ChevronDownIcon className="w-7 h-7" />
                    </div>

                    <p className="text-[1rem] font-normal leading-snug">
                      Our expertise in supply chain management, logistics and distribution allows us to handle, store, transport and distribute food, feed and
                      fibre, efficiently and cost-effectively. Using digitally-integrated capabilities, we provide market access to farmers and deliver supplies
                      customers can rely on.
                    </p>
                    <img src={cotton_american} alt="cotton" className="h-full w-full bg-cover rounded-tr-[1.875rem] rounded-bl-[1.875rem]" />
                  </div>
                )}
              </div>
              <div
                onClick={() => setFour(!four)}
                className={`p-[1.25rem] ${
                  four ? "bg-white text-[#2e2d2c]" : "bg-[#ff7000] text-[#2e2d2c]"
                }  rounded-tr-[1.875rem] rounded-bl-[1.875rem] cursor-pointer transition-all duration-[800ms]`}>
                {!four && (
                  <div className="flex flex-row items-center justify-between">
                    <h4 className="text-[1.5625rem] text-[#2e2d2c] leading-tight font-semibold">We Trade & Manage Risk</h4>
                    <ChevronDownIcon className="w-7 h-7" />
                  </div>
                )}
                {four && (
                  <div className="flex flex-col space-y-6">
                    <div className="flex flex-row items-center justify-between">
                      <h2 className="text-[1.5625rem] text-[#2e2d2c] leading-tight font-semibold">We Trade & Manage Risk</h2>
                      <ChevronDownIcon className="w-7 h-7" />
                    </div>

                    <p className="text-[1rem] font-normal leading-snug">
                      Our unique position as an independent trader allows us to trade with both local players and global majors in origin and destination
                      markets, giving us a strong cost advantage and offering us flexibility to respond to shifting trade flows. Our world-class trading team
                      and best-in-class risk management, systems and processes allows us to manage risks for our customers in real-time.
                    </p>
                    <img src={cotton_american} alt="cotton" className="h-full w-full bg-cover rounded-tr-[1.875rem] rounded-bl-[1.875rem]" />
                  </div>
                )}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                <p className="px-4 py-4.5 rounded-tr-[25px] bg-white text-[#2e2d2c] font-medium text-base">We Grow & Source</p>
                <p className="px-6 py-4.5 rounded-tr-[25px] bg-[#ff7000] text-[#2e2d2c] font-medium text-base">We Process & Manufacture</p>
                <p className="px-4 py-4.5 rounded-tr-[25px] bg-[#ff7000] text-[#2e2d2c] font-medium text-base">We Transport & Distribute</p>
                <p className="px-4 py-4.5 rounded-tr-[25px] bg-[#ff7000] text-[#2e2d2c] font-medium text-base">We Trade & Manage Risk</p>
              </div>
              <div className="py-30 bg-white px-20 rounded-tr-[60px] rounded-bl-[60px]">
                <div className="grid grid-cols-1 md:grid-cols-2   ">
                  <div className="flex flex-col px-20 justify-center">
                    <p className="leading-snug font-normal text-xl text-[#2e2d2c]">
                      Through our own growing operations and partnerships with both large- and small-scale producers, our global sourcing capabilities enable us
                      to reliably source and deliver high-quality products to customers around the world.
                    </p>
                  </div>
                  <div>
                    <img src={grow_source} alt="cotton" className="h-full w-full bg-cover rounded-tr-[60px] rounded-bl-[60px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5 pt-125  mb:pt-0 md:pt-20 md:pb-20 bg-white">
        <div className="max-w-[1580px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 relative">
            <div className="flex flex-col items-center space-y-5 absolute top-80 left-[-5%]">
              <div className="p-1.5 border-2 rounded-full border-black" />
              <div className="p-1.5 border-2 rounded-full border-black" />
              <div className="p-1.5 border-2 rounded-full border-black" />
            </div>
            <div>
              <img src={our_organization} alt="work" className="h-full w-full md:rounded-bl-[60px] md:rounded-tr-[60px]" />
            </div>
            <div className="flex flex-col items-center mb-[-1.875rem]  py-[1.5625rem]  px-[1.25rem] md:px-15 justify-start md:justify-center h-[30.1875rem] max-w-[19.6875rem] bg-[#2e2d2c] md:bg-white shadow-lg md:max-w-[55%] md:w-[100%] rounded-bl-[1.875rem] rounded-tr-[1.875rem] absolute bottom-100 left-10 md:bottom-0 md:left-[45%] w-full md:top-40 md:right-0 z-1">
              <div className="flex flex-col space-y-5">
                <h4 className="text-[2rem] md:text-5xl font-semibold text-white md:text-[#2e2d2c] leading-9 md:leading-none">
                  Olam Group's <span className="text-[#00b2e7]">Re-organisation</span>
                </h4>
                <p className="text-[1rem] leading-snug md:text-xl font-light leading-1 text-white md:text-[#2e2d2c]">
                  In January 2020, Olam announced a re-organisation to create new operating groups. Olam Agri is now established as a market leading and
                  differentiated food, feed and fibre global agri-business with unique focus on high-growth emerging markets with operations across grains and
                  oilseeds, edible oils, animal feed and protein, rice, specialty grains and seeds, cotton, wood, rubber, commodity financial services and risk
                  management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 bg-[#2e2d2c] rounded-t-[100%]"></div>
      <Footer />
    </div>
  );
}
