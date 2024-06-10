import React from "react";

const IconPlain = ({
  iconClass,
  iconColor,
  bgColor,
  size,
  isRounded,
  wrapperSize,
  padding,
}) => {
  const className = `fa ${iconClass} ${iconColor || "text-white"} ${
    bgColor || "bg-[#7E22CE]"
  } ${size || "text-md"} ${
    wrapperSize ? wrapperSize : "w-7 h-7"
  } flex items-center justify-center ${padding || "p-4"} ${
    isRounded ? "rounded-full" : ""
  }`;

  return <i className={className}></i>;
};

export default IconPlain;
