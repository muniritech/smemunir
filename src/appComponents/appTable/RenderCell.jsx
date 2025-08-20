import React from "react";
import Badge from "../Badge";

const RenderCell = ({ iskey, value }) => {
  switch (iskey) {
    case "symbol":
      return (
        <span className="text-[#333333] text-[13px] font-normal">{value}</span>
      );
    case "companyName":
      return (
        <span className="text-[#6B7280] text-[12px] font-normal ">{value}</span>
      );
    case "exCode":
    case "exchangeName":
    case "type":
      return (
        <span className="text-[#333333] text-[13px] font-normal border-b-2">
          {value}
        </span>
      );
    case "status":
      return <Badge value={value} />;
  }
};

export default RenderCell;
