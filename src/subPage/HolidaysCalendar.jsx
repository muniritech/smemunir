import React, { useState } from "react";
import HolidaysCalenderTable from "../appComponents/appModal/HolidaysCalenderTable";
import {holidayData} from "../assets/dummyData";
import ButtonComp from "../appComponents/ButtonComp";
import {PencileIcon} from "../assets/Icon"
import BaseModal from "../appComponents/appModal/BaseModal";
import CreateHolidaysModal from "../appComponents/appModal/CreateHolidaysModal";

const HolidaysCalendar = () => {
  const [loading, setLoading] = useState(false);
  const [holidayModal, setHolidayModal] = useState(false)
  const count = 2530;
  return (
    <div className="flex flex-col flex-1">
      {
        holidayModal && (
          <BaseModal>
          <CreateHolidaysModal _onClose={()=> {setHolidayModal(!holidayModal)}}/>
          </BaseModal>
        )
      }
      <div className="p-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h2 className="text-[20px] font-semibold">{"Holidays Calendar"}</h2>
          <span className="text-sm text-gray-500">
            {count?.toLocaleString()}
          </span>
        </div>

        <div>
          <ButtonComp icon={<PencileIcon _color="#fff"/>} text={"Create Holiday"} varient={'normal'} _onClick={()=> setHolidayModal(!holidayModal)}/>
        </div>
      </div>
      <div className="flex flex-1">
        <HolidaysCalenderTable data={holidayData}  loading={loading}/>
      </div>
    </div>
  );
};

export default HolidaysCalendar;
