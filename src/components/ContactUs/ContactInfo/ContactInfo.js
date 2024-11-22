"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhoneAlt,
  faPaperPlane,
  faMapMarkerAlt,
  faEnvelope,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Sriracha } from "next/font/google";

const sriracha = Sriracha({
  subsets: ["latin"],
  weight: ["400"],
});

const ContactInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await fetch("https://", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          contact: data.phone,
          queryText: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (response.status === 201) {
        toast.success("Form submitted successfully!");
        reset();
      } else {
        toast.error(result.error || "Failed to submit the form");
        console.error(result);
      }
    } catch (error) {
      console.error("There was an error!", error);
      toast.error(
        "There was an error submitting the form. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="py-20 p-2 md:px-10 xl:px-16"
        style={{
          background: "linear-gradient(135deg, #f0f0f0, #B7D1E8 100%)",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        <h2
          className={`pl-1 font-medium md:text-4xl text-center md:text-left text-black`}
        >
          <span className="text-[#008DFF]">Connect With Us</span>
        </h2>
        <hr className="pb-10 md:pt-2 m-0 w-full border-t border-gray-400 md:w-2/3" />

        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row gap-12 items-center sm:text-justify max-w-screen-xl w-full">
            <div className="flex-1 w-full">
              <div className="p-6 bg-white shadow-md rounded-md transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Contact Form
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <FontAwesomeIcon
                      icon={faUser}
                      className="absolute top-10 left-3 text-[#3b5998]"
                    />
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className={`mt-1 block w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      className="absolute top-10 left-3 text-[#3b5998]"
                    />
                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Phone number must be 10 digits",
                        },
                      })}
                      className={`mt-1 block w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                      placeholder="Your Phone Number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                      className={`mt-1 block w-full pl-4 pr-4 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      rows="4"
                      placeholder="Your Message"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#3b5998] text-white rounded-md shadow-md hover:bg-[#334b85] flex items-center justify-center"
                      disabled={loading}
                    >
                      {loading ? (
                        <span>Loading...</span>
                      ) : (
                        <>
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            className="mr-2"
                          />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Div: Address and Contact Info */}
            <div className="flex-1 w-full text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h4
                  className={`text-xl font-bold lg:text-4xl mb-12 ${sriracha.className}`}
                >
                  Contact Information
                </h4>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:space-x-8">
                  <div className="flex flex-col items-center lg:items-start lg:mb-0">
                    <div className="flex items-center mb-2 gap-2">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-[#8a3f00] h-5"
                      />
                      <p className="font-bold text-lg">Address</p>
                    </div>
                    <p className="text-sm text-center lg:text-left">
                      ISKCON Jaipur, Sri Sri Giridhari Dauji Temple, Village
                      Dholai, New Sanganer Road, Opp. Vijay Path, Mansarovar,
                      Jaipur - 302020 Rajasthan (India)
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:space-x-8 max-lg:gap-8">
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="flex items-center mb-2 gap-2">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-[#8a3f00] h-5"
                      />
                      <p className="font-bold text-lg">Email Address</p>
                    </div>
                    <p className="text-sm">sarasvate@gmail.com</p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="flex items-center mb-2 gap-2">
                      <FontAwesomeIcon
                        icon={faPhoneAlt}
                        className="text-[#8a3f00] h-5"
                      />
                      <p className="font-bold text-lg">Phone Number</p>
                    </div>
                    <p className="text-sm">+91 9090909090</p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <p className="font-bold">Announcement</p>
                    <div className="flex space-x-4 mt-2">
                      <a
                        href="https://www.instagram.com/iskconjaipur.official/?igsh=MWRqbnl4M3o2ZXpucw%3D%3D"
                        className="text-[#8a3f00] hover:text-[#8a3f00]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a
                        href="https://www.facebook.com/iskconjaipurofficial/"
                        className="text-[#8a3f00] hover:text-[#8a3f00]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                      <a
                        href="https://wa.me/9649689649"
                        className="text-[#8a3f00] hover:text-[#8a3f00]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faWhatsapp} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10" style={{ width: "100%", height: "400px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.278485730383!2d75.74708597543663!3d26.83109337669586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db57ac44ce2e3%3A0xd3f1209a496907b5!2sISKCON%20Temple%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1715681136297!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactInfo;
