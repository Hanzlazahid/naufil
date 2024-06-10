import React from "react";
import { SpinnerSmall, TextMd } from "../index";

const ButtonFloating = ({
  width,
  height,
  padding,
  text,
  color,
  colorText,
  onClick,
  classes,
  isBordered,
  isRounded,
  isDisabled = false,
  isLoading,
  type = "button",
  top = "top-[90%]",
  bottom = "bottom-0",
  left = "left-[90%]",
  right = "right-0",
  shadow = "shadow-lg shadow-[#7E22CE]",
}) => {
  return (
    <button
      onClick={onClick || null}
      className={`${width || "w-28"} ${height || "h-12"} ${padding || "p-3"} ${
        color || "bg-[#7E22CE]"
      } ${classes || ""} ${isBordered && "border"} ${
        isRounded && "rounded-full"
      } disabled:opacity-50 flex items-center justify-center fixed ${top} ${bottom} ${left} ${right} ${shadow}`}
      type={type}
      disabled={isDisabled}
    >
      {isLoading ? (
        <SpinnerSmall />
      ) : (
        <TextMd text={text} color={colorText || "text-white"} />
      )}
    </button>
  );
};

export default ButtonFloating;
