import React, { useEffect, useState } from "react";
import StockMatrixTablePanel from "../appComponents/StockMatrixTablePanel";
import StockMatrixTable from "../appComponents/appTable/StockMatrixTable";
import { priceData } from "../assets/dummyData";
import {
  stockProfileData,
  optionData,
  stockEvalutionsData,
  signalData,
  technicalAnalysisData,
  fundamentalData,
} from "../assets/dummyData";
import {
  optionsAnalysis,
  stockProfile,
  stockEvalutions,
  signals,
  technicalAnalysis,
  fundamental,
} from "../assets/tableHeading";

const StockMatrix = () => {
  const [loading, setLoading] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [headings, setHeadings] = useState([]);
  const [tab, setTab] = useState("All");
  const getSelectedOptions = (tab) => {
    console.log(tab);
    setTab(tab);
  };
  useEffect(() => {
    checkData();
  }, [tab]);

  const checkData = () => {
    switch (tab) {
      case "Stock Profile":
        setHeadings(stockProfile);
        setTableData(stockProfileData);
        console.log(headings, stockProfile);
        break;
      case "Options Analysis":
        setTableData(optionData);
        setHeadings(optionsAnalysis);
        break;
      case "Stock Evaluation":
        setHeadings(stockEvalutions);
        setTableData(stockEvalutionsData);
        break;
      case "Signals":
        setHeadings(signals);
        setTableData(signalData);
        break;
      case "Technical Analysis":
        setHeadings(technicalAnalysis);
        setTableData(technicalAnalysisData);
        break;
      case "Fundamental Data":
        setHeadings(fundamental);
        setTableData(fundamentalData);
        break;
      default:
        setHeadings(stockProfile);
        setTableData(stockProfileData);
        break;
    }
  };
  return (
    <div className="flex w-full overflow-hidden flex-1 flex-col gap-4">
      <StockMatrixTablePanel
        heading={"Stock Matrix"}
        count={2530}
        _onclick={() => setIsFilter(!isFilter)}
        getSelectedOptions={getSelectedOptions}
      />
      <div className="flex flex-1">
        <StockMatrixTable
          tab={tab}
          HeadingData={headings}
          data={tableData}
          loading={loading}
          isFilter={isFilter}
        />
      </div>
    </div>
  );
};

export default StockMatrix;
