import React from "react";
import { SpinnerSmall, TextMd } from "../index";

const ButtonPlain = ({
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
  type = "submit",
}) => {
  return (
    <button
      onClick={onClick || null}
      className={`${width || "w-28"} ${height || "h-12"} ${padding || "p-3"} ${
        color || "bg-[#7E22CE]"
      } ${classes || ""} ${isBordered && "border"} ${
        isRounded && "rounded-full"
      } disabled:opacity-50 flex items-center justify-center`}
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

export default ButtonPlain;
