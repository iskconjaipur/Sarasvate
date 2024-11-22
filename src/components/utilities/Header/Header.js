"use client";

import LaptopLayout from "./helper/LaptopLayout";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import TabLayout from "./helper/TabLayout";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const [showBackground, setShowBackground] = useState("bg-black/50");

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setShowBackground("bg-[#4c7595]");
      } else {
        setShowBackground("bg-black/50");
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
      <div className="flex justify-between items-center">
        {isDrawerOpen && (
          <div
            className="fixed inset-0 z-10 bg-gray-900 opacity-50 transition-opacity duration-300"
            onClick={closeDrawer}
          />
        )}
      </div>

      <nav className={`fixed w-full z-[1000] ${showBackground}`}>
        <div className="p-4 px-2 m-auto max-w-screen-xl">
          <LaptopLayout toggleDrawer={toggleDrawer} />

          {isDrawerOpen && (
            <TabLayout closeDrawer={closeDrawer} />
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
