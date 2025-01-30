"use client";

import LaptopLayout from "./helper/LaptopLayout";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TabLayout from "./helper/TabLayout";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const [showBackground, setShowBackground] = useState(true);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setShowBackground(true);
      } else {
        setShowBackground(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Backdrop overlay when drawer is open */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900 opacity-50 transition-opacity duration-300"
          onClick={closeDrawer}
        />
      )}

      {/* Navigation Bar with backdrop blur */}
      <nav className="fixed w-full mt-4 z-[1000]">
        <div
          className={`p-2 px-5 max-w-screen-xl m-auto transition-all duration-300 ${
            showBackground ? "bg-[#ffffff80] backdrop-blur-lg" : "bg-transparent"
          } rounded-full border border-[#eeeeee]`}
          // style={{ boxShadow: "1px 2px 3px 4px #eeeeee" }}
        >
          {/* Laptop layout for navigation */}
          <LaptopLayout isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} toggleDrawer={toggleDrawer} />
        </div>

        {/* Drawer (Tab Layout) */}
        {isDrawerOpen && (
          <div className="z-50 top-24 fixed w-full h-full">
            <TabLayout closeDrawer={closeDrawer} />
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
