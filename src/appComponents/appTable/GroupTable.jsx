import react,{useState, useEffect, useRef} from "react"
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
import { optionsAnalysis } from "../../assets/tableHeading"
import StockMatrixFilterComp from "../StockMatrixFilterComp";
import { optionData } from "../../assets/dummyData";

const GroupTable = ({ loading, data,HeadingData }) => {
    const [selectedData, setselectedData] = useState([]);
    





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
                <tr className={`-w-full bg-[#F3F4F6] border-[#6b7280] `}>
                  

                  {HeadingData.map((item) => {
                    return (
                      <th
                      colSpan={item?.isNested && item?.option?.length}
                      rowSpan={!item?.isNested && 2}
                        key={item.id}
                        className={`py-3 border-[#6b7280] px-5 border-x-[0.5px] ${item?.isNested ? 'border-b-[1px]' : 'border-b-2'}`}
                      >
                        <div className="flex gap-2 items-center justify-center h-full -bg-red-200">
                          
                          
                          <div
                            className={`text-[13px] text-[#333333] font-[400] flex-1 whitespace-nowrap`}
                          >
                            {item?.isNested ? item.mainHeading : item?.name}
                          </div>
                          {/* <div className="bg-red-300 h-[30px] w-[2px]"/> */}

                        
                        </div>
                        
                      </th>
                    );
                  })}
                </tr>
                <tr className="-w-full bg-[#F3F4F6] border-[#6b7280] border-b-[2px] ">
                  

                  {HeadingData.map((item) => {
                    
                 return item?.isNested &&

                   item?.option.map(i => {
                      return(
                        <th
                        className="py-3 border-[#6b7280] border-b-[2px] border-x-[0.5px]"
                        >
                            <div className="px-3">
                          <span
                            className={`text-[13px] text-[#333333] font-[400] whitespace-nowrap`}
                          >
                            {i.name}
                          </span>
                          </div>
                        </th>
                      )
                    })

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
                            column.isNested ?
                            column.option.map((col) => {
                                return(
                                    <td className="py-3 px-3 border-[#e8e8ea] border-b text-[13px] text-[#333333]">{item[col?.key]}
                                    </td>
                                )
                            })
                            :
                            <td className="py-3 px-3 border-[#e8e8ea] border-b text-[13px] text-[#333333] whitespace-nowrap">
                                <div className="">
                                    {item[column.key]}
                                </div>
                            </td>
                            
                          );
                        })}
                      </tr>
                    );
                  })
                )}
              </tbody>
              
            </table>
  );
};

export default GroupTable;
