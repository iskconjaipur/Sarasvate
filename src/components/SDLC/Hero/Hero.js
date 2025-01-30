"use client";

import { motion } from "framer-motion";
import { Yatra_One } from "next/font/google";

const marker = Yatra_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <section className="h-[95vh] sm:p-12 pt-12 pb-8">
      <div
        className="bg-cover sm:rounded-[50px] h-full bg-fixed"
        style={{ backgroundImage: "url('/sdlc/bg.jpeg')" }}
      >
        <div className="bg-[black]/75 sm:rounded-[50px] h-full">
          <div className="flex items-center justify-center h-full xl:gap-16 gap-10 sm:py-20 px-5 sm:px-10 max-w-screen-xl m-auto">
            <div className="lg:w-full sm:w-10/12 w-full">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`${marker.className} mb-10 text-white text-5xl w-4/5 xl:text-6xl`}
              >
                Software Development Life Cycle
              </motion.h1>
              <div className="text-white text-base sm:text-lg text-justify">
                <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-4"
                >
                  The Software Development Life Cycle (SDLC) is a systematic
                  process used to develop software with the highest quality and
                  lowest cost in the shortest possible time. We follow a
                  well-structured SDLC that ensures we deliver exceptional
                  software solutions that meet your business needs. By following
                  a consistent SDLC, we can guarantee that every phase of your
                  project is handled efficiently—from concept to deployment.
                </motion.p>
              </div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex justify-center md:justify-start"
              >
                <button className="bg-[#08b242] mt-10 font-medium text-white text-xl px-20 py-1.5 hover:bg-transparent hover:border hover:border-[#08b242] hover:text-[#08b242] duration-500 transition-all">
                  Get Quote
                </button>
              </motion.div>
            </div>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="p-0.5 rounded-3xl border-gray-600 border hidden lg:block"
            >
              <img
                // src="/Images/Connect/Youth/main.jpg"
                src="https://www.freecodecamp.org/news/content/images/2020/02/SDLC_-_Software_Development_Life_Cycle.jpg"
                className="min-w-96 h-96 object-cover rounded-3xl hover:scale-105 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
