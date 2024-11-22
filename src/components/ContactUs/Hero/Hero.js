"use client";
import React, { useState, useEffect } from "react";
import { Permanent_Marker, Sriracha } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const dancing = Sriracha({
  subsets: ["latin"],
  weight: ["400"],
});

const zoomVariants = {
  initial: { scale: 1 },
  animate: { scale: 1.1 },
};

const popOutTitleVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const images = [
  "https://strapiprod.knowlarity.com/uploads/contact_us_5a6756504e.jpg",
  "https://strapiprod.knowlarity.com/uploads/contact_us_5a6756504e.jpg",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="relative z-0">
      <div className="relative h-[90vh] w-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex} // Use the index as key to trigger AnimatePresence
            className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
            variants={zoomVariants}
            transition={{ duration: 1.5 }} // Adjust duration for smooth transition
          />
        </AnimatePresence>
        <div className="inset-0 bg-black/30 absolute" />
        <div className="absolute top-[30vh] w-full">
          <motion.div
            className="text-white w-full -my-4 sm:-my-5 md:-my-10 flex justify-center "
            style={{ textShadow: "0px 0px 15px black, 0px 0px 15px black" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h1 className={`${dancing.className} text-8xl mt-20`}>
              Contact Us 
            </h1>
          </motion.div>
        </div>
      </div>
      {/* <div className="relative bg-[url('/Contact/wave.png')] h-[150px] bg-cover bg-center w-full z-10 mt-[-50px]"></div> */}
    </div>
  );
};

export default Hero;
