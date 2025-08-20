import React, { useState } from "react";

const UserStatsNavbar = ({ heading, count, getSelectedOptions,getFilterOptions }) => {
  const [selectedMainTab, setSelectedMainTab] = useState("All");
  const [selectedSubTab, setSelectedSubTab] = useState("All");
  const mainTabs = [
    "All",
    "Equity",
    "Index",
    "Money Market Fund",
    "ETF",
    "Mutual Fund",
    "Bond",
    "Unknown",
  ];
  const subTab = ["All", "Active", "Blocked", "Suspended"];

  const selectedHandler = (name) => {
    getSelectedOptions(name)
    setSelectedMainTab(name);
  };

  const selectedsubHandler = (name) => {
    setSelectedSubTab(name);
    getFilterOptions(name)
  };
  return (
    <div className="flex items-center justify-between p-3">
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        <h2 className="text-[20px] font-semibold">{heading}</h2>
        <span className="text-sm text-gray-500">{count?.toLocaleString()}</span>
      </div>

      {/* Tabs Section */}


{/* Main Tabs */}
        <div className="flex bg-gray-100 rounded-[8px] p-1">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => selectedHandler(tab)}
              className={`px-3 py-1 text-[14px] font-[400]  rounded-[5px] transition ${
                selectedMainTab === tab
                  ? "bg-white shadow text-black"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      <div className="flex items-center space-x-3">
        

        {/* Sub Tabs */}
        <div className="flex bg-gray-100 rounded-[8px] p-1">
          {subTab.map((tab) => (
            <button
              key={tab}
              onClick={() => selectedsubHandler(tab)}
              className={`px-3 py-1 text-[14px] font-[400]  rounded-[5px] transition ${
                selectedSubTab === tab
                  ? "bg-white shadow text-black"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserStatsNavbar;
