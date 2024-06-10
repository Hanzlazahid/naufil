import React from "react";

const BadgeSimple = ({
  bgColor = "bg-purple-100",
  textColor = "text-purple-800",
  text,
  iconClass,
}) => {
  return (
    <span
      className={`${bgColor} ${textColor} text-sm font-medium mr-2 px-3 py-1 rounded`}
    >
      {iconClass && (
        <i className={`fa ${iconClass} ${textColor} text-sm pr-2`}></i>
      )}
      {text}
    </span>
  );
};

export default BadgeSimple;
