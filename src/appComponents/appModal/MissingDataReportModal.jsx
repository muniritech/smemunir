import React from "react";
import ModalHeader from "./ModalHeader";
import { CalenderIconSVG } from "../../assets/TableIcon";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const MissingDataReportModal = ({ _onClose }) => {
  const data = [
    {
      title: "Expected Candles",
      value: 235,
      isMissing: false,
    },
    {
      title: "Candles Found",
      value: 235,
      isMissing: false,
    },
    {
      title: "Missing Days",
      value: 235,
      isMissing: true,
    },
    {
      title: "Completion",
      value: "100%",
      isMissing: false,
    },
  ];

  const date = [
    "Wednesday 02/24/2025",
    "Wednesday 02/24/2025",
    "Wednesday 02/24/2025",
    "Wednesday 02/24/2025",
  ];

  return (
    <div className="bg-white w-[600px] -h-[300px] px-4 py-4 rounded-md flex flex-col gap-5">
      <ModalHeader text={"Missing Data Report"} _onClose={_onClose} />
      <div className="w-fit py-5">
        <div className="flex items-center gap-2">
          <span>
            <CalenderIconSVG />{" "}
          </span>
          <span className="flex items-center gap-3 text-[#09090B] text-[18px] font-normal">
            13 June 2023 <ArrowRightIcon className="h-4 w-4" /> 14 July 2023
          </span>
        </div>
        <div className="flex justify-end">
          <span className="text-[#999999] text-[10px]">Start and End Date</span>
        </div>
      </div>

      <div className="flex justify-between gap-4">
        {data?.map((item) => (
          <div>
            <div
              className={` text-[18px] !font-normal ${
                item?.isMissing ? "text-[#DC2626]" : "text-[#475569]"
              }`}
            >
              {item.value}
            </div>
            <div className="text-[#999999] text-[10px] font-normal ">
              {item?.title}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#FEECEC] rounded-md p-2">
        <div className="flex text-[13px] text-[#F83E3E] font-medium items-center gap-1">
          <ExclamationCircleIcon className="h-3 w-3 text-[#F83E3E]" />
          Missing Dates
        </div>
        <div>
          {date.map((item) => (
            <div className="text-[#F83E3E] text-[12px] font-normal flex items-center gap-1 pl-4 py-[3px]">
              <CalenderIconSVG _height="12" _width="12" _color="#F83E3E" />
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-black text-[#FAFAFA] text-[12px] px-2 py-1.5 rounded-sm cursor-pointer w-fit">
          Ok
        </div>
      </div>
    </div>
  );
};

export default MissingDataReportModal;
