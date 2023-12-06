import React from "react";
import { Button, Logo } from "../components";
import { Bars3CenterLeftIcon, CalendarIcon, ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { image2, image3, img1, img2, img3, img4, img5 } from "../constants";

const slidesData = [
  {
    id: 1,
    title: "Nuts",
    image: img1,
    description:
      "From the orchard to the store, we’re at the forefront of global nut production – serving the needs of customers and farmers, and working to reduce our environmental impact."
  },
  {
    id: 2,
    title: "Diary",
    image: img2,
    description: "Our dairy ingredients satisfy your business needs while helping you create tasty, nutritious and convenient products across many categories.."
  },
  {
    id: 3,
    title: "Spices",
    image: img3,
    description:
      "Spices are the foundation of flavors that delight consumers. When you buy from us, we can offer you a reliable, high quality, sustainable supply."
  },
  {
    id: 4,
    title: "Cocoa",
    image: img4,
    description:
      "We supply cocoa ingredients to customers all over the world, working with partners across the supply chain to create indulgent treats for consumers and a positive future for cocoa."
  },
  {
    id: 5,
    title: "Coffee",
    image: img5,
    description:
      "We source and supply high-quality green and soluble coffee globally while building partnerships to secure the future of coffee for farmers and coffee lovers everywhere."
  }
];

export default function Home() {
  const [search, setSearch] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slidesData.length) % slidesData.length);
  };

  React.useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

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
      <div className="py-10 px-8">
        <div className="max-w-[1480px] mx-auto">
          <div className="bg-[#f78c2a] px-8 py-4 rounded-[0.45rem] flex flex-col space-y-4 items-center justify-evenly overflow-hidden">
            <div className="flex flex-row items-center space-x-3">
              <CalendarIcon className="w-7 h-7 text-white" />
              <p className="text-white font-semibold">November 28-30</p>
            </div>
            <div>
              <p className="text-[1.125rem] text-white font-bold text-center">It's not a product. It's a partnership.</p>
              <p className="text-white font-extralight text-center">Meet ofi at FIE in Frankfurt on stand 3.1 H40</p>
            </div>
            <div className="h-[60px]">
              <img src={image3} alt="image4" className="h-full w-full" />
            </div>
            <div>
              <Button
                text="Meet ofi at Fi Europe"
                buttonStyle=" py-[.625rem] px-[2.8125rem] bg-white text-[#860063] text-[.875rem] text-center text-center font-semibold rounded-[1.875rem] max-w-[21.4375rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="max-w-[1480px] mx-auto px-8">
          <div className="flex flex-col space-y-8 items-center">
            <div className="flex flex-col space-y-3">
              <h4 className="text-[#222] font-bold text-[1.5rem] leading-8 text-center">
                Five leading product platforms coming together to serve growing customer needs
              </h4>
              <p className="text-[1.125rem] font-light leading-6 text-center">
                If you need a reliable supplier of cocoa, coffee, dairy, nuts or spices, our sheer scale and specialist knowledge in each makes us a go-to. But
                the real value comes when we cross-pollinate our thinking to open up exciting new possibilities.
              </p>
            </div>
            <div className="overflow-hidden relative">
              <div className="flex transition-transform transform ease-out duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slidesData.map((item, index) => (
                  <div
                    key={item.id}
                    className={`w-full h-full translate-x-0 transform transition-transform duration-300 ${
                      index === currentSlide ? "translate-x-100" : "translate-x-0"
                    }`}>
                    <div className="flex flex-col space-y-6 items-center bg-white rounded-[1.25rem] shadow-lg py-10 px-10 w-[20rem]">
                      <div className="flex flex-col space-y-3 items-center">
                        <img src={item.image} alt={item.title} className="h-[12.5rem] w-[12.5rem] rounded-full" />
                        <p className="text-[1.125rem] font-bold leading-6 text-[#222]">{item.title}</p>
                      </div>
                      <p className="text-[.875rem] leading-5  text-center font-light">{item.description}</p>

                      <div className="flex flex-row items-center space-x-3">
                        <h6 className="text-[1rem] font-medium text-[#860063] leading-5">Read More</h6>
                        <div className="h-5 w-5 flex items-center justify-center rounded-full bg-[#860063]">
                          <ChevronRightIcon className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-10 flex flex-row items-center space-x-5">
                <button className="" onClick={goToPreviousSlide}>
                  <ChevronLeftIcon className="h-8 w-8 text-[#860063]" />
                </button>
                <button className="" onClick={goToNextSlide}>
                  <ChevronRightIcon className="h-8 w-8 text-[#860063]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
