import React from "react";
import { Footer, Hero, HeroBottom } from "../components";
import { image4 } from "../constants";
import { products } from "../utils/data";

export default function Products() {
  return (
    <div className="h-screen w-full">
      <Hero />
      <HeroBottom
        title="Delivering Value for Customers"
        button={true}
        buttonStyle="flex bg-[#f78c2a] rounded-md h-[2.625rem] text-center justify-center py-[.625rem] px-[2.8125rem] md:px-6 md:py- text-[#fff]"
        buttonText="Product Customization"
        componentStyle="color_black"
        image={image4}
      />
      <div className="py-20 px-[30px] md:px-0">
        <div className="max-w-[1260px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0 md:gap-20">
            <div>
              <h3 className="text-title-sm sm:text-title-md md:text-title-xl font-semibold text-[#2e2d2c] leading-tight">
                We offer our customers a<span className="text-[#ff7000]"> deep understanding</span> of market needs, built through our on-the-ground presence in
                Asia and Africa over the last 30 years.
              </h3>
            </div>
            <div className="flex flex-col space-y-6">
              <p className="text-[16px] leading-1 text-[#2e2d2c]">
                Our operating capabilities in global origination, processing, trading, logistics, distribution and risk management set us apart from our peers,
                while our strategic manufacturing assets in key destination markets strengthen our service to customers.
              </p>
              <p className="text-[16px] leading-1 text-[#2e2d2c]">
                We seek to empower you to imagine extraordinary answers to the world’s everyday food supply challenges, fulfilling your own ambitions and
                positively influencing our global business and the world around us.
              </p>
              <p className="text-[16px] leading-1 text-[#2e2d2c]">
                Because of the scale of the challenge, we encourage colleagues to take ownership of decisions and explore new ways of doing things.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 px-10 md:px-0">
        <div className="max-w-[1580px] mx-auto">
          <div className="w-full flex flex-col space-y-10 ">
            <div className="flex flex-col space-y-6 items-center">
              <h3 className="text-title-sm sm:text-title-md md:text-title-xl text-center md:text-left font-semibold text-[#2e2d2c]">Our Products & Services</h3>
              <p className="text-[16px] leading-1 text-[#2e2d2c] text-center">
                Whether it's working with rice farmers in Asia, sourcing cotton in Australia, or producing value-added products in Africa, we help our customers
                around the world meet the increasing demand for food, feed and fibre.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  id={product.color}
                  className="relative flex group flex-col h-[12.5rem] md:h-[45vh] w-[100%] justify-between rounded-lg p-[1.25rem] md:pr-0 md:pt-8 md:pb-8  bg-[#2e2d2c] border border-[#ff62ab] transition-all duration-300 ease-in-out transform">
                  <div className="flex flex-col space-y-6">
                    <h4 className="text-white text-[18px] font-semibold leading-tight">{product.title}</h4>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[15px] text-white">{product.subtitle}</p>
                  </div>
                  <div className="absolute right-[.375rem] bottom-[.625rem] md:relative md:right-6 md:bottom-0 md:flex md:justify-end">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-[3.75rem] w-[3.75rem] md:h-[120px] md:w-[120px] object-contain transition-all duration-300 ease-in-out transform group-hover:hidden "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
