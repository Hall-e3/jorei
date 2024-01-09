import React from "react";

export default function CareerComponent() {
  return (
    <div className="md:py-20 py-10 px-10 bg-[#f8f6f8]">
      <div className="max-w-[1260px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
          <h3 className="text-title-md md:text-title-xl text-center md:text-start flex flex-col font-semibold text-[#00b2e7] leading-tight">
            Efficient
            <span className="text-[#ff5baf]">Dynamic</span>
            <span className="text-[#8e75f8]">Innovative</span>
            <span className="text-[#ffc400]">Cooperative</span>
            <span className="text-[#00a865]">Eco-Friendly</span>
          </h3>

          <div className="flex flex-col space-y-3">
            <p className="text-[15px] md:text-[16px] font-normal leading-snug md:leading-1 text-black">
              Embarking on a transformative journey, our services resonate across diverse spheres, intricately weaving together communities, agriculture, and
              global markets. We're not merely suppliers; we're catalysts for positive change, leaving an indelible mark on the agricultural landscape.
            </p>
            <p className="text-[15px] md:text-[16px] font-normal leading-snug md:leading-1 text-black">
              With boots on the ground, our dedicated teams engage with sesame farmers, fostering sustainable practices that echo through the supply chain. The
              heartbeat of our operations echoes in the African soil, where cocoa sourcing becomes more than a transaction—it's a commitment to quality, ethical
              practices, and empowerment.
            </p>
            <p className="text-[15px] md:text-[16px] font-normal leading-snug md:leading-1 text-black">
              Our value-added production, an art form in itself, transforms raw materials into culinary wonders. From the sun-kissed fields of sesame to the
              rich cocoa plantations, we craft products that transcend mere commodities, embodying the essence of craftsmanship and quality.
            </p>
            <p className="text-[15px] md:text-[16px] font-normal leading-snug md:leading-1 text-black">
              Navigating the dynamic currents of global demand, we stand as pillars supporting the edifice of food, feed, and fiber requirements. Rooted in
              Africa, we extend our reach globally, contributing to a sustainable and resilient future for both producers and consumers alike. Join us on this
              voyage where every service rendered becomes a stroke in the masterpiece of agricultural evolution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
