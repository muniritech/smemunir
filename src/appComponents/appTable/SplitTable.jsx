import React, { useState, useEffect, useRef, useCallback } from "react";
import Loader from "../Loader";
import { UnSelectedCheckBox, BlackSelectedCheckBox,PencileIcon, TrashBinIcon } from "../../assets/Icon";
import { GreenCircleTick, RedCrossIcon, BlockSVG , PlayIcon, GreeTickSVG} from "../../assets/TableIcon";
import { IsChekedAllItems } from "../../services/helper"
import {Button} from "../../components/ui/button"


const SplitTable = ({ loading, data }) => {
  const [height, setHeight] = useState();
  const [table, setTable] = useState();
  const [selectedData, setselectedData] = useState([]);

  const divRef = useRef();
  useEffect(() => {
    if (divRef.current) {
      setHeight(divRef.current.clientHeight);
      setTable(true);
    }
  }, []);

  const themeStyle = {
    theme1: "border-b-2",
  };

  const HeadingData = [
    {
      id: 1,
      name: "Date",
      icons: "",
      key: "date",
      theme: "",
    },
    {
      id: 2,
      name: "Symbol",
      icons: "",
      key: "symbol",
      theme: "",
    },
    {
      id: 3,
      name: "For Factor",
      icons: "",
      key: "forFactor",
      theme: "",
    },
    {
      id: 4,
      name: "To Factor",
      icons: "",
      key: "toFactor",
      theme: "",
    },

    {
      id: 5,
      name: "Exchange",
      icons: "",
      key: "exchange",
      theme: "",
    },
    {
      id: 6,
      name: "Processed",
      icons: "",
      key: "processed",
      theme: "theme1",
    },

    {
      id: 7,
      name: "Action",
      icons: "",
      key: "action",
      theme: "theme1",
    },
  ];

  const renderCell = (value, isKey) => {
    switch (isKey) {
      case "processed":
        return (
          <div className="flex items-center gap-1 text-[#6B7280] text-[12px]" >
            {value === "Yes" ? <GreenCircleTick /> : <RedCrossIcon />}
            {value}
          </div>
        );
        default:
            return(
                <span className="text-[#6B7280] text-[12px]">
                    {value}
                </span>
            )
    }
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
    <div
      ref={divRef}
      className="h-[100%] w-full rounded-[7px] overflow-hidden border-[#e8e8ea] border"
    >
      {table && (
        <div
          className="overflow-y-auto w-full"
          style={{ maxHeight: `${height}px` }}
        >
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
                  <span className="cursor-pointer" onClick={() => AllSelect()}>
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
                  return (
                    <th
                      key={item.id}
                      className="py-3 border-[#6b7280] border-b-[2px] "
                    >
                      <div className="flex gap-2 items-center -bg-red-200">
                        {item.icons && (
                          <span className="text-[#1F2937] font-[500] text-[14px]">
                            {item?.icons}
                          </span>
                        )}
                        <span
                          className={`${
                            item.name === "Action" && "invisible"
                          } text-[13px] text-[#333333] font-[400] ${
                            themeStyle[item?.theme]
                          }`}
                        >
                          {item.name}
                        </span>
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
                            {renderCell(item[column.key], column.key)}
                            {column.key === "action" && (
                                <div className="flex-1 pr-10 flex items-center gap-3 min-w-[200px] justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <span>
                                    <PlayIcon _color="#000"/>
                                  </span>
                                  <span>
                                    <PencileIcon/>
                                  </span>
                                  <span>
                                    <BlockSVG/>
                                  </span>
                                  </div>)}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SplitTable;
