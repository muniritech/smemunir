import React from "react";

const Badge = ({ value }) => {
  const themeAndValue = {
    active: {
      TEXT: "Active",
      TEXT_STYLE: "text-[#2A5822] bg-[#DDFCD8]",
      DOT_COLOR: "bg-[#2A5822]",
    },
    "block by admin": {
      TEXT: "Block By Admin",
      TEXT_STYLE: "text-[#BE1E2D] bg-[#FECACA]",
      DOT_COLOR: "bg-[#BE1E2D]",
    },
  };

  const selectedTheme = themeAndValue[value];
  return (
    <div
      className={`${selectedTheme?.TEXT_STYLE} w-fit flex items-center gap-2 text-[13px] font-medium px-3 py-1 rounded-full`}
    >
      <div className={`${selectedTheme?.DOT_COLOR} h-2 w-2 rounded-full`}></div>
      {selectedTheme?.TEXT}
    </div>
  );
};

export default Badge;
