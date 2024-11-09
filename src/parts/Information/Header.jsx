import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Breadcrumb from "../../components/Breadcrumbs";

const Header = ({ color, position, text, textColor, textPosition, list }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img src="/images/content/bginfo.jpg" alt="Background" />
      </div>
      <div className="w-11/12 mx-auto relative flex items-center h-full min-h-[400px]">
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
