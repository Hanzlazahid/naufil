"use client";

import React, { useState } from "react";
import { IconPlain, TextMd, TooltipPlain } from "../index";

const ButtonIconned = ({
  width,
  height,
  padding,
  text,
  color,
  onClick,
  classes,
  icon,
  iconColor,
  iconPosition = "left",
  isRounded,
  textColor,
  justify,
  type = "submit",
  tooltip,
  tooltipWidth,
  tooltipDirection,
  isDisabled = false,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <button
      onClick={onClick || null}
      className={`${width || "w-28"} ${height || "h-12"} ${padding || "p-3"} ${
        color || `bg-[#7E22CE]`
      } ${classes || ""} ${
        isRounded ? "rounded-full" : "rounded-md"
      } shadow-md flex mx-auto items-center ${
        justify || "justify-center"
      } gap-4 relative ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
      type={type}
      disabled={isDisabled}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {iconPosition === "left" && icon && (
        <IconPlain
          bgColor="bg-inherit"
          iconClass={icon}
          isRounded={isRounded}
          size="text-md"
          iconColor={iconColor || ""}
        />
      )}
      {text && (
        <TextMd
          text={text}
          color={textColor || "text-white"}
          classes={`min-w-[11rem] text-left pl-5`}
        />
      )}
      {iconPosition === "right" && icon && (
        <IconPlain
          iconClass={icon}
          isRounded={isRounded}
          bgColor="bg-inherit"
          size="text-sm"
          iconColor={iconColor || ""}
        />
      )}
      {tooltip && showTooltip && (
        <TooltipPlain
          tooltipWidth={tooltipWidth}
          direction={tooltipDirection}
          text={tooltip}
        />
      )}
    </button>
  );
};

export default ButtonIconned;
