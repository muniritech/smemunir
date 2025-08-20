import React, { useRef, useState, useEffect, useMemo } from "react";
import {
  BlackSelectedCheckBox,
  PencileIcon,
  UnSelectedCheckBox,
  TrashBinIcon,
} from ".././../assets/Icon";
import {
  BlockSVG,
  GreeTickSVG,
  ComparisonRatioSVG,
  ConnetionIcon,
} from "../../assets/TableIcon";
import Loader from "../Loader";
import { IsChekedAllItems } from "../../services/helper";
import { Button } from "../../components/ui/button";
import GroupTable from "./GroupTable";
import StockMatrixFilterComp from "../StockMatrixFilterComp";
import { optionData } from "../../assets/dummyData";
import { optionsAnalysis, stockProfile } from "../../assets/tableHeading";

const StockMatrixTable = ({ data, loading, isFilter, tab, HeadingData }) => {
  const [height, setHeight] = useState();
  const [table, setTable] = useState();
  // const [HeadingData, setHeadinData] = useState([])
  const [selectedData, setselectedData] = useState([]);
  const simpleTable = [
    "Stock Profile",
    "Stock Evaluation",
    "Signals",
    "Technical Analysis",
    "All",
  ];
  const isNestedTable = ["Options Analysis", "Fundamental Data"];
  const divRef = useRef();

  useEffect(() => {
    if (divRef.current) {
      setHeight(divRef.current.clientHeight);
      setTable(true);
    }
  }, [isFilter]);

  useEffect(() => {
    // checkHeader()
  }, [tab]);

  //  const HeadingData = [
  //           {
  //             id: 1,
  //             name: "Date",
  //             icons: "",
  //             key: "date",
  //             theme: "",
  //           },
  //           {
  //             id: 2,
  //             name: "Symbol",
  //             icons: "",
  //             key: "symbol",
  //             theme: "",
  //           },
  //           {
  //             id: 3,
  //             name: "Change Type",
  //             icons: "",
  //             key: "symbol",
  //             theme: "theme1",
  //           },
  //           {
  //             id: 4,
  //             name: "Change",
  //             icons: "",
  //             key: "exchange",
  //             theme: "theme1",
  //           },

  //           {
  //             id: 5,
  //             name: "Instrument Type",
  //             icons: "",
  //             key: "type",
  //             theme: "theme1",
  //           },
  //           {
  //             id: 6,
  //             name: "Status",
  //             icons: "",
  //             key: "status",
  //             theme: "theme1",
  //           },
  //           {
  //             id: 7,
  //             name: "Action",
  //             icons: "",
  //             key: "action",
  //           },
  //         ];

  const themeStyle = {
    theme1: "border-b-2",
  };

  const handleSelect = (event, item) => {
    event.stopPropagation();
    const findItem = selectedData.find((obj) => obj.id === item.id);
    if (findItem) {
      setselectedData(selectedData.filter((obj) => obj.id !== item.id));
      return;
    }
    setselectedData([...selectedData, item]);
  };

  const AllSelect = () => {
    const isAllSelected = IsChekedAllItems(selectedData, data);
    console.log(isAllSelected);
    if (isAllSelected) {
      setselectedData((prevData) =>
        prevData.filter(
          (item) => !data.some((newItem) => newItem.id === item.id)
        )
      );
      return;
    }
    setselectedData((prevData) => [
      ...new Map(
        [...prevData, ...data].map((item) => [item.id, item])
      ).values(),
    ]);
  };

  return (
    <div className="flex flex-1 gap-2 flex-col w-full">
      {isFilter && (
        <div className="w-full">
          <StockMatrixFilterComp />
        </div>
      )}
      <div
        ref={divRef}
        className="h-[100%] w-full rounded-[7px] overflow-hidden border-[#e8e8ea] border"
      >
        {table && (
          <div
            className="overflow-y-auto w-full"
            style={{ maxHeight: `${height}px` }}
          >
            {isNestedTable.includes(tab) && <GroupTable HeadingData={HeadingData} data={data} loading={loading} />}

            {simpleTable?.includes(tab) && (
              <table className="relative w-full border-separate border-spacing-0 min-w-[1200px]">
                {selectedData.length > 0 && (
                  <div className="flex gap-1 items-center px-2 py-1 absolute top-0 z-50 left-[62vh] h-[45px] w-[270px] bg-white rounded-md shadow-xl shadow-black/30 ">
                    <span className="text-gray-400 text-[12px] border-r border-r-gray-300 w-full ">
                      {selectedData.length + " selected:"}
                    </span>
                    <Button className="h-8 w-16 text-[11px]">Export</Button>
                    <Button
                      variant={"outline"}
                      className="h-8 w-20 text-[11px] border-red-200"
                    >
                      <TrashBinIcon />
                    </Button>
                    <Button
                      variant={"outline"}
                      className="h-8 w-20 text-[11px] border-green-200"
                    >
                      <GreeTickSVG />
                    </Button>
                  </div>
                )}

                <thead className=" sticky top-0 ">
                  <tr className="-w-full bg-[#F3F4F6] border-[#6b7280] border-b-[2px] ">
                    <th className="py-3 pl-5 font-[500] -bg-red-200 w-[50px] border-[#6b7280] border-b-[2px] ">
                      <span
                        className="cursor-pointer"
                        onClick={() => AllSelect()}
                      >
                        <div className=" h-[13px] w-[14px] ">
                          {IsChekedAllItems(selectedData, data) ? (
                            <BlackSelectedCheckBox />
                          ) : (
                            <UnSelectedCheckBox />
                          )}
                        </div>
                      </span>
                    </th>

                    {HeadingData.map((item) => {
                      // console.log("item--->", item)
                      return (
                        <th
                          key={item.id}
                          className="py-3 border-[#6b7280] border-b-[2px] whitespace-nowrap"
                        >
                          <div className="flex gap-2 px-3 w-fit  items-center -bg-red-200">
                            <div
                              className={`${
                                item.name === "Action" && "invisible"
                              } text-[13px] text-[#333333] flex flex-shrink-0  font-[400] ${
                                themeStyle[item?.theme]
                              }`}
                            >
                              {item.name}
                            </div>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="overflow-y-auto w-full">
                  {loading ? (
                    <tr className="">
                      <td
                        colSpan={8}
                        className="py-4 pl-5 border-[#e8e8ea] border-b -bg-red-200 "
                      >
                        <div className="flex justify-center items-center h-[300px]">
                          <Loader />
                        </div>
                      </td>
                    </tr>
                  ) : data.length === 0 ? (
                    <tr>
                      <td colSpan={8}>
                        <div className="flex justify-center items-center h-[300px]">
                          no Data found
                        </div>
                      </td>
                    </tr>
                  ) : (
                    data.map((item) => {
                      const isBlocked = item?.status === "block by admin";
                      const isSelected = selectedData.some(
                        (selectedItem) => item.id === selectedItem.id
                      );
                      return (
                        <tr
                          className={`w-full -bg-[#f3f4f7] border-[#e8e8ea] border-b group -hover:bg-[#6B7280]/5 ${""} 
                      ${
                        isBlocked
                          ? "bg-[#fef2f2]"
                          : isSelected
                          ? "bg-[#dff2fd]"
                          : ""
                      }
    ${isBlocked || isSelected ? "" : "hover:bg-[#6B7280]/5"}
                      `}
                        >
                          {/* check box */}
                          <td className="py-4 pl-5 border-[#e8e8ea] border-b">
                            <span
                              className="cursor-pointer inline-block h-[13px] w-[14px] -bg-red-200"
                              onClick={(event) => handleSelect(event, item)}
                            >
                              {selectedData.some(
                                (selectedItem) => item.id === selectedItem.id
                              ) ? (
                                <BlackSelectedCheckBox />
                              ) : (
                                <UnSelectedCheckBox />
                              )}
                            </span>
                          </td>

                          {HeadingData.map((column) => {
                            return (
                              <td
                                className={`border-[#e8e8ea] border-b text-[13px] text-[#333333] ${
                                  // column.key === "user" && "w-[350px]"
                                  ""
                                }`}
                              >
                                <span className="px-3">{item[column.key]}</span>
                                {/* <RenderCell
                                iskey={column.key}
                                value={item[column.key]}
                              /> */}
                                {/* {column.key === "action" && (
                                <div className="flex items-center gap-3 w-[200px] justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <span>
                                    <ComparisonRatioSVG />
                                  </span>
                                  <span>
                                    <PencileIcon />
                                  </span>
                                  <span>
                                    {item.status === "block by admin" ? (
                                      <GreeTickSVG />
                                    ) : (
                                      <BlockSVG />
                                    )}
                                  </span>
                                </div>
                              )} */}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StockMatrixTable;
