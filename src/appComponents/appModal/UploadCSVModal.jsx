import React, { useRef, useState } from "react";
import ModalHeader from "./ModalHeader";
import { UploadCSVSVG } from "../../assets/TableIcon";

const UploadCSVModal = ({ _onClose }) => {
  const [selectedMainTab, setSelectedMainTab] = useState("Zacks");
  const [file, setFiles] = useState("");
  const mainTabs = ["Zacks", "Dividend", "MG"];
  const inputRef = useRef();
  const selectedHandler = (name) => {
    setSelectedMainTab(name);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event.dataTransfer.files);
  };
  return (
    <div className="bg-white w-[600px] -h-[300px] px-4 py-4 rounded-md flex flex-col gap-5">
      <ModalHeader text={"Upload CSVs"} _onClose={_onClose} />

      <div>
        <div className="flex w-fit bg-gray-100 rounded-[8px] p-1">
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

      <div
        onClick={() => inputRef.current.click()}
        className="h-[250px] border border-dashed bg-[#FCFCFC] flex items-center justify-center"
      >
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="flex flex-col items-center"
        >
          <UploadCSVSVG />
          <div className="text-[#333333] text-[16px]">Upload a CSV file</div>
          <div className="text-[#999999] text-[13px]">Drag and Drop Here</div>
        </div>
      </div>
      <input
        type="file"
        className="hidden"
        multiple
        onChange={(e) => setFiles(e.target.files)}
        ref={inputRef}
      />
      <div className="flex gap-3 justify-end">
        <div className="bg-[#94A3B8] text-[#FAFAFA] text-[12px] font-medium px-3 py-[6px] cursor-pointer rounded-sm">
          Cancel
        </div>

        <div className="bg-[#22C55E] text-[#FAFAFA] text-[12px] font-medium px-3 py-[6px] cursor-pointer rounded-sm">
          Upload {selectedMainTab} CSV
        </div>
      </div>
    </div>
  );
};

export default UploadCSVModal;
