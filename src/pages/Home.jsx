import React from "react";
import { Button, Carousel, Logo } from "../components";
import { Bars3CenterLeftIcon, CalendarIcon, ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon, PlayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { image2, image3, img1, img2, img3, img4, img5, mid1, mid2, mid3, mid4, mid5 } from "../constants";

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

const slides = [
  {
    id: 1,
    title: "Consumers want traceability & sustainability",
    image: mid1,
    description: "At we’re constantly increasing volumes of , working closely with farmers to improve supply chain data."
  },
  {
    id: 2,
    title: "Product & Application Development",
    image: mid2,
    description: "Use our natural ingredients to create delicious or refresh existing ones."
  },
  {
    id: 3,
    title: "Agri Science & Technology",
    image: mid3,
    description: "Learn how we enhance for better products."
  },
  {
    id: 4,
    title: "Digital Technology and Tools",
    image: mid4,
    description: "We offer unique for farming improvement. Enhanced data ensures supply chain transparency."
  },
  {
    id: 5,
    title: "Ingredient Innovation",
    image: mid5,
    description: "Discover how we drive ingredient innovation and sustainability.."
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

  const translateValue = -currentSlide * 100;

  return (
    <div className="h-screen w-full overflow-x-hidden">
      <div className="bg-[#860063] py-2">
        <div className="max-w-[1260px] mx-auto px-8">
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
        <div className="max-w-[1260px] mx-auto px-8">
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
        <div className="max-w-[1260px] mx-auto">
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
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col space-y-8 items-center">
            <div className="flex flex-col space-y-3 px-8">
              <h4 className="text-[#222] font-bold text-[1.5rem] leading-8 text-center">
                Five leading product platforms coming together to serve growing customer needs
              </h4>
              <p className="text-[1.125rem] font-light leading-6 text-center">
                If you need a reliable supplier of cocoa, coffee, dairy, nuts or spices, our sheer scale and specialist knowledge in each makes us a go-to. But
                the real value comes when we cross-pollinate our thinking to open up exciting new possibilities.
              </p>
            </div>

            <div className="w-full relative px-4 md:hidden">
              <Carousel slidesData={slidesData} autoSlide={true} />
            </div>
            <div className="hidden w-full md:flex flex-row justify-evenly space-x-5 items-center">
              {slidesData.map((item, index) => (
                <div className="flex-1 flex flex-col space-y-6  items-center bg-white rounded-[1.25rem] shadow-lg py-8 px-4 h-[22.25rem]">
                  <div className="flex flex-col space-y-3 items-center">
                    <img src={item.image} alt={item.title} className="h-[8.5rem] w-[8.5rem] rounded-full" />
                    <p className="text-[1.125rem] font-bold leading-6 text-[#222]">{item.title}</p>
                  </div>
                  <p className="text-[.875rem] leading-5  text-center font-light">{item.description.slice(0, 70)}</p>

                  <div className="flex flex-row items-center space-x-3">
                    <h6 className="text-[1rem] font-medium text-[#860063] leading-5">Read More</h6>
                    <div className="h-5 w-5 flex items-center justify-center rounded-full bg-[#860063]">
                      <ChevronRightIcon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="max-w-[1260px] mx-auto px-8">
          <div className="flex flex-col space-y-6">
            <h5 className="font-bold text-[1.5rem] leading-8 text-center">It's not a film. It's who we are.</h5>
            <div className="flex flex-col ">
              <div className="order-last md:order-none">
                <p className="text-center text-[1.125rem] font-normal leading-5">
                  olam food ingredients is now known as&nbsp;<b>ofi</b>. Focused on the raw materials and ingredient platforms that we're known for globally
                  <span>cocoa</span>,<span>coffee</span>,<span>dairy</span>,<span>nuts</span>, and
                  <span>spices</span>. We still offer everything we did before. What’s new is that we’re adding capabilities - especially in product development
                  - working closely with our customers, sharing our fresh ideas to inspire new concepts. Making it real at every step, from plant to palate.
                </p>
              </div>
              <div className="xl:w-[30%]  mb-8  border rounded-lg relative order-first md:order-none">
                <img src={image2} alt="staff1" className="object-cover w-full h-full rounded-lg" />
                <div className="bg-gradient-to-r md:bottom-60 md:left-[50%] xl:bottom-50 xl:right-[40%] xl:left-[45%] from-[#005bac] to-primary_green motion-safe:animate-ping-once text-white h-25 w-25 rounded-full absolute flex flex-col space-y-5 z-20 top-30 left-[35%] right-[45%] items-center justify-center">
                  <PlayIcon className="w-7 h-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-[1260px] mx-auto px-8">
          <div className="flex flex-col items-center">
            <div className="bg-[#f78c2a] h-[.375rem] w-[7.5rem] z-1" />
            <div className="flex flex-col items-center space-y-10 ">
              <h5 className="font-bold text-[1.5rem] leading-8 text-center pt-10">Traceable, delicious & nutritious?</h5>
              <div className="w-full relative px-20 md:hidden">
                <div className="overflow-hidden relative w-full">
                  <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(${translateValue}%)` }}>
                    {slides.map((slide, index) => (
                      <div key={index} className="flex-shrink-0 w-full px-4">
                        <div className="flex flex-col space-y-6 items-center bg-white rounded-[1.25rem] shadow-lg">
                          <img src={slide.image} alt="mid1" className="rounded-[1.25rem] h-[21.375rem] w-[100%] object-cover" />
                          <div className="flex flex-col space-y-5">
                            <h6 className="text-[1rem] font-bold leading-5">{slide.title}</h6>
                            <p className="text-[1.125rem] font-normal leading-6 text-[#4a4949]">{slide.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-[50%] -translate-x-1/2 flex flex-row items-center space-x-5">
                    <button className="bg-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={goToPreviousSlide}>
                      <ChevronLeftIcon className="h-6 w-6 text-white" />
                    </button>
                    <button className="bg-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={goToNextSlide}>
                      <ChevronRightIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
