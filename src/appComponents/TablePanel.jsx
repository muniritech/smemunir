import React, { useState, useEffect } from "react";
import UserStatsNavbar from "./UserStatsNavbar";
import TableControls from "../appComponents/TableControls";

const TablePanel = ({ heading, count, getPaginatedData, tableData, extraButton = false, getSelectedOptions,getFilterOptions, isDate= false }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [value, setValue] = useState("");
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

  const handleSearch = (event) => {
    setValue(event.target.value);
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
    <div>
      <UserStatsNavbar heading={heading} count={count} getSelectedOptions={getSelectedOptions} getFilterOptions={getFilterOptions}/>
      <TableControls
      isDate={isDate}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        searchQuery={value}
        handleSearch={handleSearch}
        pageCount={currentPage}
        rowsPerPage={rowsPerPage}
        totalPages={totalPages}
        pageIncrement={pageIncrement}
        pageDecrement={pageDecrement}
        handleRowsChange={handleRowsChange}
        extraButton={extraButton}
      />
      
    </div>
  );
};

export default TablePanel;
