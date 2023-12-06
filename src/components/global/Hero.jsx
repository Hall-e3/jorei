import React from "react";
import Button from "../primitives/Button";
import { image1 } from "../../constants";

export default function Hero() {
  return (
    <div className="h-[100vh] w-full bg-[#ff7000] overflow-hidden relative">
      <div className="h-full w-full flex flex-col md:flex-row">
        <div className="px-10 py-8 md:py-0 md:px-0 md:flex-1 flex items-center md:pl-42.5">
          <div className="flex flex-col space-y-6">
            <h4 className="text-black text-[36px] md:text-8xl font-medium leading-tight">
              Bridging the Gap for{" "}
              <span className="text-white">Gender Equity in Agriculture</span>
            </h4>
            <p className="text-[16px] font-normal md:text-xl md:font-light leading-1 text-black">
              Globally, one-third of the food produced is wasted before it
              reaches our plates. That’s food that could’ve nourished 828
              million chronically hungry people and millions in lost income for
              farmers.
            </p>
            <div>
              <Button
                text="Discover more"
                buttonStyle=" py-3 px-13 bg-white text-black text-[18px] md:text-md font-semibold rounded-sm"
              />
            </div>
          </div>
          <div className="flex items-center space-x-3 absolute bottom-22 right-40 md:left-40">
            <div className="p-1.5 border-2  rounded-full border-white"></div>
            <div className="p-1.5 border-2  rounded-full border-white"></div>
            <div className="p-1.5 border-2  rounded-full border-white"></div>
            <div className="p-1.5 border-2  rounded-full border-white"></div>
          </div>
        </div>
        <div className="md:flex-1">
          <picture>
            <img
              src={image1}
              alt="image1"
              className="w-full h-full bg-contain"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
