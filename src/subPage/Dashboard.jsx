import React, { useState } from "react";
import TablePanel from "../appComponents/TablePanel";
import { stocks } from "../assets/dummyData";
import DashboardTable from '../appComponents/appTable/DashboardTable'
const Dashboard = () => {
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
        heading={"Dashboard"}
        count={456}
        getPaginatedData={getPaginatedData}
        tableData={stocks}
        getSelectedOptions={getSelectedOptions}
        getFilterOptions={getFilterOptions}
      />
      <div className="flex flex-1">
      <DashboardTable data={data} loading={loading}/>
      </div>
    </div>
  );
};

export default Dashboard;
