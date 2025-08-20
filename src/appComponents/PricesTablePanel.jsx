import React, { useState, useEffect } from "react";
import DatePickerWithRange from "./DatePickerWithRange";
import {
  Lessthan,
  Greaterthan,
  Drawer,
  Dot,
  DownloadButtonIcon,
  CSVIcon
} from "../assets/Icon";
import { ResetIcon, CheckMissinicon} from "../assets/TableIcon"
import ButtonComp from "./ButtonComp";

const PricesTablePanel = ({ pageCount, tableData, getPaginatedData }) => {
  const [rows, setRows] = useState(tableData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(5);

  useEffect(() => {
    setTotalPages(Math.ceil(rows.length / rowsPerPage));
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedRows = rows.slice(start, end);

    getPaginatedData(paginatedRows);
  }, [currentPage, rowsPerPage, rows]);

  const dateHandler = (date) => {
    console.log(date);
  };

  const pageDecrement = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const pageIncrement = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleRowsChange = (val) => {
    setRowsPerPage(val?.target?.value);
  };

  return (
    <div className="flex gap-2 justify-between">
      <div className="flex gap-2">
        <DatePickerWithRange
        customeWidth={"w-[300px]"}
        dateHandler={dateHandler}
      />
      {/* table pagination  */}
      <div className="flex gap-2">
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
            Page {currentPage}
          </span>
          <button
            onClick={pageIncrement}
            disabled={currentPage === totalPages || totalPages === 0}
            className={`p-0 border border-[#d4d4d8] hover:bg-[#fafafa] rounded-[6px] ${
              currentPage === totalPages || totalPages === 0
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
      </div>
      </div>
      <div className="flex gap-2">
        <ButtonComp
          text={"Download Prices"}
          icon={<DownloadButtonIcon />}
          varient={"normal"}
          _onClick={() => {
            console.log("clicked");
          }}
        />

        <ButtonComp
          text={"Export To CSV"}
          icon={<CSVIcon/>}
          varient={"normal"}
          _onClick={() => {
            console.log("clicked");
          }}
        />

        <ButtonComp
          text={"Reset Data"}
          icon={<ResetIcon/>}
          varient={"danger"}
          _onClick={() => {
            console.log("clicked");
          }}
        />

        <ButtonComp
          text={"Check Missing Data"}
          icon={<CheckMissinicon/>}
          varient={"soft"}
          _onClick={() => {
            console.log("clicked");
          }}
        />
      </div>
    </div>
  );
};

export default PricesTablePanel;
