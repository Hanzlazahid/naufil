import React from "react";

const TextXs = ({ classes, text, color }) => {
  return (
    <h1
      className={`text-xs md:text-xs ${color || "text-black"} ${classes || ""}`}
    >
      {text}
    </h1>
  );
};

export default TextXs;
