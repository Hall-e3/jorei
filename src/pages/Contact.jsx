import React, { useEffect, useState } from "react";
import { Button, Footer, Hero, HeroBottom, Input, TextArea } from "../components";
import { image4 } from "../constants";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { contact_details } from "../utils/data";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = React.useState({
    user_name: "",
    user_email: "",
    subject: "",
    body: ""
  });
  console.log(values);
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  useEffect(() => emailjs.init("kATYIbLE5YZ6B8Rm2"), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_3tf5qqe";
    const templateId = "template_n6661n7";
    try {
      setLoading(true);

      const { user_name, user_email, subject, body } = values;

      await emailjs.send(serviceId, templateId, {
        user_name,
        user_email,
        subject,
        message: body
      });
      setMessage("Your email has been successfully submitted");
      // alert("email successfully sent check inbox");
    } catch (error) {
      alert("Failed to send email. Please try again later.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (message !== null) {
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  }

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
        componentStyle="bg-background3 py-18 bg-no-repeat bg-cover bg-center"
      />

      <div className="py-20  px-4 md:px-10">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-8">
          {contact_details.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-full p-4 md:p-8 border border-stroke hover:border hover:border-SECONDARY_GREEN rounded-md">
              <div className="flex flex-col space-y-6 bg-white rounded-[1.25rem]">
                <div className="flex flex-col space-y-2 items-center">
                  <div>{item.icon}</div>
                  <div>
                    <p className="text-[16px] text-center leading-6">{item.subtitle}</p>
                    {item.subtitle1 && <p className="text-[16px] text-center leading-6">{item.subtitle1}</p>}
                  </div>
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
            <form onSubmit={handleSubmit} className="w-full border border-stroke rounded-md px-4 py-6 lg:px-10 lg:py-15 md:space-y-4 lg:space-y-8 space-y-8">
              <div className="w-full flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0">
                <Input
                  label="Your Name"
                  value={values.user_name}
                  name="user_name"
                  type="text"
                  placeholder="Your Name"
                  styles="border border-stroke rounded-md flex-1 py-3"
                  required
                  onChange={handleInputChange}
                />
                <Input
                  label="Your Email"
                  type="email"
                  value={values.user_email}
                  name="user_email"
                  placeholder="Your Email*"
                  styles="border border-stroke rounded-md flex-1 py-3"
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex flex-col md:flex-row w-full md:space-x-6 space-y-3 md:space-y-0">
                <Input
                  label="Subject"
                  value={values.subject}
                  name="subject"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Subject"
                  styles="border border-stroke rounded-md py-3"
                  required
                />
              </div>
              <div>
                <TextArea
                  onChange={handleInputChange}
                  value={values.body}
                  name="body"
                  required
                  rows={10}
                  placeholder="Start writing your message"
                  styles="border border-stroke rounded-md"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  text={loading ? "Sending ...." : "Send"}
                  buttonStyle="bg-[#f78c2a] text-white py-3 text-lg font-bold rounded-md px-4"
                  disabled={loading}
                />
              </div>
              {message && message !== null && <div className="text-[15px] font-bold bg-green-400 text-green-900 py-2 px-3 w-full">{message}</div>}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
