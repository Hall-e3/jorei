import React from "react";
import Logo from "./Logo";
import {
  Bars3CenterLeftIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  NewspaperIcon,
  XMarkIcon
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const routes = [
  {
    id: 1,
    link: "/news",
    name: "News & Events",
    icon: <NewspaperIcon className="w-5 h-5 text-[#f78c2a]" />
  },
  {
    id: 2,
    link: "/careers",
    name: "Careers",
    icon: <BriefcaseIcon className="w-5 h-5 text-[#f78c2a]" />
  },
  {
    id: 3,
    link: "/location",
    name: "Location",
    icon: <MapPinIcon className="w-5 h-5 text-[#f78c2a]" />
  },
  {
    id: 4,
    link: "/about",
    name: "About Us"
  },
  {
    id: 5,
    link: "/products-services",
    name: "Products & Services"
  }
];

export default function Hero() {
  const [search, setSearch] = React.useState(false);
  const [hoveredLinkId, setHoveredLinkId] = React.useState(0);
  return (
    <div className="bg-SECONDARY_GREEN py-2">
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
              <Bars3CenterLeftIcon className="text-white w-7 h-7 cursor-pointer" />
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
                    <Link key={route.id} to={`${route.link}`} onMouseEnter={() => setHoveredLinkId(route.id)} className="flex flex-row items-center space-x-2">
                      {route.icon}
                      <p className={`text-white text-[15.3px]  ${hoveredLinkId === 4 || hoveredLinkId === 5 ? "hover:text-[#f78c2a]" : ""}`}>{route.name}</p>
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
  );
}
