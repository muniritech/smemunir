import React from "react";
import SideBarOption from "./SideBarOption";
import SideBarOptionHeading from "./SideBarOptionHeading";

const SideBar = () => {
  const quickLinks = [
    {
      name: "Publish a New Article",
      desc: 2530,
      route: "/quick-links/dashboard",
    },
    {
      name: "6-Steps Process",
      desc: 436,
      route: "/quick-links/six-steps-process",
    },
    {
      name: "Upload ETF",
      desc: 2,
      route: "/quick-links/upload-etfs",
    },
    {
      name: "Process Covered calls",
      desc: 782,
      route: "/quick-links/process-covered-calls",
    },
  ];
  const sideBarData = {
    "Stock Data": [
      {
        name: "Dashboard",
        desc: "",
        route: "/stock-data/dashboard",
      },
      {
        name: "Symbols",
        desc: 2530,
        route: "/stock-data/symbols",
      },
      {
        name: "Prices",
        desc: 2530,
        route: "/stock-data/prices",
      },
      {
        name: "Splits",
        desc: 2530,
        route: "/stock-data/splits",
      },
      {
        name: "Symbol History",
        desc: 2530,
        route: "/stock-data/symbol-history",
      },
      {
        name: "Stock Matrix",
        desc: 2530,
        route: "/stock-data/stock-matrix",
      },

      {
        name: "Scanners",
        desc: 2530,
        route: "/stock-data/scanners",
      },
    ],
    "Market Data": [
      {
        name: "Stock Exchanges",
        desc: 2530,
        route: "/market-data/stock-exchanges",
      },
      {
        name: "Holidays Calendar",
        desc: 2530,
        route: "/market-data/holidays-calendar",
      },
    ],
    Articles: [
      {
        name: "Current Articles",
        desc: 2530,
        route: "/articles/current-articles",
      },
      {
        name: "Past Articles",
        desc: 2530,
        route: "/articles/past-articles",
      },
    ],
    "Tasks & Jobs": [
      {
        name: "Task Manager",
        desc: 2530,
        route: "/task-and-jobs/task-manager",
      },

      {
        name: "Job Schedular",
        desc: 2530,
        route: "/task-and-jobs/job-schedular",
      },
    ],
    Utilities: [
      {
        name: "Missing Data Analysis",
        desc: 782,
        route: "/utilities/missing-data-analysis",
      },
      {
        name: "Reset Prices",
        desc: 782,
        route: "/utilities/reset-prices",
      },
      {
        name: "Reset Symbols",
        desc: 782,
        route: "/utilities/reset-symbols",
      },
      {
        name: "Splits Sync",
        desc: 782,
        route: "/utilities/splits-sync",
      },
      {
        name: "Glossary",
        desc: 782,
        route: "/utilities/glossary",
      },
    ],
    Administration: [
      {
        name: "Admin Accounts",
        desc: "",
        route: "/administration/admin-accounts",
      },
      {
        name: "System Configuration",
        desc: "",
        route: "/administration/system-configuration",
      },
    ],
  };
  return (
    <div className="border-r border-[#e4e4e7] -bg-green-200 w-[100%] h-[100%] py-3 px-3 overflow-auto">
      <div className="-bg-green-200 w-[100%] h-[100%]">
        <div className="flex flex-col gap-2">
          <div>
            <SideBarOption title={"Business Dashboard"} desc={""} route={"/"} />
          </div>
          <div className="bg-[#F3F4F6] py-2 px-2 rounded-[18px]">
            <SideBarOptionHeading text={"Quicks Links"} />
            <div>
              {quickLinks.map((item, index) => (
                <SideBarOption
                  key={index}
                  title={item?.name}
                  desc={item?.desc}
                  route={item?.route}
                  isKey={"Quick Links"}
                />
              ))}
            </div>
          </div>
          {Object.keys(sideBarData).map((item, index) => {
            return (
              <>
                <div className="flex flex-col gap-1" key={index}>
                  <SideBarOptionHeading text={item} />
                  <div className="flex flex-col gap-1">
                    {sideBarData[item].map((i) => (
                      <SideBarOption
                        key={i.name}
                        title={i.name}
                        desc={i.desc}
                        route={i.route}
                        isKey={item}
                      />
                    ))}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
