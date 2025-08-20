import React from "react";
import ModalHeader from "./ModalHeader";
import { ResetIcon } from "../../assets/TableIcon";

const ResetDataModal = ({ _onClose }) => {
  return (
    <div className="bg-white w-[600px] rounded-md px-4 py-4 flex flex-col gap-5">
      <ModalHeader text={"Resetting Data"} _onClose={_onClose} />
      <div className="flex h-[150px] items-center justify-center">
        <span className="flex gap-2 text-[#000000] text-[14px]">
          <ResetIcon _color="#64748B" _height="20" _width="20" />
          Loading
        </span>
      </div>
      <div className="flex justify-end">
        <div className="text-[#FAFAFA] text-[12px] font-medium bg-[#94A3B8] w-fit px-2 py-1.5 rounded-sm cursor-pointer">
          Cancel
        </div>
      </div>
    </div>
  );
};

export default ResetDataModal;
