import React from "react";
import SideBar from "./SideBar";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import QuickLinks from "../page/QuickLinks";
import StockData from "../page/StockData";
import MarketData from "../page/MarketData";
import TasksAndJobs from "../page/TasksAndJobs";
import Utilities from "../page/Utilities";
import Articles from "../page/Articles";
import Administrattion from "../page/Administration";
import Dashboard from "../page/Dashboard";

const MiddleContainer = () => {
  return (
    <div className="flex flex-col h-full w-full -bg-red-100">
      <div className="flex flex-col">
        <div className="h-[55px]">
          <NavBar />
        </div>
      </div>

      <div className="flex h-[calc(100vh-55px)] w-full">
        <div className="-bg-blue-300 min-w-[300px] w-[17%]">
          <SideBar />
        </div>
        <div className="w-[83%] h-full max-w-full flex-1 flex overflow-hidden">
          <div className=" flex-1 flex h-[100%] overflow-x-hidden overflow-y-auto py-3 px-3">
            <Routes>
              <Route
                path="/quick-links/:quick_links"
                element={<QuickLinks />}
              />
              <Route path="/stock-data/:stock_data" element={<StockData />} />
              <Route
                path="/market-data/:market_data"
                element={<MarketData />}
              />
              <Route path="/articles/:articles" element={<Articles />} />
              <Route
                path="/administration/:administration"
                element={<Administrattion />}
              />
              <Route
                path="/task-and-jobs/:task_and_job"
                element={<TasksAndJobs />}
              />
              <Route path="/utilities/:utilities" element={<Utilities />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleContainer;
