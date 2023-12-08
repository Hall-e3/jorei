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
  const [smallThree, setSmallThree] = useState(false);
  const [smallFour, setSmallFour] = useState(false);
  const [smallFive, setSmallFive] = useState(false);
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

  const handleSmallThree = () => {
    setSmallThree((value) => !value);
  };

  const handleSmallFour = () => {
    setSmallFour((value) => !value);
  };

  const handleSmallFive = () => {
    setSmallFive((value) => !value);
  };

  return (
    <div className="py-20 bg-[#2e2d2c] border-t-[0.375rem] md:border-t-2 border-t-orange-800">
      <div className="max-w-[1580px] mx-auto">
        <div className="flex flex-col space-y-16">
          <div className="flex flex-col space-y-10 md:space-y-4 md:flex-row justify-between px-10 transition">
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div className="flex flex-row items-center justify-between">
                <Logo width={60} height={60} />
                <div className="flex flex-row items-center space-x-4">
                  <div className="flex flex-row space-x-2 items-center">
                    <LinkedIn width={25} height={25} />
                    <p className="hidden text-md font-thin text-white hover:text-orange-800 transition">LinkedIn</p>
                  </div>
                  <div className="flex flex-row space-x-2 items-center">
                    <Twitter width={25} height={25} />
                    <p className="hidden text-md font-thin text-white hover:text-orange-800 transition">X</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-3 items-end">
                <p className="text-sm font-normal md:text-md md:font-thin text-white">Copyright © 2022</p>
                <p className="text-sm font-normal md:text-md md:font-thin text-white">
                  Olam International Limited. All Rights Reserved. Co Reg No: 199504676H
                </p>
                <div className="flex flex-row space-x-3 ">
                  <p className="text-sm font-normal md:text-md md:font-thin text-white">Privacy Policy</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white">Cookie Policy</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white">Sitemap</p>
                </div>
                <p className="text-sm font-normal md:text-md md:font-thin text-white">Disclaimer</p>
              </div>
            </div>
            <div className="md:hidden transition flex flex-col space-y-3 md:space-y-0">
              <div className="flex items-center justify-between border-b pb-3 border-b-white">
                <h5 onClick={handleSmallFirst} className="font-semibold text-[1rem] md:text-lg text-white cursor-pointer">
                  Olam food ingredients(ofi)
                </h5>
                <ChevronDownIcon className="h-4 w-4 text-white" />
              </div>
              {smallFirst && (
                <div className="flex flex-col space-y-3 transition">
                  <p className="text-sm font-normal md:text-md md:font-thin text-white">About us</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white">Innovation</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white ">Sustainability</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white">Investors</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white">Careers</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white">News & Events</p>
                </div>
              )}
            </div>
            <div className="md:hidden transition flex flex-col space-y-3 md:space-y-0">
              <div className="flex items-center justify-between border-b pb-3 border-b-white">
                <h5 onClick={handleSmallSecond} className="font-semibold text-[1rem] md:text-lg text-white">
                  Products & Ingredients
                </h5>
                <ChevronDownIcon className="h-4 w-4 text-white" />
              </div>
              {smallSecond && (
                <div className="flex flex-col space-y-3 transition">
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Cocoa</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Coffee</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Cotton</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Dairy</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Nuts</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Spices</p>
                </div>
              )}
            </div>
            <div className="md:hidden transition flex flex-col space-y-3 md:space-y-0">
              <div className="flex items-center justify-between border-b pb-3 border-b-white">
                <h5 onClick={handleSmallThree} className="font-semibold text-[1rem] md:text-lg text-white">
                  Shop
                </h5>
                <ChevronDownIcon className="h-4 w-4 text-white" />
              </div>
              {smallThree && (
                <div className="flex flex-col space-y-3 transition">
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Nuts - Australia</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Nuts - USA</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Specialty Coffee - UK</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Specialty Coffee - USA</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Specialty Coffee - EU</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Spices - USA</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">deZaan Cocoa - USA</p>
                </div>
              )}
            </div>
            <div className="md:hidden transition flex flex-col space-y-3 md:space-y-0">
              <div className="flex items-center justify-between border-b pb-3 border-b-white">
                <h5 onClick={handleSmallFour} className="font-semibold text-[1rem] md:text-lg text-white">
                  Disclosures
                </h5>
                <ChevronDownIcon className="h-4 w-4 text-white" />
              </div>
              {smallFour && (
                <div className="flex flex-col space-y-3 transition">
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Transparency in Coverage</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Modern Slavery Statement</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">CA Supply Chain Transparency Act</p>
                </div>
              )}
            </div>
            <div className="md:hidden transition flex flex-col space-y-3 md:space-y-0">
              <div className="flex items-center justify-between border-b pb-3 border-b-white">
                <h5 onClick={handleSmallFive} className="font-semibold text-[1rem] md:text-lg text-white">
                  Helpful Links
                </h5>
                <ChevronDownIcon className="h-4 w-4 text-white" />
              </div>
              {smallFive && (
                <div className="flex flex-col space-y-3 transition">
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Contact us</p>
                  <p className="text-sm font-normal md:text-md md:font-thin text-white hover:text-orange-800 transition">Sign up for news</p>
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
          </div>
          <div>
            <p className="text-[13px] font-medium text-white text-center">© 2023 jorel Agri Holdings Pte Ltd. All Rights Reserved Co. Reg No. 202115457K</p>
          </div>
        </div>
      </div>
    </div>
  );
}
