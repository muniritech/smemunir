import React from "react";
import ShadcnDropDownComp from "./ShadcnDropDownComp";
import DatePickerWithRange from "./DatePickerWithRange";
import {
  Search,
  Lessthan,
  Greaterthan,
  Drawer,
  Dot,
  PlusCircled,
  DownloadButtonIcon,
  CSVIcon,
} from "../assets/Icon";
import ButtonComp from "./ButtonComp";

const TableControls = ({
  selectedValue,
  setSelectedValue,
  searchQuery,
  handleSearch,
  pageCount,
  pageDecrement,
  pageIncrement,
  totalPages,
  rowsPerPage,
  handleRowsChange,
  isDate,
  extraButton
}) => {
  const market = [
    "SIAC - New York Stock Equities Exchange",
    "NYSE - New York Stock Exchange",
    "AMEX - American Stock Exchange",
    "TSX - Toronto Stock Exchange",
    "LSE - London Stock Exchange",
    "JPX - Japan Exchange Group",
  ];
  const dateHandler = (date) => {
    console.log(date);
  };
  return (
    <div className="flex justify-between">
      {isDate ? (
        <DatePickerWithRange  customeWidth={"w-[270px]"}
        dateHandler={dateHandler}/>
      ) : (
        <ShadcnDropDownComp
          data={market}
          selectCustomeWidth={"w-[215px]"}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      )}

      <div className="flex">
        {/* Search Bar */}
        <div className="flex justify-end flex-1">
          <div className="flex items-center gap-1 px-2 py-1 w-[270px] border border-[#d4d4d8] focus-within:border-[#b2b2b4] focus-within:bg-[#fafafa] rounded-[8px]">
            <Search />
            <input
              placeholder="Search Symbol"
              className=" p-1 text-gray-500 bg-transparent border-none outline-none text-[13px] font-[400]"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
            />
          </div>
        </div>

        {/* Pagination and Controls */}
        <div className="flex items-center gap-3 px-3">
          <div className="flex items-center gap-2">
            <button
              disabled={pageCount === 1}
              onClick={pageDecrement}
              className={`p-0 border border-[#d4d4d8] hover:bg-[#fafafa] rounded-[6px] ${
                pageCount === 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              <Lessthan />
            </button>
            <span className="font-inter  text-[13px] text-[#b3b3b3]">
              Page {pageCount}
            </span>
            <button
              onClick={pageIncrement}
              disabled={pageCount === totalPages || totalPages === 0}
              className={`p-0 border border-[#d4d4d8] hover:bg-[#fafafa] rounded-[6px] ${
                pageCount === totalPages || totalPages === 0
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              <Greaterthan />
            </button>
          </div>

          <div className="flex items-center bg-[#f5f5f5] px-1 py-2 gap-[0.7px] rounded-[5px]">
            <Drawer />
            <span className="text-[#666666] text-[13px] mr-1">Rows</span>
            <Dot />
            <select
              value={rowsPerPage}
              onChange={handleRowsChange}
              className="text-[#b3b3b3] bg-transparent border-none outline-none cursor-pointer text-[13px]"
            >
              {[5, 10, 15, 20, 25, "All"].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* {isCreated &&
          <button className="flex items-center gap-2 px-5 py-2 hover:bg-[#333333] active:bg-[#000000] text-white bg-[#000000] rounded-[8px] cursor-pointer">
            <PlusCircled />
            <span>Create</span>
          </button>
        } */}
          {/* button sectiion */}
          <div className="flex gap-2">
            <div className="flex bg-black justify-center items-center py-2 px-5 gap-2 rounded-md cursor-pointer">
              <DownloadButtonIcon />
              <span className="text-[#FAFAFA] font-medium text-[14px]">
                Download Symbols
              </span>
            </div>

            <div className="flex bg-black items-center justify-center py-2 px-5 gap-2 rounded-md cursor-pointer">
              <CSVIcon />
              <span className="text-[#FAFAFA] font-medium text-[14px]">
                Export To CSV
              </span>
            </div>
            {extraButton && (
              <ButtonComp text={"Run Unprocessed"}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableControls;
