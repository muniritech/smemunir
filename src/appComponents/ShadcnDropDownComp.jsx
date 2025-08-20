import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShadcnDropDownComp = ({
  placeholder,
  data,
  customWidth,
  selectedValue,
  setSelectedValue,
  isObject = false,
  selectCustomeWidth,
  customHight,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="text-[#999999] text-[13px] font-medium">
        Filter By Exchange
      </div>
      <div className={`${customWidth ? customWidth : "w-[260px]"}`}>
        <Select value={selectedValue} onValueChange={setSelectedValue}>
          <SelectTrigger
            className={`w-full focus:outline-none focus:ring-0 ${
              customHight ? customHight : "h-[42px]"
            }`}
          >
            <SelectValue>
              {placeholder ? placeholder : selectedValue && selectedValue}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* <SelectLabel>Fruits</SelectLabel> */}
              {data?.map((item) => (
                <SelectItem value={item}>
                  <div className={`${selectCustomeWidth}`}>{item}</div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ShadcnDropDownComp;
