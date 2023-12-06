import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Button } from "../components";
import { image1 } from "../constants";

export default function About() {
  return (
    <div>
      <div>
        <div className="flex flex-row items-center space-x-3">
          <span>Home</span>
          <ChevronRightIcon className="w-4 h-4" />
          <span>About Us</span>
          <ChevronRightIcon className="w-4 h-4" />
          <span>Global Footprint</span>
        </div>
      </div>
      <div className="">
        <div className="flex flex-row items-center">
          <div className="flex-1">
            <h5>Around the world and around the corner</h5>
            <p>
              As a global company, we’re renowned for leveraging our global sourcing network and on the ground intel so we can offer a safe, secure supply of
              traceable and sustainable ingredients.
            </p>
            <Button text="Download ofi factsheet" />
          </div>
          <div className="flex-none">
            <div>
              <img src={image1} alt="image2" className="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#f78c2a] rounded-[3.125rem] h-[.375rem] w-[7.5rem] z-1 absolute left-[calc(50% - 3.75rem)]" />
        <p>
          In agriculture, you learn to expect the unexpected. A harvest might be lower than anticipated. Prices can drop or climb dramatically due to over- or
          undersupply. But, thanks to being spread across the world and sourcing ingredients from multiple origins, at ofi we can manage these risks. We’re also
          deeply involved at every stage of our supply which means we can help you manage quality, food safety, traceability, and security of supply for greater
          control and reliability. And it doesn’t stop there. Through our global scale, integrated global supply chains and teams on the ground in origins, our
          solutions benefit from our continuous focus on innovation from the farms through to the innovation labs and kitchens.
        </p>
      </div>
    </div>
  );
}
