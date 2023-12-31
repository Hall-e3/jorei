import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";
import { Link } from "react-router-dom";

export default function Footer() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [smallFirst, setSmallFirst] = useState(false);
  const [smallSecond, setSmallSecond] = useState(false);
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


  const handleSmallFive = () => {
    setSmallFive((value) => !value);
  };

  return (
    <div className="py-15 bg-[#2e2d2c] border-t-[0.375rem] md:border-t-2 border-t-orange-800">
      <div className="max-w-[1260px] mx-auto">
        <div className="flex flex-col space-y-16">
          <div className="flex flex-col space-y-8 md:space-y-4 md:flex-row justify-between md:space-x-20  px-10 md:px-0 transition">
            <div className="md:hidden flex-1 flex flex-col justify-between space-y-4">
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
                <p className="text-sm font-normal md:text-md md:font-thin text-white">Olam International Limited. All Rights Reserved. Co Reg No: 199504676H</p>
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
                  Jorel Agriculture Exports.
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
                  Products & Services
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
            {/* medium */}
            <div className="hidden md:flex flex-col space-y-4">
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
                <p className="text-[13px] font-normal   text-white">Copyright © 2023</p>
                <p className="text-[13px] font-normal   text-white">Jorel Agriculture Exports. All Rights Reserved. Co Reg No: 199503676H</p>
                <div className="flex flex-row space-x-3 ">
                  <p className="text-[13px] font-normal   text-white">Privacy Policy</p>
                  <p className="text-[13px] font-normal   text-white">Cookie Policy</p>
                  <p className="text-[13px] font-normal   text-white">Sitemap</p>
                </div>
                <p className="text-sm font-normal   text-white">Disclaimer</p>
              </div>
            </div>
            <div className="hidden md:flex flex-1 justify-center">
              <div onClick={handleSecond} className="flex flex-col space-y-4 md:flex-1">
                <h5 onClick={handleSmallFirst} className="font-semibold text-[16px] md:text-lg text-[#f78c2a] cursor-pointer">
                  Jor-el
                </h5>
                <div className="flex flex-col space-y-3 transition">
                  <Link to="/products-services" className="text-[13px]  md:text-md  text-white hover:text-[#f78c2a]">
                    Products & Services
                  </Link>
                  <Link to="/about" className="text-[13px]  md:text-md  text-white hover:text-[#f78c2a]">
                    About us
                  </Link>
                  <Link to="/news" className="text-[13px]  md:text-md  text-white hover:text-[#f78c2a]">
                    News & Events
                  </Link>
                  <Link to="/careers" className="text-[13px]  md:text-md  text-white hover:text-[#f78c2a]">
                    Careers
                  </Link>
                </div>
              </div>
              <div onClick={handleFirst} className="hidden md:flex flex-col space-y-4 cursor-pointer md:flex-1">
                <h5 onClick={handleSmallSecond} className="font-semibold text-[16px] md:text-lg text-[#f78c2a]">
                  Products & Ingredients
                </h5>
                <div className="flex flex-col space-y-3 transition">
                  <p className="text-[13px] md:text-md  text-white hover:text-orange-800 transition ">Cocoa</p>
                  <p className="text-[13px] md:text-md  text-white hover:text-orange-800 transition">Coffee</p>
                  <p className="text-[13px] md:text-md  text-white hover:text-orange-800 transition">Cotton</p>
                  <p className="text-[13px] md:text-md  text-white hover:text-orange-800 transition">Dairy</p>
                  <p className="text-[13px] md:text-md  text-white hover:text-orange-800 transition">Nuts</p>
                  <p className="text-[13px] md:text-md  text-white hover:text-orange-800 transition">Spices</p>
                </div>
              </div>
              <div onClick={handleFirst} className="flex flex-col space-y-4 cursor-pointer md:flex-1">
                <h5 onClick={handleSmallFive} className="font-semibold text-[16px] md:text-lg text-white">
                  Helpful Links
                </h5>
                <div className="flex flex-col space-y-3 transition">
                  <Link to="/contact-us" className="text-[13px] md:text-md  text-white hover:text-orange-800 transition">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
