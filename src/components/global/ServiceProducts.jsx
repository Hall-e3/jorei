import React from "react";
import {
  animal_feed,
  hover_cfs,
  hover_cotton,
  hover_edibleoils,
  hover_freight,
  hover_grains,
  hover_rice,
  hover_rubber,
  hover_sgrains,
  hover_wood,
  wood_cutout
} from "../../constants";

export default function ServiceProducts() {
  return (
    <div className="md:py-20 pb-20 ">
      <div className="max-w-[1260px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-15">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-6 ">
              <h4 className="text-title-md md:text-title-xl font-semibold leading-1">Our Products & Services</h4>
              <p className="text-[16px] leading-1">
                Whether it's working with rice farmers in Asia, sourcing cotton in Australia, or producing value-added products in Africa, we help our customers
                around the world meet the increasing demand for food, feed and fibre.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img src={wood_cutout} alt="wood cutout" />
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center gap-8 md:flex-1">
                <img src={hover_grains} alt="hover rice" className="w-[3.875rem] h-[3.875rem] " />
                <p className="text-[16px]">Grains & Oilseeds</p>
              </div>
              <div className="flex items-center gap-8 md:flex-1">
                <img src={hover_edibleoils} alt="hover rice" className="w-[3.875rem] h-[3.875rem] " />
                <p className="text-[16px]">Edible Oils</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <img src={hover_rice} alt="hover rice" className="w-[3.875rem] h-[3.875rem] " />
                <p className="text-[16px]">Rice</p>
              </div>
              <div className="flex items-center gap-4 flex-1">
                <img src={hover_sgrains} alt="hover rice" className="w-[3.875rem] h-[3.875rem] " />
                <p className="text-[16px]">Specialty Grains & Seeds</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <img src={animal_feed} alt="hover rice" className="w-[3.875rem] h-[3.875rem] " />
                <p className="text-[16px]">Integrated Feed & Protein</p>
              </div>
              <div className="flex items-center gap-4 flex-1">
                <img src={hover_cotton} alt="hover rice" className="w-[3.875rem] h-[3.875rem] " />
                <p className="text-[16px]">Cotton</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <img src={hover_rubber} alt="hover rice" className="w-[3.875rem] h-[3.875rem] " />
                <p className="text-[16px]">Rubber</p>
              </div>
              <div className="flex items-center gap-4 flex-1">
                <img src={hover_wood} alt="hover rice" className="w-[3.875rem] h-[3.875rem] " />
                <p className="text-[16px]">Wood Products</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <img src={hover_cfs} alt="hover rice" className="w-[3.875rem] h-[3.875rem] " />
                <p className="text-[16px]">Commodity Financial Services</p>
              </div>
              <div className="flex items-center gap-4 flex-1">
                <img src={hover_freight} alt="hover rice" className="w-[3.875rem] h-[3.875rem] " />
                <p className="text-[16px]">Freight Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
