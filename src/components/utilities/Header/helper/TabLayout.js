"use client";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import QuoteForm from "./QuoteForm";
import { tabs } from "./headerData";

const services = [
  { name: "Nitya Seva", path: "/nitya-seva" },
  { name: "Special Pooja", path: "/special-puja" },
  { name: "Yajna Samskaras", path: "/yajna-samskaras" },
  { name: "Festivals", path: "/festivals" },
];

const TabLayout = ({ closeDrawer }) => {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const popupRef = useRef(null);

  // Memoize the outside click handler
  const handleClickOutside = useCallback(
    (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleCloseLoginPopup();
      }
    },
    [popupRef]
  );

  useEffect(() => {
    if (isLoginPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLoginPopupOpen, handleClickOutside]);

  const handleLoginClick = () => {
    setIsLoginPopupOpen(true);
  };

  const handleCloseLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  const handleLoginSuccess = () => {
    handleCloseLoginPopup();
    closeDrawer();
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div className="">
      <div className="bg-[#ffffffbb] backdrop-blur-md rounded-lg m-auto w-11/12 h-full shadow-lg z-30 transition-transform transform duration-300 ease-in-out overflow-y-scroll">
        <ul className="flex flex-col p-4">
          {/* <button type="button" className="self-end p-2" onClick={closeDrawer}>
            <svg
              className="w-7 h-7 text-white"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button> */}

          <div className="pt-4">
            <div className="p-[10px] font-bold text-[16px]">
              <Link
                href="/"
                className="hover:text-[#0e00bf] text-black hover:no-underline no-underline"
              >
                Home
              </Link>
            </div>
            <div className="p-[10px] font-bold text-[16px]">
              <Link
                href="/about-us"
                className="hover:text-[#0e00bf] text-black hover:no-underline no-underline"
              >
                About Us
              </Link>
            </div>

            {/* Accordion for Services */}
            {tabs.map((tab, index) => (
              <div className="p-[10px] font-bold text-[16px]" key={tab.title}>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-black hover:text-[#0e00bf] focus:outline-none flex justify-between items-center w-full"
                >
                  {tab.title}
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openDropdownIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`mt-2 overflow-y-auto bg-[#ffffff99] overflow-hidden transition-all duration-300 ease-in-out ${
                    openDropdownIndex === index
                      ? "max-h-80 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul>
                    {tab.subtitles.map((subtitle) => (
                      <li key={subtitle.name}>
                        <Link
                          href={subtitle.path}
                          className="block px-4 py-2 text-black hover:bg-gray-700 rounded-lg"
                          onClick={() => {
                            setOpenDropdownIndex(null); // Close dropdown after clicking
                            closeDrawer();
                          }}
                        >
                          {subtitle.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="p-[10px] font-bold text-[16px]">
              <Link
                href="/sdlc"
                className="hover:text-[#0e00bf] text-black hover:no-underline no-underline"
              >
                SDLC
              </Link>
            </div>

            <div className="p-[10px] font-bold text-[16px]">
              <Link
                href="/contact-us"
                className="hover:text-[#0e00bf] text-black hover:no-underline no-underline"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </ul>
      </div>

      {/* Login Popup */}
      {isLoginPopupOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div
            ref={popupRef}
            className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md mx-auto"
          >
            <button
              onClick={handleCloseLoginPopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <QuoteForm
              onClose={handleCloseLoginPopup}
              onLoginSuccess={handleLoginSuccess}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TabLayout;
