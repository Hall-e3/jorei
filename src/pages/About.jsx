import React from "react";
import { CareerComponent, Footer, Hero, HeroBottom, ServiceProducts } from "../components";
import { cotton_american, grow_source, image4, our_organization } from "../constants";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function About() {
  const [one, setOne] = React.useState(false);
  const [two, setTwo] = React.useState(false);
  const [three, setThree] = React.useState(false);
  const [four, setFour] = React.useState(false);
  return (
    <div className="h-screen w-full">
      <Hero />
      <HeroBottom
        title="Cultivating Sustainable Future"
        button={true}
        buttonStyle="flex bg-[#f78c2a] rounded-md h-[2.625rem] text-center py-[.625rem] px-[2.8125rem] md:px-6 md:py- text-[#fff]"
        buttonText="Down Factsheet"
        image={image4}
      />
      <div className="py-20 relative">
        <div className="max-w-[1260px] mx-auto">
          <div className="hidden md:block px-10 md:px-0">
            <div className="max-w-[1580px] mx-auto">
              <div className="flex flex-col space-y-8">
                <h4 className="text-title-md md:text-title-xl font-semibold text-[#860063]leading-tight">Proven Expertise that Meet Your Needs</h4>
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

                        <p className="text-[16px] font-normal leading-snug">
                          Through our own growing operations and partnerships with both large- and small-scale producers, our global sourcing capabilities
                          enable us to reliably source and deliver high-quality products to customers around the world.
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
                        <p className="text-[16px] font-normal leading-snug">
                          Our world-class processing operations have unparalleled operational efficiency. We transform raw materials such as grains, rice and
                          cotton and produce value-added products including flour, pasta, semolina, fortified branded rice and animal feeds.
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

                        <p className="text-[16px] font-normal leading-snug">
                          Our expertise in supply chain management, logistics and distribution allows us to handle, store, transport and distribute food, feed
                          and fibre, efficiently and cost-effectively. Using digitally-integrated capabilities, we provide market access to farmers and deliver
                          supplies customers can rely on.
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

                        <p className="text-[16px] font-normal leading-snug">
                          Our unique position as an independent trader allows us to trade with both local players and global majors in origin and destination
                          markets, giving us a strong cost advantage and offering us flexibility to respond to shifting trade flows. Our world-class trading
                          team and best-in-class risk management, systems and processes allows us to manage risks for our customers in real-time.
                        </p>
                        <img src={cotton_american} alt="cotton" className="h-full w-full bg-cover rounded-tr-[1.875rem] rounded-bl-[1.875rem]" />
                      </div>
                    )}
                  </div>
                </div>
                <div className=" ">
                  <div className="flex items-center space-x-1">
                    <p className="px-4 py-3.5 rounded-tr-[10px] rounded-tl-[10px] bg-[#f8f6f8] text-[#860063] font-medium text-[14.5px]">We Grow & Source</p>
                    <p className="px-6 py-3.5 rounded-tr-[10px] rounded-tl-[10px] bg-[#f78c2a] text-white font-medium text-[14.5px]">
                      We Process & Manufacture
                    </p>
                    <p className="px-4 py-3.5 rounded-tr-[10px] rounded-tl-[10px] bg-[#f78c2a] text-white font-medium text-[14.5px]">
                      We Transport & Distribute
                    </p>
                    <p className="px-4 py-3.5 rounded-tr-[10px] rounded-tl-[10px] bg-[#f78c2a] text-white font-medium text-[14.5px]">We Trade & Manage Risk</p>
                    <p className="px-4 py-3.5 rounded-tr-[10px] rounded-tl-[10px] bg-[#f78c2a] text-white font-medium text-[14.5px]">Savory & Culinary</p>
                    <p className="px-4 py-3.5 rounded-tr-[10px] rounded-tl-[10px] bg-[#f78c2a] text-white font-medium text-[14.5px]">Snacking</p>
                  </div>
                  <div className="py-20 bg-[#f8f6f8] px-20 rounded-lg">
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex-1 pr-40">
                        <p className="leading-snug font-normal text-[16px] text-[#333]">
                          Through our own growing operations and partnerships with both large- and small-scale producers, our global sourcing capabilities
                          enable us to reliably source and deliver high-quality products to customers around the world.
                        </p>
                      </div>
                      <div className="flex-none w-3/6 h-3/6">
                        <div className="h-full w-full rounded-md p-[.5rem]">
                          <img src={grow_source} alt="image2" className="h-full w-full rounded-md object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
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
                <h4 className="text-title-md md:text-title-xl font-semibold text-white md:text-[#2e2d2c] leading-9 md:leading-none">
                  Olam Group's <span className="text-[#860063]">Re-organisation</span>
                </h4>
                <p className="text-[15px] md:text-[16px] leading-snug  text-white md:text-[#2e2d2c]">
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

      <Footer />
    </div>
  );
}
