"use client";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div className="relative  h-[650px] overflow-hidden">
      {/* Background Video */}
      <video
        src="/Home/home-video-new.mp4"
        className="z-0 object-cover h-screen w-full absolute top-0 left-0"
        autoPlay
        loop
        muted
      />

      {/* Overlay Content */}
      <div className="relative bg-black/50 z-10 h-[650px] flex flex-col justify-center items-center text-center px-4">
        <div className="text-white">
          <motion.span
            className="font-bold sm:text-lg text-sm"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            WELCOME TO
          </motion.span>
          <motion.h1
            className={`lg:text-7xl text-3xl px-5 ${dancing.className}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Saraswate
          </motion.h1>
          <motion.span
            className="font-medium sm:text-lg text-base"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unifying Vision and Innovation with Heart and Precision
          </motion.span>
        </div>

        {/* Location Button */}
        <Link href="/contact/#map" className="absolute bottom-24 hover:no-underline">
          <motion.button
            type="button"
            className="text-white bg-gradient-to-r from-[#d17a29] to-[#FFA500] rounded-full hover:from-pink-500 hover:to-yellow-500 font-medium text-base lg:text-xl px-14 py-3 flex gap-2 items-center transition-transform transform hover:scale-105"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* <img src="/Home/Hero/location.svg" alt="Location Icon" className="w-6 h-6" /> */}
            <span>Get Start</span>
          </motion.button>
        </Link>
      </div>

      {/* Animated SVG Waves with Framer Motion */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
        <motion.svg
          className="hero-waves relative block w-full h-28"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 22 200 15"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
          </defs>
          {/* Wave 1 */}
          <motion.g
            className="wave wave1"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <use xlinkHref="#wave-path" x="50" y="3" fill="#ffffff" opacity="0.5"></use>
          </motion.g>
          {/* Wave 2 */}
          <motion.g
            className="wave wave2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            <use xlinkHref="#wave-path" x="50" y="0" fill="#ffffff" opacity="0.3"></use>
          </motion.g>
          {/* Wave 3 */}
          <motion.g
            className="wave wave3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <use xlinkHref="#wave-path" x="50" y="9" fill="#ffffff" opacity="0.1"></use>
          </motion.g>
        </motion.svg>
      </div>
    </div>
  );
};

export default Hero;