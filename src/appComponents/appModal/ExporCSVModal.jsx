import React from "react";

const ExporCSVModal = ({ onClose, onDownload }) => {
  return (
    <div className="bg-white px-5 py-5 w-[320px] flex flex-col justify-center items-center rounded-[15px]">
      <div className="text-[#333333] text-[16px] font-semibold">
        Export To CSV
      </div>
      <div className="text-[#333333] text-[13px] font-normal flex justify-center items-center text-center py-4">
        Are you sure you want to download all the symbols in a CSV sheet?
      </div>
      <div className="w-full flex flex-col gap-2">
        <div
          onClick={onClose}
          className="text-[#666666] rounded-sm border-[#000] border-[1px] w-full flex justify-center py-1 items-center text-[13px] font-normal cursor-pointer"
        >
          Cancel
        </div>

        <div
          onClick={onDownload}
          className="text-[#FFFFFF] rounded-sm bg-[#4D7C0F] border-[#4D7C0F] border-[1px] w-full flex justify-center py-1 items-center text-[13px] font-normal cursor-pointer"
        >
          Yes, Download
        </div>
      </div>
    </div>
  );
};

export default ExporCSVModal;
