import React, { useRef, useState, useEffect } from "react";
import Loader from "../Loader";

const StockExchangeTable = ({loading, data}) => {
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
      const HeadingData = [
        {
          id: 1,
          name: "Description",
          icons: "",
          key: "exchangeDescription",
          theme: "",
        },
        {
          id: 2,
          name: "Ex Code",
          icons: "",
          key: "exhangeCode",
          theme: "",
        },
        {
          id: 3,
          name: "Ex Group",
          icons: "",
          key: "exGroup",
          theme: "",
        },
        {
          id: 4,
          name: "Status",
          icons: "",
          key: "status",
          theme: "",
        },
    
        {
          id: 5,
          name: "Primary Type",
          icons: "",
          key: "type",
          theme: "",
        },
        {
          id: 6,
          name: "Symbol Count",
          icons: "",
          key: "symbolCount",
          theme: "",
        },
        {
          id: 7,
          name: "Action",
          icons: "",
          key: "action",
        },
      ];
    
      const themeStyle = {
        theme1: "border-b-2",
      };
      const checkData  = (value, isKey) => {
if(isKey === "symbolCount"){
  return value?.toLocaleString()
}else{
  return value
}
      }
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
              {/* {selectedData.length > 0 && (
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
              )} */}
              <thead className=" sticky top-0 ">
                <tr className="-w-full bg-[#F3F4F6] border-[#6b7280] border-b-[2px] ">
                  {/* <th className="py-3 pl-5 font-[500] -bg-red-200 w-[50px] border-[#6b7280] border-b-[2px] ">
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
                  </th> */}

                  {HeadingData.map((item) => {
                    return (
                      <th
                        key={item.id}
                        className="py-3 px-4 border-[#6b7280] border-b-[2px] "
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
                        {/* <td className="py-4 pl-5 border-[#e8e8ea] border-b">
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
                        </td> */}

                        {HeadingData.map((column) => {
                          return (
                            <td
                              className={`border-[#e8e8ea] py-4 border-b text-[13px] text-[#333333] ${
                                // column.key === "user" && "w-[350px]"
                                ""
                              }`}
                            >
                              <span className="px-4 ">
                                {checkData(item[column.key], column.key)}
                              </span>
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
          </div>
        )}
      </div>
  )
}

export default StockExchangeTable