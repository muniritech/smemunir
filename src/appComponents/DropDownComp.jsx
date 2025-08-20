import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DropDownComp = ({
     placeholder,
  data,
  customWidth,
  selectedValue,
  setSelectedValue,
  isObject = false,
  selectCustomeWidth,
  customHight,
  title
}) => {
  return (
    <div className="flex flex-col gap-1 w-[100%]">
          <div className="text-[#09090B] text-[14px] font-medium">
            {title}
          </div>
          <div className={`${customWidth ? customWidth : "w-[100%]"}`}>
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
  )
}

export default DropDownComp