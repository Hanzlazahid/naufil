import React from "react";

const TextLgFancy = ({ classes, text, color }) => {
  return (
    <div className="flex items-center">
      <h1
        className={`text-sm font-bold text-left basis-[20%] md:basis-[7%] md:text-lg ${
          color || "text-black"
        } ${classes || ""}`}
      >
        {text}
      </h1>
      <div className="h-1 basis-[80%] md:basis-[93%] border-2 border-[#7E22CE]"></div>
    </div>
  );
};

export default TextLgFancy;
