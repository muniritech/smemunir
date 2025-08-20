import React from "react";
import { PencileIcon, TrashBinIcon } from "../assets/Icon";

const ArticlesComp = ({
  text,
  title,
  day,
  time,
  onEdit,
  onDelete,
  isDelete = true,
  isNew=false
}) => {
  return (
    <div className={`px-5 py-6 rounded-lg border border-[#EBEBEB] ${isNew && 'bg-[#F0FDF4]'}`}>
      <div className="border-b pb-1">
        <div className="text-[#333333] text-[13px] font-medium">{title}</div>
        <div className="text-[#666666] text-[13px]">{text}</div>
      </div>
      <div className="flex justify-between pt-4">
        <div className="text-[13px] text-[#9CA3AF]">{time}</div>

        <div className="flex items-center gap-2">
          <div onClick={onEdit} className="flex items-center text-[13px] font-medium gap-1 cursor-pointer">
            <PencileIcon /> Edit
          </div>
          {isDelete && (
            <div onClick={onDelete} className="flex items-center px-2">
              <TrashBinIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticlesComp;
