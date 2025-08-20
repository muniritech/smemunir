import React, { useState } from "react";
import ModalHeader from "./ModalHeader";
import NormalCalendar from "../NormalCalendar";
import InputComp from "../InputComp";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SimpleButtonComp from '../SimpleButtonComp'

const CreateHolidaysModal = ({ _onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    day: "",
    open: "",
    close: "",
    status: "",
    type: "",
    exchange: "",
    time:""
  });

  const getDate = (date, iskey) => {
    console.log(date, iskey);
    if (iskey === "date") {
      const myDate = new Date(date);
      const day = myDate.toLocaleDateString("en-US", { weekday: "long" });
      setFormData({
        ...formData,
        [iskey]: date,
        day:day
      });
    }else{
        setFormData({
            ...formData,
            [iskey]:date
        })
    }
  };
  const nameHandler = (txt, iskey) => {
    setFormData({
      ...formData,
      [iskey]: txt,
    });
  };

  return (
    <div className="bg-white w-[600px] -h-[300px] px-4 py-4 rounded-md flex flex-col gap-5">
      <ModalHeader text={"Create Holiday"} _onClose={_onClose} />
      {/* <NormalCalendar getDate={getDate}/> */}

      <div className="flex gap-3">
        <div className="w-full">
          <InputComp
            text={"Name"}
            value={formData.name}
            _onChange={(txt) => nameHandler(txt, "name")}
          />
        </div>
        <div className="w-full">
          <InputComp
            text={"Type"}
            value={formData.type}
            _onChange={(txt) => nameHandler(txt, "type")}
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-full">
          <InputComp
            text={"Status"}
            value={formData?.status}
            _onChange={(txt) => nameHandler(txt, "status")}
          />
        </div>

        <div className="w-full">
          <InputComp
            text={"Exchange"}
            value={formData.exchange}
            _onChange={(txt) => nameHandler(txt, "exchange")}
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="time-picker" className="px-1">
            Time
          </Label>
          <Input
            type="time"
            id="time-picker"
            step="1"
            defaultValue={formData.time ? formData.time :"10:10:10"}
            onChange= {(e) => nameHandler(e.target.value, 'time')}
            
            className="bg-background py-5 appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
          />
        </div>
        <div className="w-full">
          <NormalCalendar
            title={"Date"}
            value={formData?.date}
            getDate={(date) => getDate(date, "date")}
          />
        </div>
      </div>
      <div className="flex gap-3">
        <NormalCalendar
          title={"Open"}
          _placeholder={"Open Date"}
          getDate={(date) => getDate(date, "open")}
          value={formData.open}
        />
        <NormalCalendar
          title={"Close"}
          _placeholder={"Close Date"}
          getDate={(date) => getDate(date, "close")}
          value={formData.close}
        />
      </div>

      <div className="flex gap-2 justify-end">
        <SimpleButtonComp text={"Close"} varient={"danger"} _onClick={_onClose}/>
        <SimpleButtonComp text={"Create"} varient={'normal'}/>
      </div>
    </div>
  );
};

export default CreateHolidaysModal;
