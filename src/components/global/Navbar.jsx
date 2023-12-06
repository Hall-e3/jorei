import React, { useEffect, useState } from "react";
import { head_logo } from "../../constants";
import { Link } from "react-router-dom";
import { Bars3CenterLeftIcon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";

const routes = [
  {
    id: 1,
    link: "/about",
    name: "About Us"
  },
  {
    id: 2,
    link: "/products-services",
    name: "Products & Services"
  },
  {
    id: 3,
    link: "/news",
    name: "News"
  },
  {
    id: 4,
    link: "/careers",
    name: "Careers"
  }
];

export default function Navbar() {
  const [woods, setWoods] = useState(false);
  const [about, setAbout] = useState(false);
  const [drop, setDrop] = useState(false);
  const [show, setShow] = useState(false);
  const [hoveredLinkId, setHoveredLinkId] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [sustainability, setSustainability] = useState(false);

  useEffect(() => {
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
  const handleSustainability = () => {
    setSustainability(!sustainability);
  };

  return (
    <>
      <div className={`w-full py-5 ${show ? "fixed top-0 border-b-2 border-stroke  bg-[#2e2d2c] drop-shadow-lg duration-700 z-99" : " bg-[#ff7000]"}`}>
        <div className="max-w-[1580px] mx-auto h-full px-10 md:px-0">
          <div className="h-full flex items-center justify-between gap-8">
            <Link to="/" className="flex-1 flex items-center gap-3">
              <img src={head_logo} alt="head_logo" className="h-10 md:h-13" />
            </Link>
            <div className="hidden md:flex md:flex-1 items-center justify-between gap-10">
              {routes.map((route) => (
                <Link key={route.id} to={`${route.link}`} onMouseEnter={() => setHoveredLinkId(route.id)} onMouseLeave={() => setHoveredLinkId(null)}>
                  <h4 className={`font-bold transition cursor-pointer  ${hoveredLinkId === route.id ? "hover:text-white" : ""}`}>{route.name}</h4>
                </Link>
              ))}
            </div>
            <div className="md:flex-1">
              <Bars3CenterLeftIcon onClick={() => setShowMobileMenu((prev) => !prev)} className="text-white w-7 h-7 cursor-pointer block md:hidden" />
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
          <div className="transition flex flex-col space-y-3 md:space-y-0">
            <div className="flex items-center space-x-3 justify-between border-b pb-3 border-b-white">
              <h5 onClick={handleSustainability} className="font-semibold text-[.85rem] text-white cursor-pointer">
                Sustainability
              </h5>
              <ChevronDownIcon className="h-4 w-4 text-white" />
            </div>
            {sustainability && (
              <div className="flex flex-col space-y-3 transition">
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Climate & Landscapes</p>
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Farms & Communities</p>
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Consumers</p>
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Facilities & Logistics</p>
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Our People</p>
                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Responsible Supply Chains</p>

                <p className="text-[0.75rem] font-normal  text-white hover:text-orange-800 transition">Policies & Positions</p>
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
