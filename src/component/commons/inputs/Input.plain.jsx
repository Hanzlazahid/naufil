"use client";

import React, { useState } from "react";
import { IconPlain, TextError, TextMd } from "../index";

const InputPlain = ({
  id,
  type = "text",
  name,
  placeholder,
  onChange,
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
          className="block mb-2 text-sm font-semibold text-purple-900"
        >
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="flex w-full items-center relative">
        {!noIcon && (
          <IconPlain
            iconClass={`${iconClass} rounded-l-lg`}
            wrapperSize="h-12"
            iconColor="text-white"
            bgColor={error ? "bg-red-600" : ""}
          />
        )}
        <input
          ref={reference}
          type={checkType}
          name={name}
          onBlur={onBlur}
          min={min}
          max={max}
          maxLength={maxLength}
          id={id}
          disabled={isDisabled}
          value={value}
          required={isRequired}
          onChange={onChange}
          placeholder={placeholder}
          className={`border ${
            error
              ? "border-red-400 focus:border-red-400"
              : "border-purple-700 focus:border-purple-700"
          } focus:ring-0 outline-0 h-12 ${
            isFullRounded ? "rounded-full" : "rounded-lg"
          } p-3 w-full disabled:bg-gray-100`}
        />
        {type === "password" && (
          <div className="absolute right-1">
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <IconPlain
                iconClass={!isPasswordVisible ? "fa-eye" : "fa-eye-slash"}
                bgColor="bg-inherit"
                iconColor="text-[#7E22CE]"
              />
            </button>
          </div>
        )}
        {postFixText && (
          <TextMd text={postFixText} classes="ml-2 font-semibold" />
        )}
      </div>
      {error && (
        <div className="mt-1">
          <TextError text={errorText} />
        </div>
      )}
    </>
  );
};

export default InputPlain;
