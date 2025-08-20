import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const StockMatrixModal = ({ heading, msg,ButtonText, _onClose, _onClick }) => {
  return (
    <div className="bg-white px-5 py-5 w-[320px] flex flex-col justify-center items-center rounded-[15px] gap-4">
      <div className="text-[#333333] text-[16px] font-semibold">{heading}</div>
      <div className="text-[#333333] text-[13px] text-center">
        {msg} <sapn className="underline">these data points</sapn>.
      </div>

      <div className="flex gap-2 -ßpr-6 text-[#1961ED] text-[13px] bg-[#E2ECFD] px-2 py-2 rounded-sm">
        <div className="flex items-center">
          <ExclamationCircleIcon className="h-[18px] w-[18px]" />
        </div>
        <div className="pr-5">
          Once the process is started, you can close the window or navigate to
          other pages, it will keep running in the background and you can check
          the status of the process in the
          <span className="font-bold"> “Task Manager”</span> menu above.
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <div onClick={_onClose} className="flex justify-center py-[3px] rounded-sm text-[#666666] text-[13px] font-medium border w-full cursor-pointer">
            No
        </div>

        <div onClick={_onClick} className="flex justify-center py-[3px] text-[#fff] bg-[#3B82F6] rounded-sm text-[13px] font-normal border w-full cursor-pointer">
            {ButtonText}
        </div>
      </div>
    </div>
  );
};

export default StockMatrixModal;
