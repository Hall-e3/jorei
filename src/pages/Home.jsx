import React from "react";
import { Button, Carousel, Footer, Hero } from "../components";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon, PlayIcon, ShareIcon } from "@heroicons/react/24/solid";
import {
  image1,
  image2,
  image3,
  img1,
  img2,
  img3,
  img4,
  img5,
  m1,
  m2,
  m3,
  m4,
  m5,
  mid1,
  mid2,
  mid3,
  mid4,
  mid5,
  new1,
  new2,
  new3,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6
} from "../constants";

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

const data = [
  {
    id: 1,
    title: "Savory & Culinary",
    image: p5,
    description:
      "It’s great when you can respond to trends. It’s even better when you spark them yourself. Together, we can create sauces, nut-based cheeses, and spice blends that fulfil existing desires or even feed new ones. How about putting a new spin on traditional dishes with trend-led ingredients like our choco mole sauce inspired by the Oaxaca region of Mexico? Using authentic spices and premium cocoa, this sauce is rich in antioxidants with a deep color and enticing aroma that will delight the senses.  "
  },
  {
    id: 2,
    title: "Bakery",
    image: p2,
    description:
      "Your next cookie filling, cake topping, pie crust, biscuit crumb or bread mix starts with our playground of ingredients. Let’s get busy combining tastes, textures and colors that not only delight consumers, but also the people and planet around them. Give sweet treats a natural twist by combining our cocoa powder and nut pastes to create indulgent center-filled cookies with a premium texture. "
  },
  {
    id: 3,
    title: "Dairy & Desserts",
    image: p1,
    description:
      "Emerging flavor trends in milks, yogurts and ice-creams are a real opportunity to create healthy, tasty, formulations that consumers can indulge in. Why not try new twists on familiar pairings, such as chocolate doughnut and coffee flavored ice cream? In cocoa alone, our R&D specialists can help tackle challenges in both dairy and plant-based desserts: from a unique methodology to pair cocoa powders with pea, nut, or oat bases to address taste, to reducing bitterness of FMP formats with our Fresco Cacao."
  },
  {
    id: 4,
    title: "Snacking",
    image: p6,
    description:
      "Join our search for the next trail mix, cereal, or snack bar hit. Together, we can find new ingredient combinations that fulfil consumer desire for taste, texture, nutrition, and traceability. One idea? Take consumers on a journey through the world’s most vibrant cuisines with seasoned nut recipes drawing on our Blends of the Americas spice range, including Blanched Almonds with Spicy Citrus Coast and Candied Cashews with Warm Sedona Sunset.  "
  },
  {
    id: 5,
    title: "Beverages",
    image: p3,
    description:
      "From cold brewed spiced coffee to golden milk made with dairy powder or nuts to suit modern consumer preferences. Even the most basic ingredient can make a real difference. With us, you can customize and co-create from plant to palate to find taste, texture and nutritional profiles that make your hot, cold, or plant-based beverages unique."
  },
  {
    id: 6,
    title: "Chocolate & Confectionery",
    image: p4,
    description:
      "The world loves cocoa, in chocolate, confectionery, ice cream, bars and desserts. The need to make these better for our bodies and planet has never been greater. We’re bringing lots of fresh thinking to the table – like reducing sugar and sodium in recipes with clever cocoa creations and vegan, organic and traceable solutions. How about creating delicious vegan ‘milk’ chocolate bars with our gluten-free and grain-free cashew flour?"
  }
];

const datas = [
  {
    id: 1,
    image: m1,
    description: "1 in 5 chocolate bars consumed globally use our cocoa beans and products"
  },
  {
    id: 2,
    image: m2,
    description: "The coffee beans we supply can provide around 90 billions cups of coffee"
  },
  {
    id: 3,
    image: m3,
    description: "Our annual volume of dairy products can make 19 billion slices of cheese"
  },
  {
    id: 4,
    image: m4,
    description: "Almonds we supply will produce enough flour to bake 350 million cup cakes"
  },
  {
    id: 5,
    image: m5,
    description: "We add taste and flavor globally with 270 million bottles of spices per year"
  }
];

const news = [
  {
    id: 1,
    image: new1,
    title: "ofi's Carbon Scenario Planner wins prestigious Food Ingredients Europe Award",
    date: "Nov 28, 2023",
    description:
      "’s Carbon Scenario Planner (CSP), a new digital tool developed to help food and beverage manufacturers model the impact of different scenarios for reducing greenhouse gas emissions has won the 2023 Sustainability Innovation Award at Food Ingredients Europe in Frankfurt. This is the "
  },
  {
    id: 2,
    image: new2,
    title: "Cultivating the next generation of process engineers",
    date: "Nov 28, 2023",
    description:
      "’s Carbon Scenario Planner (CSP), a new digital tool developed to help food and beverage manufacturers model the impact of different scenarios for reducing greenhouse gas emissions has won the 2023 Sustainability Innovation Award at Food Ingredients Europe in Frankfurt. This is the "
  },
  {
    id: 3,
    image: new3,
    title: "ofi Employee Spotlight: Horacio Bueno and Shannon Arballo, North America",
    date: "Nov 28, 2023",
    description:
      "’s Carbon Scenario Planner (CSP), a new digital tool developed to help food and beverage manufacturers model the impact of different scenarios for reducing greenhouse gas emissions has won the 2023 Sustainability Innovation Award at Food Ingredients Europe in Frankfurt. This is the "
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [one, setOne] = React.useState(false);
  const [two, setTwo] = React.useState(false);
  const [three, setThree] = React.useState(false);
  const [four, setFour] = React.useState(false);

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
      <Hero />
      <div className="bg-SECONDARY_GREEN pt-8 pb-15 " id="curve">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4">
            <div className="md:flex-1 flex flex-col space-y-4 md:space-y-6 md:items-start md:pr-40">
              <h1 className="text-center md:text-start text-white text-title-md md:text-title-xl font-bold leading-10 md:leading-tight">
                Naturally good food & beverage ingredients and solutions
              </h1>
              <div className="flex flex-col space-y-3">
                <p className="text-center md:text-start text-white text-[16px] font-light">
                  At <span>Ofi</span> we believe in raw potential of nature, ingredients, people, technology,ideas.
                </p>
                <p className="text-center md:text-start text-white text-[16px] font-light">We don't just accept what's put in front of us.</p>
                <p className="text-center md:text-start text-white  text-[16px] font-light">
                  We ask, what else could this be? At every level we use our imagination and expertise to find more creative, productive and sustainable ways of
                  doing things.
                </p>
              </div>
            </div>
            <div className="md:flex-none">
              <div className="border-2 border-white rounded-full p-4">
                <img src={image2} alt="image2" className="h-[15.5rem] w-[15.5rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 px-8 hidden">
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
          <div className="flex flex-col space-y-8 md:space-y-10 items-center">
            <div className="flex flex-col space-y-3 px-8 md:px-0">
              <h4 className="text-[#222] font-bold text-title-md md:text-title-xl leading-8 text-center">
                Five leading product platforms coming together to serve growing customer needs
              </h4>
              <p className="text-[16px] font-light leading-6 text-center">
                If you need a reliable supplier of cocoa, coffee, dairy, nuts or spices, our sheer scale and specialist knowledge in each makes us a go-to. But
                the real value comes when we cross-pollinate our thinking to open up exciting new possibilities.
              </p>
            </div>

            <div className="w-full relative px-4 md:hidden">
              <Carousel slidesData={slidesData} autoSlide={true} />
            </div>
            <div className="hidden w-full md:flex flex-row justify-evenly space-x-5 items-center ">
              {slidesData.map((item, index) => (
                <div className="flex-1 flex flex-col space-y-6  items-center bg-white rounded-md shadow-lg py-8 px-4 h-[22.25rem] group  transition-all duration-[800ms]">
                  <div className="flex flex-col space-y-3 items-center">
                    <img src={item.image} alt={item.title} className="h-[8.5rem] w-[8.5rem] rounded-full group-hover:hidden" />
                    <p className="text-[16px] font-bold leading-6 text-[#222]">{item.title}</p>
                  </div>
                  <p className="text-[15px] leading-5  text-center font-light">{item.description.slice(0, 70)}</p>

                  <div className="flex flex-row items-center space-x-3">
                    <h6 className="text-[15px] font-medium text-[#860063] leading-5">Read More</h6>
                    <div className="h-4 w-4 flex items-center justify-center rounded-full bg-[#860063]">
                      <ChevronRightIcon className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 md:py-0 ">
        <div className="max-w-[1260px] mx-auto px-8 md:px-20">
          <div className="flex flex-col space-y-6 md:space-y-10 py-20">
            <h5 className="font-bold text-title-md md:text-title-xl leading-8 text-center">It's not a film. It's who we are.</h5>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="h-full md:w-1/3 md:overflow-hidden order-last md:order-none">
                <p className="text-center md:text-start text-[16px] text- text-[#333] font-normal leading-5 md:leading-7">
                  Olam food ingredients is now known as<b>ofi</b>. Focused on the raw materials and ingredient platforms that we're known for globally
                  <span>cocoa</span>,<span>coffee</span>,<span>dairy</span>,<span>nuts</span>, and
                  <span>spices</span>. We still offer everything we did before. What’s new is that we’re adding capabilities - especially in product development
                  - working closely with our customers, sharing our fresh ideas to inspire new concepts. Making it real at every step, from plant to palate.
                </p>
              </div>
              <div className="w-full mb-8 md:mb-0 md:w-2/3  border rounded-lg relative order-first md:order-none ">
                <div className="md:h-[300px] w-full">
                  <img src={image2} alt="staff1" className="object-cover w-full h-full rounded-lg" />
                </div>
                <div className="bg-gradient-to-r md:bottom-60 md:left-[50%] xl:bottom-50 xl:right-[40%] xl:left-[45%] from-[#005bac] to-primary_green motion-safe:animate-ping-once text-white h-25 w-25 rounded-full absolute flex flex-col space-y-5 z-20 top-30 left-[35%] right-[45%] items-center justify-center">
                  <PlayIcon className="w-7 h-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 md:py-20 relative">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <div className="bg-[#f78c2a] h-[.375rem] w-[7.5rem] z-1" />
            </div>
            <div className="flex flex-col items-center space-y-4 md:space-y-10">
              <h5 className="font-bold text-title-md md:text-title-xl leading-8 text-center pt-10">Traceable, delicious & nutritious?</h5>
              <div className="w-full md:hidden">
                <div className="overflow-hidden w-full">
                  <div className="flex transition-transform ease-in-out duration-500 py-5" style={{ transform: `translateX(${translateValue}%)` }}>
                    {slides.map((slide, index) => (
                      <div key={index} className="flex-shrink-0 w-full px-8">
                        <div className="flex flex-col space-y-6 items-center bg-white rounded-[1.25rem] shadow-lg h-[70vh]">
                          <img src={slide.image} alt="mid1" className="rounded-[1.25rem] h-[21.375rem] w-[100%] object-cover" />
                          <div className="flex flex-col space-y-5 px-6 pt-10 pb-10">
                            <h6 className="text-[17px] font-bold leading-5">{slide.title}</h6>
                            <p className="text-[16px] font-normal leading-6 text-[#4a4949]">{slide.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-18 md:bottom-8 left-[50%] -translate-x-1/2 flex flex-row items-center space-x-5">
                    <button className="bg-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={goToPreviousSlide}>
                      <ChevronLeftIcon className="h-6 w-6 text-white" />
                    </button>
                    <button className="bg-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={goToNextSlide}>
                      <ChevronRightIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden w-full md:flex">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                  <div className="col-span-1">
                    <div key={slides[0].id} className="h-full flex-shrink-0 w-full">
                      <div className="flex flex-col space-y-6 items-center bg-white rounded-[1.25rem] shadow-lg h-full">
                        <img src={slides[0].image} alt="mid1" className="rounded-tl-[1.25rem] rounded-tr-[1.25rem] h-[21.375rem] w-[100%] object-cover" />
                        <div className="flex flex-col space-y-5 px-6 pt-10 pb-10">
                          <h6 className="text-[16px] font-bold leading-5">{slides[0].title}</h6>
                          <p className="text-[15px] font-normal leading-6 text-[#4a4949]">{slides[0].description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-rows-2 gap-10">
                      <div className="flex flex-row items-center justify-between space-x-10">
                        <div key={slides[1].id} className="flex-shrink-1 w-full">
                          <div className="flex flex-col space-y-3 items-center bg-white rounded-[1.25rem] shadow-lg">
                            <img src={slides[1].image} alt="mid1" className="rounded-tl-[1.25rem] rounded-tr-[1.25rem]  object-cover" />
                            <div className="flex flex-col space-y-5 px-6 py-3">
                              <h6 className="text-[16px] font-bold leading-5">{slides[1].title}</h6>
                              <p className="text-[15px] font-normal leading-6 text-[#4a4949]">{slides[1].description}</p>
                            </div>
                          </div>
                        </div>
                        <div key={slides[0].id} className="flex-shrink-1 w-full h-full">
                          <div className="h-full flex flex-col space-y-3 items-center justify-center bg-white rounded-[1.25rem] shadow-lg">
                            <div className="flex flex-col space-y-5 px-6 py-3">
                              <h6 className="text-[16px] font-bold leading-5">{slides[0].title}</h6>
                              <p className="text-[15px] font-normal leading-6 text-[#4a4949]">{slides[0].description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div key={slides[4].id} className="flex-shrink-1 w-full">
                          <div className="flex flex-row space-x-3 items-center bg-white rounded-[1.25rem] shadow-lg">
                            <img src={slides[4].image} alt="mid1" className="rounded-tl-[1.25rem] rounded-tr-[1.25rem]  object-cover" />
                            <div className="flex flex-col space-y-5 px-6 py-3">
                              <h6 className="text-[16px] font-bold leading-5">{slides[4].title}</h6>
                              <p className="text-[15px] font-normal leading-6 text-[#4a4949]">{slides[4].description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 ">
                    <div key={slides[3].id} className="h-full flex-shrink-0 w-full ">
                      <div className="flex flex-col justify-between items-center bg-[#860063] rounded-[1.25rem] shadow-lg h-full">
                        <div className="flex flex-col space-y-5 px-6 pt-10 pb-10">
                          <h6 className="text-[16px] font-bold leading-5 text-white">{slides[3].title}</h6>
                          <p className="text-[15px] font-normal leading-6 text-white">{slides[3].description}</p>
                        </div>
                        <img src={slides[3].image} alt="mid1" className="rounded-bl-[1.25rem] rounded-br-[1.25rem] h-[21.375rem] w-[100%] object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                text="Read about ofi innovation"
                buttonStyle="flex bg-[#860063] rounded-[1.875rem] h-[2.625rem] text-center py-[.625rem] px-[2.8125rem] text-[#fff]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 relative">
        <div className="max-w-[1260px] mx-auto md:px-20">
          <div className="flex flex-col space-y-10 ">
            <div className="flex flex-col space-y-8 px-8">
              <h4 className="block md:hidden text-title-md md:text-title-xl font-bold leading-6 text-center text-[#222]">
                It's not a new idea. It's a chance for infinite possibilities.
              </h4>
              <div className="hidden md:flex md:flex-col md:space-y-1">
                <h4 className=" text-title-md md:text-title-xl font-bold leading-6 text-center text-[#222]">It's not a new idea.</h4>
                <h4 className=" text-title-md md:text-title-xl font-bold leading-6 text-center text-[#222]">
                  It's not a new idea. It's a chance for infinite possibilities.
                </h4>
              </div>
              <p className="text-[16px] md:text-md text-center font-light leading-6 text-[#4a4949]">
                It’s easy to make something taste amazing. It’s much harder to fill it with nutritional benefits too. And what about making sure it’s ethically
                sourced and right for the planet? Whatever category you’re serving, let’s supersede the benchmark with our portfolio of highly complementary
                natural and delicious ingredients. Co-creation is easy!
              </p>
            </div>
            <div className="">
              <div className="hidden md:block px-10 md:px-0">
                <div className="max-w-[1580px] mx-auto">
                  <div className="flex flex-col space-y-8">
                    <div className=" ">
                      <div className="flex items-center space-x-1">
                        <p className="px-4 py-3.5 rounded-tr-[10px] rounded-tl-[10px] bg-[#f8f6f8] text-[#860063] font-medium text-[15px]">Bakery</p>
                        <p className="px-6 py-3.5 rounded-tr-[10px] rounded-tl-[10px] bg-[#860063] text-white font-medium text-[15px]">Beverages</p>
                        <p className="px-4 py-3.5 rounded-tr-[10px] rounded-tl-[10px] bg-[#860063] text-white font-medium text-[15px]">
                          Chocolate & Confectionery
                        </p>
                        <p className="px-4 py-3.5 rounded-tr-[10px] rounded-tl-[10px] bg-[#860063] text-white font-medium text-[15px]">Dairy & Desserts</p>
                        <p className="px-4 py-3.5 rounded-tr-[10px] rounded-tl-[10px] bg-[#860063] text-white font-medium text-[15px]">Savory & Culinary</p>
                        <p className="px-4 py-3.5 rounded-tr-[10px] rounded-tl-[10px] bg-[#860063] text-white font-medium text-[15px]">Snacking</p>
                      </div>
                      <div className="py-20 bg-[#f8f6f8] px-20 rounded-lg">
                        <div className="flex flex-row justify-between items-center">
                          <div className="flex-1 pr-40">
                            <p className="leading-snug font-normal text-[16px] text-[#333]">
                              Our well-established network of farmers and cooperatives, and our skills in logistics and risk management enable us to secure
                              supplies and deliver them to our customers consistently. Our technologies enhance product traceability, adding value for our
                              customers.
                            </p>
                          </div>
                          <div className="flex-none">
                            <div className="border-2 border-[#ccc] rounded-full p-[.5rem]">
                              <img src={p4} alt="image2" className="h-[15.5rem] w-[15.5rem] rounded-full object-contain" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:hidden">
                <div className="overflow-hidden w-full">
                  <div className="flex transition-transform ease-in-out duration-500 py-5" style={{ transform: `translateX(${translateValue}%)` }}>
                    {data.map((item, index) => (
                      <div key={index} className="flex-shrink-0 w-full px-8">
                        <div className="flex flex-col space-y-8 bg-white rounded-[1.25rem] shadow-lg py-8">
                          <div className="bg-[#860063] flex items-center justify-center py-[1.375rem] rounded-tl-[1rem] rounded-tr-[1rem]">
                            <h6 className="text-[17px] font-bold leading-6 text-[#222]">{item.title}</h6>
                          </div>
                          <div className="flex flex-col space-y-6 items-center bg-[#f8f6f8]">
                            <p className="text-[16px] text-center font-light leading-6 text-[#4a4949]">{item.description.slice(0, 200)}....</p>
                            <h6 className="text-[16px] font-medium text-[#860063] leading-5 text-center">Read More</h6>
                            <div>
                              <div className="border-2 border-[#ccc] rounded-full p-[.5rem]">
                                <img src={item.image} alt="image2" className="h-[15.5rem] w-[15.5rem] rounded-full" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-12 left-[50%] -translate-x-1/2 flex flex-row items-center space-x-5">
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
      <div className="py-20 relative">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col space-y-10 ">
            <h4 className="text-title-md md:text-title-xl font-bold leading-6 text-center text-[#222]">ofi is already part of your everyday life…</h4>

            <div className="">
              <div className="w-full md:hidden">
                <div className="overflow-hidden w-full">
                  <div className="flex transition-transform ease-in-out duration-500 py-5" style={{ transform: `translateX(${translateValue}%)` }}>
                    {datas.map((item, index) => (
                      <div key={index} className="flex-shrink-0 w-full px-8">
                        <div className="flex flex-col space-y-8 bg-white rounded-[1.25rem]">
                          <div className="flex flex-col space-y-6 items-center">
                            <div>
                              <img src={item.image} alt="image2" className="h-[15.5rem] w-[15.5rem] rounded-full" />
                            </div>
                            <p className="text-[16px] text-center font-light leading-6 text-[#4a4949]">{item.description}</p>
                            <h6 className="text-[16px] font-medium text-[#860063] leading-5 text-center">Read More</h6>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-12 left-[50%] -translate-x-1/2 flex flex-row items-center space-x-5">
                    <button className="bg-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={goToPreviousSlide}>
                      <ChevronLeftIcon className="h-6 w-6 text-white" />
                    </button>
                    <button className="bg-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={goToNextSlide}>
                      <ChevronRightIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden w-full md:flex flex-row justify-evenly space-x-5 items-center">
                {datas.map((item) => (
                  <div key={item.id} className="flex-1 flex flex-col space-y-6 border border-white  items-center bg-white py-8 px-4 h-[22.25rem] group hover:border hover:border-SECONDARY_GREEN duration-300 transition hover:rounded-md">
                    <div className="flex flex-col space-y-3 items-center">
                      <img src={item.image} alt={item.title} className="h-[8.5rem] w-[8.5rem] rounded-full group-hover:scale-125 duration-300" />
                      <p className="text-[1.125rem] font-bold leading-6 text-[#222]">{item.title}</p>
                    </div>
                    <p className="text-[.875rem] leading-5  text-center font-light">{item.description.slice(0, 70)}</p>

                    <div className="flex flex-row items-center space-x-3 cursor-pointer">
                      <h6 className="text-[15px] font-medium text-[#860063] leading-5">Read More</h6>
                      <div className="h-4 w-4  flex items-center justify-center rounded-full bg-[#860063]">
                        <ChevronRightIcon className="h-3 w-3 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 md:py-20 relative bg-[#f8f6f8]">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <div className="bg-[#f78c2a] h-[.375rem] w-[7.5rem] z-1" />
            </div>
            <div className="flex flex-col items-center space-y-4 md:space-y-10 ">
              <h5 className="font-bold text-title-md md:text-title-xl leading-8 text-center pt-10">Read ofi news</h5>
              <div className="w-full md:hidden">
                <div className="overflow-hidden w-full">
                  <div className="flex transition-transform ease-in-out duration-500 py-5" style={{ transform: `translateX(${translateValue}%)` }}>
                    {news.map((slide, index) => (
                      <div key={index} className="flex-shrink-0 w-full px-6">
                        <div className="flex flex-col space-y-6 items-center bg-white rounded-[1.25rem] shadow-lg">
                          <img src={slide.image} alt="mid1" className="rounded-tl-[1.25rem] rounded-tr-[1.25rem] h-[21.375rem] w-[100%] object-cover" />

                          <div className="w-full flex flex-row items-center justify-between px-6">
                            <Button text="Articles" buttonStyle="flex bg-[#860063] rounded-[1.875rem] text-[16px]  text-center px-6 py-2 text-[#fff]" />
                            <p className="text-[.85rem] font-medium text-[#860063] leading-5 text-center">{slide.date}</p>
                          </div>
                          <div className="flex flex-col space-y-5 px-6">
                            <h6 className="text-[17px] font-bold leading-5">{slide.title}</h6>
                            <p className="text-[16px] font-normal leading-6 text-[#4a4949]">{slide.description}</p>
                          </div>
                          <div className="w-full flex flex-row items-center justify-between px-6 pb-3">
                            <h6 className="text-[1rem] font-medium text-[#860063] leading-5 text-center">Read More</h6>
                            <div className="h-12 w-12 flex items-center justify-center rounded-full shadow-lg">
                              <ShareIcon className="w-7 h-7" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-18 md:bottom-8 left-[50%] -translate-x-1/2 flex flex-row items-center space-x-5">
                    <button
                      className="bg-white border border-[#860063] h-4 w-4 flex items-center justify-center rounded-full"
                      onClick={goToPreviousSlide}></button>
                    <button className="bg-white border border-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={goToNextSlide}></button>
                    <button className="bg-white border border-[#860063] h-4 w-4 flex items-center justify-center rounded-full" onClick={goToNextSlide}></button>
                  </div>
                </div>
              </div>
              <div className="hidden w-full md:flex flex-row justify-evenly space-x-5 items-center">
                {news.map((item) => (
                  <div key={item.id} className="flex flex-col space-y-6 items-center bg-white rounded-[1.25rem] shadow-lg">
                    <img src={item.image} alt="mid1" className="rounded-tl-[1.25rem] rounded-tr-[1.25rem] h-[21.375rem] w-[100%] object-cover" />

                    <div className="flex flex-col space-y-6 items-center px-6 md:px-4">
                      <div className="w-full flex flex-row items-center justify-between px-6">
                        <Button text="Articles" buttonStyle="flex bg-[#860063] text-[14px] rounded-[1.875rem]  text-center px-6 py-2 text-[#fff]" />
                        <p className="text-[14px] font-medium text-[#860063] leading-5 text-center">{item.date}</p>
                      </div>
                      <div className="flex flex-col space-y-5 px-6">
                        <h6 className="text-[16px] font-bold leading-5">{item.title}</h6>
                        <p className="text-[15px] font-normal leading-6 text-[#4a4949]">{item.description.slice(0, 100)}</p>
                      </div>
                      <div className="w-full flex flex-row items-center justify-between px-6 pb-3">
                        <h6 className="text-[15px] font-medium text-[#860063] leading-5 text-center">Read More</h6>
                        <div className="h-9 w-9 flex items-center justify-center rounded-full shadow-lg">
                          <ShareIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                text="Read more news"
                buttonStyle="flex bg-[#860063] rounded-[1.875rem] h-[2.625rem] text-center py-[.625rem] px-[2.8125rem] md:px-6 md:py- text-[#fff]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 relative bg-[#f78c2a] px-10">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col space-y-8 md:space-y-6 items-center">
            <h4 className="font-bold text-title-md md:text-title-xl leading-6 text-center text-[#222]">ofi is already part of your everyday life…</h4>
            <p className="text-center text-[16px] font-light text-white">We’d love to hear from you. Get in touch today.</p>
            <Button
              text="Contact Us"
              buttonStyle="text-[16px] font-light border-[.0625rem] border-white text-white h-[2.625rem] max-w-[21.4375rem] py-[.625rem] px-[2.8125rem] flex item-center rounded-[1.875rem]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
