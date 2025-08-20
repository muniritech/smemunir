import React from "react";
import ModalHeader from "../appModal/ModalHeader";
import { BlockSVG } from "../../assets/TableIcon";
import SimpleButtonComp from "../SimpleButtonComp";

const TaskMnagerModal = ({ _onClose }) => {
  const data = [
    {
      id: "517c852f-872e-42ec-ac19-a363cff89910",
      time: "00:00:07",
    },
    {
      id: "517c852f-872e-42ec-ac19-a363cff89910",
      time: "00:00:07",
    },
    {
      id: "517c852f-872e-42ec-ac19-a363cff89910",
      time: "00:00:07",
    },
  ];
  return (
    <div className="bg-white w-[600px] -h-[300px] px-4 py-4 rounded-md flex flex-col gap-5">
      <ModalHeader text={"Task Manager"} _onClose={_onClose} />

      {data?.map((item) => (
        <div className="flex justify-between border-b pb-2">
          <div className="w-[60%]">
            <div className="text-[#475569] text-[18px] font-medium">DataMatrix Category Update</div>
            <div className="text-[#999999] text-[10px] font-medium">{item?.id}</div>
          </div>

          <div>
            <div className="text-[#475569] text-[18px] font-medium">🟢 Running</div>
            <div className="text-[#999999] text-[10px] font-medium">Duration: {item?.time}</div>
          </div>
          <div className="px-4 flex items-center">
            <BlockSVG />
          </div>
        </div>
      ))}

      <div className="flex gap-3 justify-end">
        <SimpleButtonComp text={"Terminate Alll"} varient={"dangerTwo"} _onClick={() => console.log("click")}/>
            <SimpleButtonComp text={"Close"} varient={"normal"} _onClick={_onClose}/>
      </div>
    </div>
  );
};

export default TaskMnagerModal;
