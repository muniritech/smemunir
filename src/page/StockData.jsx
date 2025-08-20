import React from "react";
import { useParams } from "react-router-dom";
import Dashboard from "../subPage/Dashboard";
import Prices from "../subPage/Prices";
import Splits from "../subPage/Splits";
import SymbolHistory from "../subPage/SymbolHistory";
import StockMatrix from "../subPage/StockMatrix";
import Scanners from "../subPage/Scanners";
import Symbol from "../subPage/Symbol";

const StockData = () => {
  const { stock_data } = useParams();
  return (
    <div className="flex-1 flex w-full">
      {stock_data === "dashboard" && <Dashboard />}
      {stock_data === "symbols" && <Symbol />}
      {stock_data === "prices" && <Prices />}
      {stock_data === "splits" && <Splits />}
      {stock_data === "symbol-history" && <SymbolHistory />}
      {stock_data === "stock-matrix" && <StockMatrix />}
      {stock_data === "scanners" && <Scanners />}
    </div>
  );
};

export default StockData;
