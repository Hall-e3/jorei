import React from "react";
import Logo from "./Logo";
import { Bars3CenterLeftIcon, ChatBubbleOvalLeftIcon, ChevronDownIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { routes } from "../../utils/data";

export default function Hero() {
  const [search, setSearch] = React.useState(false);
  const [hoveredLinkId, setHoveredLinkId] = React.useState(0);
  const [woods, setWoods] = React.useState(false);
  const [about, setAbout] = React.useState(false);
  const [drop, setDrop] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleDrop = () => {
    setDrop(!drop);
  };
  const handleWoods = () => {
    setWoods(!woods);
  };
  const handleAbout = () => {
    setAbout(!about);
  };

  return (
    <>
      <div
        className={`w-full py-2  ${
          show ? "fixed top-0 border-b-2 border-stroke  bg-SECONDARY_GREEN drop-shadow-lg duration-700 z-99" : " bg-SECONDARY_GREEN"
        }`}>
        <div className="max-w-[1260px] mx-auto px-4 md:px-0">
          <div className="flex flex-row items-center">
            <Link to="/" className="flex-1">
              <Logo width={100} height={100} />
            </Link>
            <div className="flex flex-none md:hidden flex-row items-center space-x-3">
              {search ? (
                <div className="h-[2.25rem] w-[10.9375rem] text-left  flex flex-row items-center border-b border-white py-2.5">
                  <MagnifyingGlassIcon className="w-6 h-6 text-[#f78c2a]" />
                  <input className="text-sm outline-none w-full bg-SECONDARY_GREEN pl-1.5 text-white" />
                  <XMarkIcon onClick={() => setSearch(false)} className="h-6 w-6 text-white font-bold" />
                </div>
              ) : (
                <div
                  onClick={() => setSearch(true)}
                  className="h-[2.25rem] rounded-[1.875rem] w-[10.9375rem] text-left px-[.9375rem] flex flex-row items-center border border-white py-2.5">
                  <MagnifyingGlassIcon className="w-5 h-5 text-[#f78c2a]" />
                  <input className="text-sm outline-none w-full bg-SECONDARY_GREEN pl-1.5" placeholder="Search" />
                </div>
              )}

              <div className="block md:hidden">
                <Bars3CenterLeftIcon onClick={() => setShowMobileMenu((prev) => !prev)} className="text-white w-7 h-7 cursor-pointer" />
              </div>
            </div>
            <div className="hidden flex-none transition duration-300 md:flex flex-row items-center space-x-3">
              {search ? (
                <>
                  <div className="h-[2.25rem] w-[10.9375rem] text-left  flex md:hidden flex-row items-center border-b border-white py-2.5">
                    <MagnifyingGlassIcon className="w-6 h-6 text-[#f78c2a]" />
                    <input className="outline-none w-full bg-SECONDARY_GREEN pl-1.5 text-white" />
                    <XMarkIcon onClick={() => setSearch(false)} className="h-6 w-6 text-white font-bold" />
                  </div>
                  <div className="h-[2.5rem] w-full text-left  hidden md:flex flex-row items-center border border-SECONDARY_GREEN bg-white py-2.5 px-3 rounded-[1.25rem]">
                    <input className="text-sm outline-none w-full  pl-1.5 font-light" placeholder="Search for products,ingredients,events...." />
                    <div className="flex flex-row items-center space-x-4">
                      <MagnifyingGlassIcon className="w-5 h-5 text-[#f78c2a]" />
                      <div className="bg-SECONDARY_GREEN h-5 w-5 flex items-center justify-center rounded-full">
                        <XMarkIcon onClick={() => setSearch(false)} className="h-4 w-4 text-white font-bold" />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-row items-center space-x-5">
                  <div className="flex flex-row items-center space-x-6">
                    {routes.map((route) => (
                      <Link
                        key={route.id}
                        to={`${route.link}`}
                        onMouseEnter={() => setHoveredLinkId(route.id)}
                        className="flex flex-row items-center space-x-2">
                        {route.icon}
                        <p className={`text-white text-[15.3px]  ${hoveredLinkId === 1 || hoveredLinkId === 2 ? "hover:text-[#f78c2a]" : ""}`}>{route.name}</p>
                      </Link>
                    ))}
                  </div>
                  <button className="flex items-center group space-x-3 bg-white hover:bg-SECONDARY_GREEN border border-SECONDARY_GREEN hover:border-white px-[2.09375rem] rounded-[1.25rem] h-[2.5rem] max-w-[21.4375rem]">
                    <ChatBubbleOvalLeftIcon className="w-6 h-6 text-[#f78c2a]" />
                    <p className="text-SECONDARY_GREEN group-hover:text-white  text-[.875rem]">Get in touch</p>
                  </button>
                  <div
                    onClick={() => setSearch(true)}
                    className="h-[2.25rem] rounded-[1.875rem] w-[10.9375rem] text-left px-[.9375rem] flex flex-row items-center border border-white py-2.5">
                    <MagnifyingGlassIcon className="w-5 h-5 text-[#f78c2a]" />
                    <input className="text-sm outline-none w-full bg-SECONDARY_GREEN pl-1.5" placeholder="Search" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col md:hidden w-full fixed ${
          !showMobileMenu ? "-top-[410px]" : "top-0"
        } left-0 bg-[#2e2d2c] transition-all duration-[800ms] shadow-xl z-10 py-8 rounded-b-xl`}>
        <XMarkIcon className="absolute h-7 w-6 top-5 right-15 cursor-pointer" onClick={() => setShowMobileMenu(false)} />
        <div className="pt-[60px] items-center flex flex-col gap-8">
          <div className="md:hidden transition flex flex-col space-y-3 ">
            <div className="flex items-center space-x-3 justify-between border-b pb-3 border-b-white">
              <Link to="/about">
                <h5 onClick={handleAbout} className="font-semibold text-[.85rem] text-white cursor-pointer">
                  About Us
                </h5>
              </Link>
              <ChevronDownIcon className="h-4 w-4 text-white" />
            </div>
            {about && (
              <div className="flex flex-col space-y-3 transition">
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Our Leadership</p>
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Ethics & Compliance</p>
              </div>
            )}
          </div>
          <div className="transition flex flex-col space-y-3 md:space-y-0">
            <div className="flex items-center space-x-3 justify-between border-b pb-3 border-b-white">
              <Link to="/products-services">
                <h5 onClick={handleDrop} className="font-semibold text-[.85rem] text-white cursor-pointer">
                  Product & Services
                </h5>
              </Link>
              <ChevronDownIcon className="h-4 w-4 text-white" />
            </div>
            {drop && (
              <div className="flex flex-col space-y-3 transition">
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Grains & Oilseeds</p>
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Edible Oils</p>
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition ">Rice</p>
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Specialty Grains & Seeds</p>
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Integrated Feed & Protein</p>
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Cotton</p>
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Rubber</p>
                <div className="transition flex flex-col space-y-2">
                  <div onClick={handleWoods} className="transition flex flex-row items-center space-x-4">
                    <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition underline underline-offset-4">Wood Products</p>
                    <ChevronDownIcon className="text-white h-4 w-4" />
                  </div>
                  {woods && (
                    <div className="flex flex-col space-y-4 px-10">
                      <p className="text-[0.75rem] md:text-md font-thin text-white hover:text-orange-800 transition">Forest Concessions</p>
                      <p className="text-[0.75rem] md:text-md font-thin text-white hover:text-orange-800 transition">Engaging & Supporting Communities</p>
                      <p className="text-[0.75rem] md:text-md font-thin text-white hover:text-orange-800 transition">Sustainable & Responsible Forestry</p>
                    </div>
                  )}
                </div>
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Commodity Financial Services</p>
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Freight Management</p>
              </div>
            )}
          </div>

          <Link to="/news">
            <h3 className="font-semibold text-[.85rem] text-white cursor-pointer">News</h3>
          </Link>
          <Link to="/careers">
            <h3 className="font-semibold text-[.85rem] text-white cursor-pointer">Careers</h3>
          </Link>
        </div>
      </div>
    </>
  );
}
