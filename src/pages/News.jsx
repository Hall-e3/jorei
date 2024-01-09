import React from "react";
import { Footer, Hero, HeroBottom, Input } from "../components";
import { image4 } from "../constants";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { dataNews, downlinks, news } from "../utils/data";

export default function News() {
  const [active, setActive] = React.useState(1);
  const handleChange = (evt) => {
    const selectedValue = parseInt(evt.target.value, 10);
    setActive(selectedValue);
  };

  return (
    <div className="h-screen w-full">
      <Hero />
      <HeroBottom
        title="Sharing Our Actions, Performance & Views"
        button={true}
        buttonStyle="flex bg-[#f78c2a] rounded-md h-[2.625rem] text-center justify-center py-[.625rem] px-[2.8125rem] md:px-6 md:py- text-[#fff]"
        buttonText="Down Fact sheet"
        componentStyle="color_black"
        subtitle="Stay informed with us! Explore the latest updates, performance highlights, and diverse perspectives in our News and Events section. Dive into a world of transparency, where every action contributes to our shared narrative of success. Join the conversation, stay connected, and be part of the unfolding story."
        image={image4}
      />
      <div className="py-20 px-[30px] md:px-0">
        <div className="max-w-[1260px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0 md:gap-20">
            <div>
              <h3 className="text-title-sm sm:text-title-md md:text-title-xl text-center md:text-start font-semibold text-[#2e2d2c] leading-tight">
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

      <div className="py-20 bg-[#f8f6f8] px-[30px] md:px-0">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col space-y-16">
            <div>
              <h3 className="text-title-sm sm:text-title-md md:text-title-xl text-center md:text-start font-semibold">Featured News</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dataNews.map((item) => (
                <div key={item.id} className="flex flex-col space-y-4 ">
                  <img src={item.image} alt={item.title} className="rounded-md" />
                  <p className="text-[14px] ">{item.date}</p>
                  <h6 className="font-semibold text-[16px]">{item.title}</h6>
                  <p className="font-medium text-[14px] ">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 ">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col space-y-14 px-[30px] md:px-0">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <h3 className="text-title-sm sm:text-title-md md:text-title-xl text-center md:text-start font-semibold text-black">All News</h3>
              <form className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
                <div className="flex space-x-6 md:space-x-5 items-center">
                  <Input styles="flex flex-col items-start md:space-x-3 md:items-center md:flex-row" label="From" type="date" name="bday" />
                  <Input styles="flex flex-col items-start md:space-x-3 md:items-center md:flex-row" label="To" type="date" name="bday" />
                </div>
                <div className="hidden md:flex items-center space-x-2 border-b-2 border-b-[#2e2d2c] pb-2">
                  <p>Search:</p>
                  <input className="outline-none" />
                  <MagnifyingGlassIcon className="h-4 w-4" />
                </div>
                <div className="w-full flex flex-col items-start md:hidden">
                  <p className="text-[1rem] font-semibold">Search:</p>
                  <div className="w-full flex flex-row items-center border border-[#2e2d2c] py-2.5 px-3 rounded-md">
                    <input className="outline-none flex-1" />
                    <MagnifyingGlassIcon className="h-4 w-4" />
                  </div>
                </div>

                <div className="w-full flex flex-col items-start md:hidden">
                  <p className="text-[1rem] font-semibold">Show:</p>
                  <div className="w-full h-12 flex flex-row items-center border border-[#2e2d2c] rounded-md">
                    <select className=" h-full w-full outline-none rounded-md px-2" value={active} name="news" id="news" onChange={handleChange}>
                      <option></option>
                      {downlinks.map((link) => (
                        <>
                          <option key={link.id} value={link.id}>
                            <p className="text-[16px]">{link.title}</p>
                          </option>
                        </>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="hidden md:flex flex-col items-center">
              <div className="flex items-center">
                {downlinks.map((link) => (
                  <p
                    onClick={() => setActive(link.id)}
                    key={link.id}
                    className={`cursor-pointer text-[16px] font-light px-12 border-b-4 pb-2 ${
                      active === link.id ? " border-b-[#ff7000] font-bold" : "border-b-[#e9e9e9]"
                    }`}>
                    {link.title}
                  </p>
                ))}
              </div>
            </div>
            <div>
              {active === 1 && (
                <>
                  {news.length === 0 ? (
                    <div className="flex items-center justify-center">
                      <p className="text-[16px] font-bold">No records found</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-15">
                      {news.map((item) => (
                        <div key={item.id} className="flex flex-col space-y-3">
                          <img src={item.image} alt={item.title} className="rounded-md h-[18rem]" />
                          <p className="text-black text-[15px]">{item.date}</p>
                          <h6 className="text-black font-semibold text-[16px]">{item.title}</h6>
                          <p className="text-[#2e2d2c] text-[15px]">{item.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
              {active === 2 && (
                <>
                  {news.length === 0 ? (
                    <div className="flex items-center justify-center">
                      <h6 className="text-lg font-bold">No records found</h6>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-20">
                      {news.map((item) => (
                        <div key={item.id} className="flex flex-col space-y-3">
                          <img src={item.image} alt={item.title} className="rounded-md h-[18rem]" />
                          <p className="text-black text-[15px]">{item.date}</p>
                          <h6 className="text-black text-[15px] font-semibold">{item.title}</h6>
                          <p className="text-[#2e2d2c] text-[15px]">{item.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
              {active === 3 && (
                <>
                  <div className="flex items-center justify-center">
                    <h6 className="text-3xl font-bold">No records found</h6>
                  </div>
                </>
              )}
              {active === 4 && (
                <>
                  {news.length === 0 ? (
                    <div className="flex items-center justify-center">
                      <h6 className="text-lg font-bold">No records found</h6>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-20">
                      {news.map((item) => (
                        <div key={item.id} className="flex flex-col space-y-3">
                          <img src={item.image} alt={item.title} className="rounded-md h-[18rem]" />
                          <p className="text-black text-[15px]">{item.date}</p>
                          <h6 className="text-black text-[15px] font-semibold">{item.title}</h6>
                          <p className="text-[#2e2d2c] text-[15px]">{item.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
