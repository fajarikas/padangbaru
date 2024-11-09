import React from "react";

const index = ({ text, color, textPosition, position, textColor }) => {
  return (
    <div className="z-10">
      <p className={`text-4xl ${textPosition} ${textColor}  font-semibold`}>
        {text}
      </p>
      <hr
        className={`flex  ${position} mt-[6px] w-32 rounded-full border-none ${color} h-1 `}
      />
    </div>
  );
};

export default index;
