import React, { useState } from "react";
import TablePanel from "../appComponents/TablePanel";
import { priceData } from "../assets/dummyData";
import SplitTable from "../appComponents/appTable/SplitTable";

const Splits = () => {
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
        heading={"Split"}
        count={2530}
        tableData={priceData}
        getPaginatedData={getPaginatedData}
        getSelectedOptions={getSelectedOptions}
        getFilterOptions={getFilterOptions}
        isDate={true}
        extraButton={true}
      />
      <div className="flex flex-1">
        <SplitTable data={data} loading={loading} />
      </div>
    </div>
  );
};

export default Splits;
