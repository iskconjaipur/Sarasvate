import React from "react";
import { motion } from "framer-motion";
import { Montserrat_Alternates, Poppins } from "next/font/google";

const pop = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const mons = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400"],
});

const industriesData = [
  {
    id: 1,
    title: "Real Estate and Construction",
    image: "/Home/indus/real.webp",
    description:
      "Transform your real estate dreams into reality with cutting-edge designs and exceptional construction expertise. Build your future with spaces crafted to perfection.",
  },
  {
    id: 2,
    title: "Education",
    image: "/Home/indus/edu.webp",
    description:
      "Shape the future with innovative educational solutions that inspire learning and growth. Empower your institution with cutting-edge technologies and interactive experiences.",
  },
  {
    id: 3,
    title: "Retail & Ecommerce",
    image: "/Home/indus/retail.webp",
    description:
      "Revolutionize your business with smart retail solutions and seamless eCommerce platforms designed to captivate customers and drive sales growth like never before.",
  },
  {
    id: 4,
    title: "Travel",
    image: "/Home/indus/hos.webp",
    description:
      "Unlock the world of luxury travel with innovative solutions designed for seamless journeys. Elevate your services and redefine the travel experience for your customers.",
  },
  {
    id: 5,
    title: "Industrial Sector",
    image: "/Home/indus/menufac.webp",
    description:
      "Enhance your industrial operations with state-of-the-art solutions engineered for efficiency and scalability. Maximize production and transform your industrial vision into reality.",
  },
  {
    id: 6,
    title: "Healthcare",
    image: "/Home/indus/hospital.webp",
    description:
      "Deliver exceptional healthcare services with innovative technologies that redefine patient care. Ensure superior outcomes with modern, reliable, and secure healthcare solutions.",
  },
  {
    id: 7,
    title: "Technology Services",
    image: "/Home/indus/tech(2).webp",
    description:
      "Stay ahead of the curve with cutting-edge technology services that empower your business. From IT solutions to cloud computing, we make the digital transformation seamless and impactful.",
  },
  {
    id: 8,
    title: "Professional Services",
    image: "/Home/indus/pro.webp",
    description:
      "Boost your business with tailored professional services designed to drive success. Experience strategic solutions that deliver measurable results and elevate your enterprise.",
  },
];

const Industries = () => {
  // Animation settings for the card hover and view
  const cardHoverEffect = {
    scale: 1.05,
    transition: { duration: 0.5 },
  };

  const fadeInEffect = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 px-4 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <motion.h2
            className={`text-2xl md:text-3xl font-extrabold text-gray-900 ${mons.className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Industries
          </motion.h2>
          <motion.p
            className={`text-gray-800 mt-2 mb-10 text-[20px] text-center ${mons.className}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            We specialize in providing customized solutions for your residential
            needs.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industriesData.map((industry) => (
            <motion.div
              key={industry.id}
              className="relative overflow-hidden group w-full h-[250px] md:h-[300px] rounded-3xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInEffect}
              whileHover={cardHoverEffect}
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              {/* Title: Visible by default, hidden on hover */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 py-4 text-center transition-all duration-300 group-hover:opacity-0 shadow-2xl shadow-black">
                <h3
                  className={`text-white text-[16px] md:text-[18px] font-bold ${mons.className}`}
                >
                  {industry.title}
                </h3>
              </div>

              {/* Content: Hidden by default, slides up on hover */}
              <div className="absolute bottom-0 left-0 w-full py-4 text-center transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                <h3
                  className={`text-white text-[18px] md:text-[20px] font-bold ${mons.className} mb-5`}
                >
                  {industry.title}
                </h3>
                <p
                  className={`text-white px-4 text-justify ${pop.className} text-[16px] md:text-[14px] mb-5`}
                >
                  {industry.description}
                </p>
                {/* <button
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-semibold py-[10px] px-[16px] mt-[10px] text-[12px] md:text-[14px] lg:text-[16px] flex items-center justify-center gap-2 ml-5 ${pop.className}`}
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4 md:w-5 md:h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
