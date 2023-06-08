import SearchComponent from "./SearchComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const HeaderComponent = () => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const handleMouseEnter = (element: string) => {
    setHoveredElement(element);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  return (
    <div className="fixed top-0 h-14  w-full bg-blue-600 flex items-center space-x-5">
      <div className="logo ml-52 ">
        <div className=" text-white font-OpenSans text-2xl">FlipKart</div>
        <div className=" text-white text-sm">Explore Plus</div>
      </div>
      <SearchComponent />

      <div className="flex justify-between text-white space-x-11 font-semibold ">
        <div
          onMouseEnter={() => handleMouseEnter("flipkart")}
          onMouseLeave={handleMouseLeave}
        >
          FlipKart{" "}
          <FontAwesomeIcon
            icon={hoveredElement === "flipkart" ? faChevronUp : faChevronDown}
            className="text-sm hover:cursor-pointer"
          />
        </div>
        <div>Become a Seller</div>
        <div
          onMouseEnter={() => handleMouseEnter("more")}
          onMouseLeave={handleMouseLeave}
        >
          More{" "}
          <FontAwesomeIcon
            icon={hoveredElement === "more" ? faChevronUp : faChevronDown}
            className="text-sm hover:cursor-pointer"
          />
        </div>
        <div>Cart</div>
      </div>
    </div>
  );
};

export default HeaderComponent;