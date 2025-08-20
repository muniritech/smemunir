import React, { useState } from "react";
import TablePanel from "../appComponents/TablePanel";
import {priceData} from "../assets/dummyData";
import SymbolHistoryTable from "../appComponents/appTable/SymbolHistoryTable";
const SymbolHistory = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPaginatedData = (data) => {
    setData(data);
  };

  const getSelectedOptions = (val) => {
    console.log("val--->", val);
  };
  const getFilterOptions = (val) => {
    console.log(val);
  };
  return (
    <div className="flex w-full overflow-hidden flex-1 flex-col gap-4">
      <TablePanel
        heading={"Symbol History"}
        count={2530}
        getPaginatedData={getPaginatedData}
        tableData={priceData}
        getSelectedOptions={getSelectedOptions}
        getFilterOptions={getFilterOptions}
        isDate={true}
      />
      <div className="flex flex-1">
        <SymbolHistoryTable loading={loading} data={data}/>
      </div>
    </div>
  );
};

export default SymbolHistory;
