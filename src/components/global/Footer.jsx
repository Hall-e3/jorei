import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";

export default function Footer() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [smallFirst, setSmallFirst] = useState(false);
  const [smallSecond, setSmallSecond] = useState(false);
  const handleFirst = () => {
    setFirst((value) => !value);
  };

  const handleSecond = () => {
    setSecond((value) => !value);
  };

  const handleSmallFirst = () => {
    setSmallFirst((value) => !value);
  };

  const handleSmallSecond = () => {
    setSmallSecond((value) => !value);
  };

  return (
    <div className="py-20 bg-[#2e2d2c] border-t-[0.375rem] md:border-t-2 border-t-orange-800">
      <div className="max-w-[1580px] mx-auto px-10 md:px-0">
        <div className="flex flex-col space-y-16">
          <div className="flex flex-col space-y-4 md:space-y-4 md:flex-row justify-between px-10 transition">
            <div className="flex-1">
              <Logo width={100} height={100} />
            </div>
            <div className="md:hidden transition flex flex-col space-y-3 md:space-y-0">
              <div className="flex items-center justify-between border-b pb-3 border-b-white">
                <h5 onClick={handleSmallFirst} className="font-semibold text-[1rem] md:text-lg text-white cursor-pointer">
                  Quick Links
                </h5>
                <ChevronDownIcon className="h-4 w-4 text-white" />
              </div>
              {smallFirst && (
                <div className="flex flex-col space-y-3 transition">
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Careers</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Contact</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition ">About us</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Locations</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Privacy Policy</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Cookie Policy</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Sitemap</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Terms of Use</p>
                </div>
              )}
            </div>
            <div className="md:hidden transition flex flex-col space-y-3 md:space-y-0">
              <div className="flex items-center justify-between border-b pb-3 border-b-white">
                <h5 onClick={handleSmallSecond} className="font-semibold text-[1rem] md:text-lg text-white">
                  Products & Services
                </h5>
                <ChevronDownIcon className="h-4 w-4 text-white" />
              </div>
              {smallSecond && (
                <div className="flex flex-col space-y-3 transition">
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Grains & Oilseeds</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">CFS & Oilseeds</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Cotton</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Editable Oils</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Rice</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Rubber</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Specialty Grains & Seed</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Integrated Feed & Protein</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Wood Products</p>
                </div>
              )}
            </div>
            <div onClick={handleSecond} className="hidden md:flex flex-col space-y-4 md:flex-1">
              <h5 className="font-semibold text-lg text-white cursor-pointer">Quick Links</h5>
              <div className={`flex ${second ? "flex-row space-x-10" : "flex-col space-y-3"} `}>
                <div className="flex flex-col space-y-2">
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">Careers</p>
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">Contact</p>
                  <p className="text-md font-thin text-white hover:text-orange-800 transition ">About us</p>
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">Locations</p>
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">Privacy Policy</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">Cookie Policy</p>
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">Sitemap</p>
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">Terms of Use</p>
                </div>
              </div>
            </div>
            <div onClick={handleFirst} className="hidden md:flex flex-col space-y-4 cursor-pointer md:flex-1">
              <h5 className="font-semibold text-lg text-white">Products & Services</h5>
              <div className={`flex ${first ? "flex-row space-x-10 items-center" : "flex-col space-y-2"}`}>
                <div className="flex flex-col space-y-2">
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">Grains & Oilseeds</p>
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">CFS & Oilseeds</p>
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">Cotton</p>
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">Editable Oils</p>
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">Rice</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">Rubber</p>
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">Specialty Grains & Seed</p>
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">Integrated Feed & Protein</p>
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">Wood Products</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="border-b border-b-white pb-3 md:border-none md:pb-0">
                <h5 className="font-semibold text-[1rem] md:text-lg text-white">Socials</h5>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row space-x-2 items-center">
                  <LinkedIn width={100} height={100} />
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">LinkedIn</p>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <Twitter width={100} height={100} />
                  <p className="text-md font-thin text-white hover:text-orange-800 transition">X</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[13px] font-medium text-white text-center">© 2023 jorel Agri Holdings Pte Ltd. All Rights Reserved Co. Reg No. 202115457K</p>
          </div>
        </div>
      </div>
    </div>
  );
}
