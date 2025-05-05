import React, { useState } from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import { FiUser } from "react-icons/fi";

const menuItems = {
  Home: ["About Us", "Quality Control", "Management Team", "CSR", "Contact Us"],
  Portfolio: [
    "Baby Massage Oil",
    "Digital Marketplace",
    "OTC Segment",
    "Corporate Assignment",
    "Best Manufacturing Projects",
  ],
  "Update Info": ["PDF File Reference Will be enlisted here"],
  Distribution: [
    "Channel Marketing",
    "State C&FA",
    "Export Policies",
    "Job & Work",
  ],
};

const HoverMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="w-full flex justify-center bg-white border-b border-gray-300">
      <div className="flex items-center justify-between w-full max-w-[3707px] h-[71px] px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={assets.logo} width={150} height={50} alt="Logo" />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-10">
          {Object.keys(menuItems).map((menuName) => (
            <div
              key={menuName}
              className="relative"
              onMouseEnter={() => setActiveMenu(menuName)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                {menuName}
              </button>

              {activeMenu === menuName && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-md rounded border border-gray-200 z-10">
                  <ul className="p-2 space-y-1">
                    {menuItems[menuName].map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Login & Icon */}
        <div className="flex items-center space-x-4">
          <button className="text-blue-600 font-semibold hover:underline">
            Login
          </button>
          <FiUser size={22} className="text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default HoverMenu;
