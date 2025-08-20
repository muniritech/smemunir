import React, { useState } from "react";
import PricesTablePanel from "../appComponents/PricesTablePanel";
import { priceData } from "../assets/dummyData";
import PricesTable from "../appComponents/appTable/PricesTable";

const Prices = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] =useState(false)
  const getPaginatedData = (data) => {
    setData(data);
  };
  return (
    <div className="flex w-full overflow-hidden flex-1 flex-col gap-4">
      <div className="p-3">
        <div className="flex items-center space-x-2">
          <h2 className="text-[20px] font-semibold">IBM Prices</h2>
          <span className="text-sm text-gray-500">2,530</span>
        </div>
      </div>
      <PricesTablePanel
        tableData={priceData}
        getPaginatedData={getPaginatedData}
      />
      <div className="flex flex-1">
        <PricesTable data={data} loading={loading}/>
      </div>
    </div>
  );
};

export default Prices;
