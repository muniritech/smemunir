import React from "react";
import { ModalCrossIcon } from "../../assets/TableIcon";
const ModalHeader = ({ text, _onClose }) => {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-[#333333] text-[20px] font-bold">{text}</span>

      <span onClick={_onClose} className="cursor-pointer hover:bg-[#eaeeef] rounded-full p-1">
        <ModalCrossIcon />
      </span>
    </div>
  );
};

export default ModalHeader;
