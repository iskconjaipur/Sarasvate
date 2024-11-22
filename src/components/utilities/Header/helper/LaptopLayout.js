import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import QuoteForm from "./QuoteForm";
import { tabs } from "./headerData";

const LaptopLayout = ({ toggleDrawer = () => {} }) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Track which dropdown is open
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false); // Renamed from isLoginPopupOpen to isQuoteFormOpen
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRefs = useRef([]); // Array of refs for each dropdown

  const getLinkClassName = (path) => {
    return `transition duration-300 ease-in-out transform hover:scale-105 ${
      pathname === path ? "text-[#FF7400]" : "text-white hover:text-yellow-300"
    }`;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openDropdownIndex !== null &&
        dropdownRefs.current[openDropdownIndex] &&
        !dropdownRefs.current[openDropdownIndex].contains(event.target)
      ) {
        setOpenDropdownIndex(null); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdownIndex]);

  const handleGetQuoteClick = (e) => {
    e.preventDefault();
    setIsQuoteFormOpen(true); // Open the quote form when "Get a Quote" is clicked
  };

  const closeQuoteForm = () => {
    setIsQuoteFormOpen(false); // Close the quote form
  };

  // Handle dropdown item click with navigation
  const handleDropdownItemClick = (path) => {
    router.push(path).then(() => {
      setOpenDropdownIndex(null); // Close dropdown after navigating
    });
  };

  return (
    <div className="relative">
      <div className="flex justify-between">
        <div className="flex gap-x-10">
          <div className="hidden lg:flex space-x-4">
            <ul className="flex m-0 flex-col lg:flex-row lg:items-center font-medium">
              <li>
                <Link href="/" className={getLinkClassName("/")}>
                  <div className="block py-1 px-3 rounded">Home</div>
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={getLinkClassName("/about-us")}
                >
                  <div className="block py-1 px-3 rounded">About Us</div>
                </Link>
              </li>
              {tabs.map((tab, tabIndex) => (
                <li
                  key={tab.title}
                  className="relative mr-2"
                  ref={(el) => (dropdownRefs.current[tabIndex] = el)}
                >
                  <button
                    onClick={() =>
                      setOpenDropdownIndex(
                        openDropdownIndex === tabIndex ? null : tabIndex
                      )
                    }
                    aria-haspopup="true"
                    aria-expanded={openDropdownIndex === tabIndex}
                    className={`flex items-center transition duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-300 ${
                      openDropdownIndex === tabIndex ||
                      tab.subtitles.some(
                        (subtitle) => pathname === subtitle.path
                      )
                        ? "text-[#FF7400]"
                        : "text-white"
                    }`}
                  >
                    <div className="block py-1 px-3 pr-1 rounded">
                      {tab.title}
                    </div>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openDropdownIndex === tabIndex
                          ? "rotate-180"
                          : "rotate-0"
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
                  {openDropdownIndex === tabIndex && (
                    <ul className="absolute top-full mt-2 w-56 bg-white rounded-lg shadow-lg text-gray-700 z-10">
                      {tab.subtitles.map((subtitle) => (
                        <li key={subtitle.name}>
                          <button
                            className={`block border-b-2 w-full text-left px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 ${
                              pathname === subtitle.path
                                ? "text-[var(--orange)] bg-gray-200"
                                : "text-black hover:text-yellow-500"
                            }`}
                            onClick={() =>
                              handleDropdownItemClick(subtitle.path)
                            }
                          >
                            {subtitle.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <Link href="/sdlc" className={getLinkClassName("/sdlc")}>
                  <div className="block py-1 px-3 rounded">SDLC</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-x-5">
          {/* <div className="hidden lg:flex space-x-4">
            <ul className="flex m-0 flex-col lg:flex-row lg:items-center font-medium text-white">
              <li>
                <Link href="/contact-us" className={getLinkClassName("/contact-us")}>
                  <div className="block py-1 px-3 rounded">Contact Us</div>
                </Link>
              </li>
            </ul>
          </div> */}

          <div className="flex items-center lg:space-x-4 space-x-2">
            <div className="w-36 h-12 flex items-center justify-center">
              <button
                type="button"
                onClick={handleGetQuoteClick} // Updated to handle the quote form opening
                className="text-white hover:no-underline hover:text-white bg-[#ff806b] hover:bg-transparent hover:border-2 hover:border-[#ff806b] font-medium rounded-full text-sm px-6 py-2 text-center transition-all duration-500"
              >
                Get a Quote
              </button>
            </div>

            <button
              type="button"
              className="lg:hidden inline-flex items-center lg:p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              onClick={() => {
                if (typeof toggleDrawer === "function") {
                  toggleDrawer();
                } else {
                  console.warn("toggleDrawer is not a function");
                }
              }}
            >
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
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isQuoteFormOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md mx-auto">
            <button
              onClick={closeQuoteForm} // Close form function
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <QuoteForm onClose={closeQuoteForm} /> {/* QuoteForm component */}
          </div>
        </div>
      )}
    </div>
  );
};

export default LaptopLayout;
