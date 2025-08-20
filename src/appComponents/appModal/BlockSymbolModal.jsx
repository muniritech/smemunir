import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const BlockSymbolModal = ({ onClose, onDownload }) => {
  return (
    <div className="bg-white px-5 py-5 w-[320px] flex flex-col justify-center items-center rounded-[15px]">
      <div className="text-[#333333] text-[16px] font-semibold">
        Block Symbol
      </div>
      <div className="text-[#333333] text-[13px] font-normal flex justify-center items-center text-center py-4">
        Are you sure you want to block{" "}
        <span className="font-bold pl-1"> IBM</span>?
      </div>
      <div className="flex text-[13px] font-medium rounded-sm text-[#F83E3E] bg-[#FEECEC] items-center gap-2 px-2 py-0.5">
        <ExclamationCircleIcon className="h-7 w-7 text-[#F83E3E]" />
        Once deactivated, it will never be shown in the scanner results.
      </div>
      <div className="w-full flex flex-col gap-2 pt-4">
        <div
          onClick={onClose}
          className="text-[#666666] rounded-sm border-[#000] border-[1px] w-full flex justify-center py-1 items-center text-[13px] font-normal cursor-pointer"
        >
          Cancel
        </div>

        <div
          onClick={onDownload}
          className="text-[#FFFFFF] rounded-sm bg-[#B91C1C] border-[#4D7C0F] border-[1px] w-full flex justify-center py-1 items-center text-[13px] font-normal cursor-pointer"
        >
          Yes, Block IBM
        </div>
      </div>
    </div>
  );
};

export default BlockSymbolModal;
