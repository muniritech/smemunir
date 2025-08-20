import React, { useState } from "react";
import StockExchangeTable from "../appComponents/appTable/StockExchangeTable";
import {exchangesData} from "../assets/dummyData"

const StockExchange = () => {
  const [loading,setLoading] =useState(false)
  const count = 2350;
  return (
    <div className="flex flex-col flex-1">
      <div className="p-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h2 className="text-[20px] font-semibold">{"Stock Exchanges"}</h2>
          <span className="text-sm text-gray-500">
            {count?.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="flex flex-1">
        <StockExchangeTable data={exchangesData} loading={loading}/>
      </div>
    </div>
  );
};

export default StockExchange;
