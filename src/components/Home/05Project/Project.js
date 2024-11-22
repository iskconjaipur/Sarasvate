"use client";
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const pop = Poppins({
  subsets: ["latin"],
  weight: ["400"], // Multiple weights for different elements
});

// Animation configuration for bottom to top motion
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const cardData = [
  {
    title: "Online Puja",
    description:
      "Seamlessly integrate with HRMS for synchronized attendance data, optimizing workforce management and enhancing overall operational efficiency. Seamlessly integrate with HRMS for synchronized attendance data, optimizing workforce management and enhancing overall operational efficiency.",
    points: [
      "Streamlined Workforce Management",
      "Real-Time Attendance Tracking",
      "Enhanced Operational Efficiency",
    ],
    image: "Home/puja1.png", // Replace with actual image path
    icon: "/path-to-your-icon/hrms-icon.png", // Replace with actual icon path
  },
  {
    title: "GTIC",
    description:
      "Unlock seamless distribution and real-time inventory oversight with our advanced warehouse solution, automating your supply chain for rapid operations, optimal stock levels, and cost-effective storage.",
    points: [
      "Real-Time Inventory",
      "Optimized Stock Levels",
      "Cost-Effective Storage",
    ],
    image: "Home/gtic2.png", // Replace with actual image path
    icon: "/path-to-your-icon/inventory-warehouse-icon.png", // Replace with actual icon path
  },
  {
    title: "ISKCON jaipur",
    description:
      "Integrate with ERP to streamline business processes, boost productivity, and ensure efficient resource management.",
    points: [
      "Efficient Resource Management",
      "Boosted Productivity",
      "Streamlined Business Processes",
    ],
    image: "Home/jai1.png", // Replace with actual image path
    icon: "/path-to-your-icon/erp-icon.png", // Replace with actual icon path
  },
];

const Deities = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // No card is hovered by default
  const [isMdScreen, setIsMdScreen] = useState(false); // Screen size tracker

  // Effect to track screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMdScreen(true);
        setHoveredIndex(0); // Automatically set first card as active for screens ≥ md
      } else {
        setIsMdScreen(false);
        setHoveredIndex(null); // Reset hover index on small screens
      }
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up event listener on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#d17a2942]">
     <div className="md:mx-40 mx-2">
     <h1 className={` ${pop.className} pt-16 pb-2 xl:px-12 px-5 text-center text-transparent text-[24px] md:text-[48px] bg-clip-text bg-gradient-to-r from-[#2980d1] to-black font-bold`}>
        Our Solutions
      </h1>
      <p className={`${pop.className} text-center mb-5 text-[14px] md:text-[20px]`}>Whether you are a startup, midsize or an enterprise-grade company, our bespoke software solutions are developed to streamline your business operations and fuel your growth.</p>
     </div>
      <div className="overflow-hidden pb-10">
        <div className="flex flex-col md:flex-row xl:flex-nowrap justify-center items-center xl:h-[550px] mb-5 gap-5 md:gap-0">
          {cardData.map((data, index) => {
            // Use useInView hook
            const { ref, inView } = useInView({
              triggerOnce: true, // Trigger animation only once
              threshold: 0.3, // Trigger when 30% of the card is visible
            });

            return (
              <div
                key={index}
                className={`relative cursor-pointer overflow-hidden bg-center bg-no-repeat transition-all duration-700 ease-in-out ${
                  isMdScreen && index === hoveredIndex
                    ? "w-[90vw] md:w-[70%] h-[300px] md:h-[550px]"
                    : "w-[90vw] md:w-[145px] h-[500px] md:h-[550px]"
                }`}
                style={{
                  backgroundImage: `url(${data.image})`,
                  backgroundSize: "cover",
                }}
                onMouseEnter={() => isMdScreen && setHoveredIndex(index)}
                onMouseLeave={() => isMdScreen && setHoveredIndex(0)} // Reset to first card on mouse leave
                ref={ref} // Attach ref to each card
              >
                {/* Transparent black overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-75 z-10"></div>
                {/* Conditionally render titles, descriptions, and points */}
                {isMdScreen && hoveredIndex === index ? (
                  <div className="relative z-20 text-white font-bold text-center md:text-3xl text-lg p-5">
                    <motion.h2
                      className={`text-4xl text-left`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}} // Trigger framer motion when in view
                      transition={{ duration: 0.5 }}
                    >
                      {data.title}
                    </motion.h2>
                    <motion.p
                      className={`mt-4 text-lg text-justify mr-10 break-words ${pop.className}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}} // Animate text
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {data.description}
                    </motion.p>

                    <div className="flex">
                      <div className="flex flex-col">
                        {/* Highlighted Points with Custom SVGs */}
                        <motion.ul
                          className="text-left mt-5"
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate list
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          {data.points.map((point, i) => (
                            <li
                              key={i}
                              className={`flex items-center text-[16px] my-1 ${pop.className}`}
                            >
                              {/* Custom SVG before each point */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4 mr-2 text-white"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                              {point}
                            </li>
                          ))}
                        </motion.ul>

                        {/* Animated View More Button */}
                        <motion.div
                          className="mt-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <button
                            className={`bg-blue-500 text-[20px] text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 ${pop.className}`}
                          >
                            View More
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="ml-2 w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </motion.div>
                      </div>
                      {/* Right Bottom Logo */}
                      {/* <div className="absolute right-5 bottom-5">
                        <img
                          className="w-20 h-20"
                          src="Home/jaipur.png"
                          alt="logo"
                        />
                      </div> */}
                    </div>
                  </div>
                ) : (
                  <div
                    className="relative z-20 text-white font-bold text-left sm:text-3xl text-lg p-5"
                    style={{
                      marginTop: isMdScreen ? "350px" : "0px",
                      textShadow: "2px 2px black",
                      transform:
                        isMdScreen && hoveredIndex !== index
                          ? "rotate(270deg)"
                          : "rotate(0)",
                      transformOrigin: "center",
                    }}
                  >
                    {/* Animated title */}
                    <motion.h2
                      className={`text-xl md:text-3xl text-left whitespace-nowrap ${pop.className}`}
                      initial="hidden"
                      animate="visible"
                      variants={textVariants}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      {data.title}
                    </motion.h2>

                    {/* Animated description */}
                    <motion.div
                      className="md:hidden overflow-hidden"
                      initial="hidden"
                      animate="visible"
                      variants={textVariants}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <p
                        className={`${pop.className} text-[12px] text-justify break-words mt-4`}
                      >
                        {data.description}
                      </p>

                      <div className="flex flex-wrap mt-4">
                        <div className="flex flex-col">
                          {/* Highlighted Points with Custom SVGs */}
                          <ul className="text-left">
                            {data.points.map((point, i) => (
                              <li
                                key={i}
                                className={`flex items-center text-[12px] ${pop.className}`}
                              >
                                {/* Custom SVG before each point */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  className="w-4 h-4 mr-2 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v16m8-8H4"
                                  />
                                </svg>
                                {point}
                              </li>
                            ))}
                          </ul>

                          {/* Animated View More Button */}
                          <motion.div
                            className="mt-8"
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 1, ease: "easeOut" }}
                          >
                            <button
                              className={`${pop.className} bg-blue-500 text-[16px] text-white px-2 py-2 rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="ml-2 w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Deities;
