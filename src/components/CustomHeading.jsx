import React from "react";

const CustomHeading = ({ title }) => {
  return (
    <h2 className="text-base md:text-lg lg:text-xl font-semibold text-[#343C6A] mb-2">
      {title}
    </h2>
  );
};

export default CustomHeading;
