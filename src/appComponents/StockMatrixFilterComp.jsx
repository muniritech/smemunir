import React, { useState } from "react";
import ButtonComp from "./ButtonComp";
import { BlackSelectedCheckBox, UnSelectedCheckBox } from "../assets/Icon";
import InputComp from "./InputComp";
import DropDownComp from "./DropDownComp";

const StockMatrixFilterComp = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState("");
  const [instrument, setInstrument] = useState("Equity");
  const [symbolStatus, setSymbolStatus] = useState("Active");
  const [year, setYear] = useState(2025);

  const instrumentData = ["Equity", "non-Equity", "Profit", "non-Profit"];
  const symbolStatusData = ["Active", "Block", "non-Active", "Suspend"];
  const yearData = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029];

  return (
    <div className="w-full flex flex-col gap-3">
      
      <div className="border-[#e4e4e7] border-2 flex flex-col gap-6 p-6 rounded-md">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[#09090B] text-[16px] font-semibold">
              Filter
            </div>
            <div className="text-[#71717A] text-[14px] font-normal">
              Apply filter on stock data matrix
            </div>
          </div>

          <div
            onClick={() => setIsChecked(!isChecked)}
            className="flex items-center gap-2 text-[#09090B] text-[14px] font-bold cursor-pointer"
          >
            <div className="h-[13px] w-[14px] ">
              {isChecked ? <BlackSelectedCheckBox /> : <UnSelectedCheckBox />}
            </div>
            CIM
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <InputComp text={"Card number"} value={value} _onChange={setValue} />
          <div className="flex w-full gap-4">
            <DropDownComp
              title={"Instrument type"}
              selectedValue={instrument}
              data={instrumentData}
              setSelectedValue={setInstrument}
            />
            <DropDownComp
              title={"Symbol Status"}
              selectedValue={symbolStatus}
              data={symbolStatusData}
              setSelectedValue={setSymbolStatus}
            />
            <DropDownComp
              title={"Year"}
              selectedValue={year}
              data={yearData}
              setSelectedValue={setYear}
            />
          </div>
          <div className="flex justify-end gap-3">
            <div className="text-[#09090B] text-[12px] font-medium px-3 py-[6px] cursor-pointer">
                Cancel
            </div>
            <div className="bg-[#09090B] rounded-sm text-[#fff] text-[12px] font-medium px-3 py-[6px] cursor-pointer">
                Save Credit Card
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockMatrixFilterComp;
