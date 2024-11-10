import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Breadcrumb from "../../components/Breadcrumbs";

const Header = ({ color, position, text, textColor, textPosition, list }) => {
  return (
    <div className="relative">
      <div className="absolute z-0 inset-0">
        <img
          className="hidden lg:inline"
          src="/images/content/bginfo.jpg"
          alt="Background"
        />
        <img
          className="w-full object-contain object-center lg:hidden inline"
          src="/images/content/bgnewsmobile.jpg"
          alt="Background"
        />
      </div>
      <div className="w-11/12 mx-auto relative flex items-center h-full lg:min-h-[400px] min-h-[350px]">
        <div className="block">
          <Breadcrumb list={list} />
          <SectionTitle
            color={color}
            position={position}
            text={text}
            textColor={textColor}
            textPosition={textPosition}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
