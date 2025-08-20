import React, {useRef, useState, useEffect} from 'react'
import Loader from '../Loader';
import {PencileIcon, TrashBinIcon} from "../../assets/Icon"
import {BlockSVG, ComparisonRatioSVG} from "../../assets/TableIcon"

const HolidaysCalenderTable = ({data, loading}) => {
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
      name: "Date",
      icons: "",
      key: "date",
      theme: "",
    },
    {
      id: 2,
      name: "Name",
      icons: "",
      key: "name",
      theme: "",
    },
    {
      id: 3,
      name: "Day of Week",
      icons: "",
      key: "day",
      theme: "",
    },
    {
      id: 4,
      name: "Type",
      icons: "",
      key: "type",
      theme: "",
    },

    {
      id: 5,
      name: "status",
      icons: "",
      key: "status",
      theme: "",
    },
    {
      id: 6,
      name: "Exchange",
      icons: "",
      key: "exchange",
      theme: "",
    },
    {
      id: 7,
      name: "Time",
      icons: "",
      key: "time",
      theme:""
    },
    {
        id:8,
        name:"Open",
        icons:'',
        key:"open",
        theme:""
    },
    {
        id:9,
        name:"Close",
        icons:"",
        key:"close",
        theme:""
    },
    {
        id:10,
        name:"Action",
        icons:"",
        key:"action",
        theme:""
    }
  ];

  const themeStyle = {
    theme1: "border-b-2",
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
              <thead className=" sticky top-0 ">
                <tr className="-w-full bg-[#F3F4F6] border-[#6b7280] border-b-[2px] ">
                  

                  {HeadingData.map((item) => {
                    return (
                      <th
                        key={item.id}
                        className="py-3 px-5 border-[#6b7280] border-b-[2px] "
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
                        

                        {HeadingData.map((column) => {
                          return (
                            <td
                              className={`border-[#e8e8ea] py-3 px-5 border-b text-[13px] text-[#333333] ${
                                ""
                              }`}
                            >
                              <span className='text-[#333333] text-[13px] font-normal'>
                                {item[column.key]}
                              </span>
                              {column.key === "action" && (
                                <div className="flex items-center gap-3 -w-[200px] justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <span>
                                    <TrashBinIcon />
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
                              )}
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

export default HolidaysCalenderTable