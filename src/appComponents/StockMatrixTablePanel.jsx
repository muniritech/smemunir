import React, { useState } from "react";
import ButtonComp from "./ButtonComp";
import { UploadButtonSVG, FilterQeefSVG } from "../assets/TableIcon";
import BaseModal from "./appModal/BaseModal";
import StockMatrixModal from "./appModal/StockMatrixModal";
import UploadCSVModal from "./appModal/UploadCSVModal";
// import ButtonComp from "./ButtonComp";

const StockMatrixTablePanel = ({ heading, count, _onclick, getSelectedOptions }) => {
  const [selectedMainTab, setSelectedMainTab] = useState("All");
  const [modal, setModal] = useState("run stock profife");
  const [isModal, setIsModal] = useState(false);
  const [uploadCSVModal, setUplodaCSVModal] = useState(false);

  const selectedHandler = (name) => {
    getSelectedOptions(name)
    setSelectedMainTab(name);
  };
  const mainTabs = [
    "All",
    "Stock Profile",
    "Stock Evaluation",
    "Signals",
    "Options Analysis",
    "Technical Analysis",
    "Fundamental Data",
    
  ];

  const modalData = {
    "run stock profife": {
      heading: "Run Stock Profile",
      msg: "Are you sure you want to run stock profile process? It includes",
      buttonText: "Run Stock Profile Job",
    },
    "calc flag": {
      heading: "Calc Flags",
      msg: "Are you sure you want to run calc flags process? It includes",
      buttonText: "Calc Flags Job",
    },
    "run options calc": {
      heading: "Run Options Calc",
      msg: "Are you sure you want to run options calc? It includes",
      buttonText: "Run Options Calc Job",
    },
    "download fundamentals": {
      heading: "Download Fundamentals",
      msg: "Are you sure you want to download fundamentals? It includes",
      buttonText: "Download Fundamentals Data",
    },
    "run stock profile": {
      heading: "Run Stock Profile",
      msg: "Are you sure you want to update last two candles? It includes",
      buttonText: "Update Last Two Candles",
    },
  };

  const selectedModalType = modalData[modal];

  const modalHamdler = (val) => {
    setModal(val);
    setIsModal(!isModal);
  };

  return (
    <div>
      {uploadCSVModal && (
        <BaseModal>
          <UploadCSVModal _onClose={() => setUplodaCSVModal(!uploadCSVModal)} />
        </BaseModal>
      )}

      {isModal && (
        <BaseModal>
          <StockMatrixModal
            heading={selectedModalType?.heading}
            msg={selectedModalType?.msg}
            ButtonText={selectedModalType?.buttonText}
            _onClose={() => setIsModal(!isModal)}
          />
        </BaseModal>
      )}

      <div className="flex items-center justify-between py-3 pl-3">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <h2 className="text-[20px] font-semibold">{heading}</h2>
          <span className="text-sm text-gray-500">
            {count?.toLocaleString()}
          </span>
        </div>
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
      </div>

      <div className="flex items-center justify-between -px-3">
        <div className="flex gap-3">
          <ButtonComp
            varient={"normal"}
            text={"Run All Caclulations"}
            _onClick={() => console.log('jj')}
          />
          <ButtonComp
            icon={<UploadButtonSVG />}
            text={"Upload CSVs"}
            varient={"success"}
             _onClick={() => setUplodaCSVModal(!uploadCSVModal)}
          />
        </div>

        <div
          onClick={_onclick}
          className="flex w-fit text-[#334155] px-3 py-2 text-[14px] font-medium items-center gap-2 rounded-md bg-[#F4F4F5] cursor-pointer "
        >
          <FilterQeefSVG />
          Filter
        </div>
      </div>
      <div className="flex gap-3 pt-2">
        <ButtonComp
          text={"Run Stock Profile"}
          _onClick={() => modalHamdler("run stock profife")}
        />
        <ButtonComp
          text={"Calc Flags"}
          _onClick={() => modalHamdler("calc flag")}
        />
        <ButtonComp
          text={"Run Options Calc"}
          _onClick={() => modalHamdler("run options calc")}
        />
        <ButtonComp
          text={"Download Fundamentals"}
          _onClick={() => modalHamdler("download fundamentals")}
        />
        <ButtonComp
          text={"Update Last Two Candles"}
          _onClick={() => modalHamdler("run stock profile")}
        />
      </div>
    </div>
  );
};

export default StockMatrixTablePanel;
