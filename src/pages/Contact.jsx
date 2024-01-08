import React from "react";
import { Button, Footer, Hero, HeroBottom, Input, TextArea } from "../components";
import { image4 } from "../constants";
import { ChevronRightIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const contact_details = [
  {
    id: 1,
    title: "Email",
    subtitle: "jorelagriculture@gmail.com",
    icon: <EnvelopeIcon className="w-5 h-5" />
  },
  {
    id: 2,
    title: "Address",
    subtitle: "Kampala,Uganda",
    icon: <MapPinIcon className="w-5 h-5" />
  },
  {
    id: 3,
    title: "Contact",
    subtitle: "+256 762 831647",
    icon: <PhoneIcon className="w-5 h-5" />
  }
];

export default function Contact() {
  return (
    <div className="h-screen w-full overflow-x-hidden">
      <Hero />
      <HeroBottom
        title="Contact Us"
        button={true}
        buttonText={
          <p className="flex items-center space-x-3">
            <Link to="/home">
              <p className="text-white font-semibold text-[15px] hover:text-primary_orange cursor-pointer">Home</p>
            </Link>
            <ChevronRightIcon className="w-4 h-4 text-white" />
            <p className="text-white font-bold text-[15px]">Contact Us</p>
          </p>
        }
        image={image4}
        componentStyle="bg-background2 py-18 bg-no-repeat bg-cover bg-center"
      />

      <div className="py-20 md:py-40 px-4 md:px-10">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-8">
          {contact_details.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-full p-4 md:p-8 border border-stroke hover:border hover:border-SECONDARY_GREEN rounded-md">
              <div className="flex flex-col space-y-8 bg-white rounded-[1.25rem]">
                <div className="flex flex-col space-y-3 items-center">
                  <div>{item.icon}</div>
                  <p className="text-[16px] text-center leading-6">{item.subtitle}</p>
                  <h6 className="text-[14px] font-medium text-[#860063] leading-5 text-center">{item.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-10 px-4 md:px-0">
        <div className="max-w-[1240px] mx-auto flex justify-center">
          <div className="w-full flex flex-col justify-center space-y-8">
            <h3 className="text-3xl font-bold text-center">Send Us A Message</h3>
            <div className="w-full border border-stroke rounded-md px-4 py-6 lg:px-10 lg:py-15 md:space-y-4 lg:space-y-8 space-y-8">
              <div className="w-full flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0">
                <Input label="Your Name" type="text" placeholder="Your Name" name="user_name" styles="border border-stroke rounded-md flex-1 py-3" />
                <Input label="Your Email" type="email" placeholder="Your Email*" name="user_email" styles="border border-stroke rounded-md flex-1 py-3" />
              </div>

              <div className="flex flex-col md:flex-row w-full md:space-x-6 space-y-3 md:space-y-0">
                <Input label="Your Phone" type="text" placeholder="Your Phone" name="user_phone" styles="border border-stroke rounded-md py-3" />
                <Input label="Subject" type="text" placeholder="Subject" name="subject" styles="border border-stroke rounded-md py-3" />
              </div>
              <div>
                <TextArea rows={10} placeholder="Start writing your message" styles="border border-stroke rounded-md" name="message" />
              </div>
              <div>
                <Button text="Send" buttonStyle="bg-[#f78c2a] text-white py-3 text-lg font-bold rounded-md px-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
