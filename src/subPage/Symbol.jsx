import React, { useState } from "react";
import TablePanel from "../appComponents/TablePanel";
import SymbolTable from "../appComponents/appTable/SymbolTable";
import { stocks } from "../assets/dummyData";
const Symbol = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getPaginatedData = (data) => {
    setData(data);
  };

const getSelectedOptions = (val) => {
  console.log("val--->", val)
}
const getFilterOptions = (val) => {
  console.log(val)
}

  return (
    <div className="flex w-full overflow-hidden flex-1 flex-col gap-4">
      <TablePanel
        heading={"Symbol"}
        count={456}
        getPaginatedData={getPaginatedData}
        tableData={stocks}
        getSelectedOptions={getSelectedOptions}
        getFilterOptions={getFilterOptions}
      />
      <div className="flex flex-1">
        <SymbolTable data={data} loading={loading} />
      </div>
    </div>
  );
};

export default Symbol;
