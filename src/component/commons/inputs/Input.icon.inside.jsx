"use client";

import React, { useState } from "react";
import { IconPlain, TextError, TextMd } from "../index";

const InputIconInside = ({
  id,
  type = "text",
  name,
  placeholder,
  onChange,
  onKeyDown,
  label,
  error,
  errorText,
  value,
  onBlur,
  isRequired,
  isDisabled,
  postFixText,
  reference,
  noIcon = true,
  min,
  max,
  maxLength,
  isFullRounded = false,
  icon = null,
  onClickIcon,
}) => {
  // States
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  let iconClass = icon;

  if (!noIcon && !icon) {
    if (type === "date") {
      noIcon = true;
    } else if (type === "email") {
      iconClass = "fa-envelope";
    } else if (type === "number") {
      iconClass = "fa-arrow-down-1-9";
    } else if (type === "password") {
      iconClass = "fa-lock";
    } else if (name === "search") {
      iconClass = "fa-search";
    } else {
      iconClass = "fa-pencil";
    }
  }

  const checkType =
    type === "password" ? (isPasswordVisible ? "text" : "password") : type;

  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-semibold text-gray-900"
        >
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <div
        className={`flex justify-between w-full items-center relative ${
          isFullRounded ? "rounded-full" : "rounded-lg"
        } disabled:bg-gray-100 h-12 pl-3 w-full border-gray-300 border`}
      >
        <div className="basis-[96%]">
          <input
            ref={reference}
            type={checkType}
            name={name}
            onBlur={onBlur}
            min={min}
            max={max}
            maxLength={maxLength}
            onKeyDown={onKeyDown}
            id={id}
            disabled={isDisabled}
            value={value}
            required={isRequired}
            onChange={onChange}
            placeholder={placeholder}
            className={`border-0 focus:ring-0 outline-0 w-full`}
          />
        </div>
        <div className="basis-[4%]">
          <button type="button" onClick={onClickIcon}>
            {!noIcon && (
              <IconPlain
                iconClass={`${iconClass} rounded-full`}
                wrapperSize="h-12"
                iconColor="text-white"
                bgColor={error ? "bg-red-600" : ""}
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default InputIconInside;
