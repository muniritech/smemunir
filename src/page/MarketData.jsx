import React from "react";
import { useParams } from "react-router-dom";
import HolidaysCalendar from "../subPage/HolidaysCalendar";
import StockExchange from "../subPage/StockExchange";

const MarketData = () => {
  const { market_data } = useParams();
  return (
    <div className="flex flex-1">
      {market_data === "stock-exchanges" && <StockExchange />}
      {market_data === "holidays-calendar" && <HolidaysCalendar />}
    </div>
  );
};

export default MarketData;
