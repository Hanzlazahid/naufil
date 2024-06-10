import React from "react";
import { TextLg, TextMd, TextSm } from "..";

const IconBox = ({
  iconClass,
  iconColor,
  bgColor,
  size,
  isRounded,
  wrapperSize,
  padding,
  title,
  subtitle,
}) => {
  const className = `fa ${iconClass} ${iconColor || "text-white"} ${
    bgColor || "bg-[#7E22CE]"
  } ${size || "text-md"} ${
    wrapperSize ? wrapperSize : "w-7 h-7"
  } flex items-center justify-center ${padding || "p-4"} ${
    isRounded ? "rounded-full" : ""
  }`;
  return (
    <div className="flex items-center gap-4">
      <i className={className}></i>
      <div>
        <TextLg classes="font-semibold" text={title} />
        <TextSm classes="font-medium text-gray-500" text={subtitle} />
      </div>
    </div>
  );
};

export default IconBox;
