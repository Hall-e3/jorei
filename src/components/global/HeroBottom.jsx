import React from "react";
import Button from "../primitives/Button";

export default function HeroBottom({ image, button, id, componentStyle, buttonText, buttonStyle, title, subtitle }) {
  return (
    <div className={`bg-SECONDARY_GREEN pt-8 pb-15 ${componentStyle}`} id="curve">
      <div className="max-w-[1260px] mx-auto px-10 md:px-0">
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-15">
          <div className="md:flex-1 flex flex-col space-y-4 md:space-y-6 md:items-start md:pr-40">
            <h1 className="text-center md:text-start text-white text-title-sm sm:text-title-md md:text-title-xl font-bold leading-tight">
              {title}
            </h1>
            {subtitle && <div className="flex flex-col space-y-3">{subtitle}</div>}
            {button && <Button text={buttonText} buttonStyle={buttonStyle} />}
          </div>
          <div className="md:flex-none">
            <div className="border-2 border-white rounded-full p-4">
              <img src={image} alt="image2" className="h-[15.5rem] w-[15.5rem] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
