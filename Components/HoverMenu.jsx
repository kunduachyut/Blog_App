import React, { useState } from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import { FiUser } from "react-icons/fi";
import Link from "next/link"; // Import Link from Next.js
import ComingSoon from "./ComingSoon";
// Menu items now include links for each item
const menuItems = {
  Home: [
    { name: "About Us", link: "/ComingSoon" },
    { name: "Quality Control", link: "/quality-control" },
    { name: "Management Team", link: "/management-team" },
    { name: "CSR", link: "/csr" },
    { name: "Contact Us", link: "/contact" },
  ],
  Portfolio: [
    { name: "Baby Massage Oil", link: "/portfolio/baby-massage-oil" },
    { name: "Digital Marketplace", link: "/portfolio/digital-marketplace" },
    { name: "OTC Segment", link: "/portfolio/otc-segment" },
    { name: "Corporate Assignment", link: "/portfolio/corporate-assignment" },
    { name: "Best Manufacturing Projects", link: "/portfolio/best-manufacturing-projects" },
  ],
  "Update Info": [
    { name: "PDF File Reference Will be enlisted here", link: "/update-info/pdf-reference" },
  ],
  Distribution: [
    { name: "Channel Marketing", link: "/distribution/channel-marketing" },
    { name: "State C&FA", link: "/distribution/state-cfa" },
    { name: "Export Policies", link: "/distribution/export-policies" },
    { name: "Job & Work", link: "/distribution/job-work" },
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

              <div
                className={`absolute left-0 top-full mt-2 w-64 bg-white shadow-md rounded border border-gray-200 z-10 transition-all duration-300 ease-in-out
                  ${activeMenu === menuName ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
              >
                <ul className="p-2 space-y-1 bg-white rounded">
                  {menuItems[menuName].map((item, index) => (
                    <li key={index}>
                      {/* Directly use Link with className */}
                      <Link
                        href={item.link}
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Login & Icon */}
        <div className="flex items-center space-x-4">
          <a href="./admin">
            <button className="text-blue-600 font-semibold hover:underline">
              Login
            </button>
          </a>
          <FiUser size={22} className="text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default HoverMenu;
