import React from "react";
import { Logo } from "../components";
import { Bars3CenterLeftIcon, CalendarIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { image2 } from "../constants";

export default function Home() {
  const [search, setSearch] = React.useState(false);

  return (
    <div className="h-screen w-full">
      <div className="bg-[#860063] py-2">
        <div className="max-w-[1480px] mx-auto px-8">
          <div className="flex flex-row items-center">
            <div className="flex-1">
              <Logo width={50} height={50} />
            </div>
            <div className="flex-none flex flex-row items-center space-x-3">
              {search ? (
                <div className="h-[2.25rem] w-[10.9375rem] text-left  flex flex-row items-center border-b border-white py-2.5">
                  <MagnifyingGlassIcon className="w-6 h-6 text-[#f78c2a]" />
                  <input className="outline-none w-full bg-[#860063] pl-1.5 text-white" />
                  <XMarkIcon onClick={() => setSearch(false)} className="h-6 w-6 text-white font-bold" />
                </div>
              ) : (
                <div
                  onClick={() => setSearch(true)}
                  className="h-[2.25rem] rounded-[1.875rem] w-[10.9375rem] text-left px-[.9375rem] flex flex-row items-center border border-white py-2.5">
                  <MagnifyingGlassIcon className="w-5 h-5 text-[#f78c2a]" />
                  <input className="outline-none w-full bg-[#860063] pl-1.5" placeholder="Search" />
                </div>
              )}

              <div>
                <Bars3CenterLeftIcon className="text-white w-7 h-7 cursor-pointer block md:hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#860063] pt-8 pb-15 " id="curve">
        <div className="max-w-[1480px] mx-auto px-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col space-y-2">
              <h1 className="text-center text-white text-[2rem] font-bold leading-10">Naturally good food & beverage ingredients and solutions</h1>
              <p className="text-center text-white text-[1.15rem] font-light">
                At <span>Ofi</span> we believe in raw potential of nature, ingredients, people, technology,ideas.
              </p>
              <p className="text-center text-white text-[1.15rem] font-light">We don't just accept what's put in front of us.</p>
              <p className="text-center text-white  text-[1.15rem] font-light">
                We ask, what else could this be? At every level we use our imagination and expertise to find more creative, productive and sustainable ways of
                doing things.
              </p>
            </div>
            <div>
              <div className="border-2 border-white rounded-full p-4">
                <img src={image2} alt="image2" className="h-[15.5rem] w-[15.5rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div>
          <div className="bg-[#f78c2a] rounded-[0.45rem] flex flex-col items-center align-middle justify-evenly overflow-hidden">
            <div>
              <CalendarIcon className="w-7 h-7 text-white" />
              <p>November 28-30</p>
            </div>
            <div>
                <p>It's not a product. It's a partnership.</p>
                <p>Meet ofi at FIE in Frankfurt on stand 3.1 H40</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
