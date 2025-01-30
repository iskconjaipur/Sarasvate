"use client";
import React from "react";
import { Salsa } from "next/font/google";
import Link from "next/link";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { tabs } from "./footerData";

const salsa = Salsa({
  subsets: ["latin"],
  weight: "400",
});

const FooterPage = () => {
  return (
    <>
      <div
        className={`${salsa.className} py-10 bg-gradient-to-r from-gray-600 to-[#085fa5]`}
      >
        <footer className="flex flex-col items-center text-white">
          <div className="flex flex-wrap justify-between w-full max-w-6xl mb-8">
            {/* Column 4 */}
            <div className="flex-1 px-5 text-center">
              <h5 className="text-2xl text-[#ff7400] mb-2">Our Contact</h5>
              <div>
                <p className="text-white">
                  ISKCON Jaipur, Sri Sri Giridhari Dauji Temple, Village Dholai,
                  New Sanganer Road, Opp. Vijay Path, Mansarovar, Jaipur -
                  302020 Rajasthan (India)
                </p>
              </div>
              <div className="flex flex-col items-center space-y-1 mt-5">
                <div className="flex items-center space-x-3">
                  <AiOutlinePhone color="#ff7400" />
                  <span>+91 96496 89649</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AiOutlineMail color="#ff7400" />
                  <span>iskconjaipur@gmail.com</span>
                </div>
              </div>
            </div>
            
            {/* Column 1 */}
            <div className="flex-1 px-5 mb-5 text-center md:mb-0">
              <h1 className="text-2xl text-[#ff7400] mb-2">
                Our {tabs[0].title}
              </h1>
              <ul className="space-y-2">
                {tabs[0].subtitles.map((subtitle) => (
                  <li key={subtitle.name}>
                    <Link href={subtitle.path} className="hover:underline">
                      {subtitle.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex-1 px-5 mb-5 text-center md:mb-0">
              <h1 className="text-2xl text-[#ff7400] mb-2">{tabs[1].title}</h1>
              <ul className="space-y-2">
                {tabs[1].subtitles.map((subtitle) => (
                  <li key={subtitle.name}>
                    <Link href={subtitle.path} className="hover:underline">
                      {subtitle.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex-1 px-5 text-center">
              <h1 className="text-2xl text-[#ff7400] mb-2">Company</h1>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:underline text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:underline text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:underline text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:underline text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
              <h1 className="text-2xl text-[#ff7400] mb-2 mt-6">{tabs[2].title}</h1>
              <ul className="space-y-2">
                {tabs[2].subtitles.map((subtitle) => (
                  <li key={subtitle.name}>
                    <Link
                      href={subtitle.path}
                      className="hover:underline text-white"
                    >
                      {subtitle.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FooterPage;
