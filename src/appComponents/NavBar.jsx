import React, { useState } from "react";
import { Search } from "../assets/Icon";
import { TaskManager } from "../assets/TableIcon";
import BaseModal from "./appModal/BaseModal";
import TaskMnagerModal from "./appTable/TaskMnagerModal";
import { useDispatch } from "react-redux";
import {toggaleAuth} from "../redux/slices/AuthSlice"
const NavBar = () => {
  let userAgent = window.navigator.userAgent;
  let platform = window.navigator.platform;

  const [taskModal, setTaskModal] = useState(false);

  const dispatch = useDispatch()
  const handleClick = () => {
    // setIsOpen(true)
  };

  return (
    <>
      {taskModal && (
        <BaseModal>
          <TaskMnagerModal  _onClose={()=> setTaskModal(!taskModal)}/>
        </BaseModal>
      )}
      <nav className="-bg-slate-100 h-[100%] flex px-5 justify-between border-b border-[#e4e4e7]">
        <div className="flex gap-7">
          <div className="-bg-green-200 flex items-center justify-center -w-[200px] font-[600] text-[16px]">
            SME Core Admin
          </div>
          <div
            className="flex items-center justify-center py-2"
            onClick={handleClick}
          >
            <div className="flex items-center justify-center -w-full -bg-red-200 px-3 gap-2 h-full border border-[#d4d4d8] rounded-[6px]">
              <div>
                <Search />
              </div>
              <input
                placeholder="Search stock"
                className="w-full h-full outline-none border-none bg-transparent placeholder:text-[#9CA3AF] placeholder:text-[14px]"
                readOnly
              />
              <div className="flex w-fit shrink-0 items-center justify-center text-[#9ca3af] text-[13px]">
                {platform.slice(0, 3) === "Mac" ? "⌘+F" : "Ctrl + F"}
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <ul className="flex gap-3 items-center justify-center h-full">
            <li onClick={()=> setTaskModal(!taskModal)} className="flex items-center gap-2 text-[#09090B] text-[12px] px-3 cursor-pointer">
              <TaskManager />
              Task Manager
            </li>
            <li className="-bg-green-200 text-[#09090B] text-[12px] px-3 cursor-pointer">
              Account
            </li>
            <li
              onClick={() => {
                localStorage.clear();
                dispatch(toggaleAuth(false))
                
              }}
              className="-bg-green-200 px-3 cursor-pointer text-[#09090B] text-[12px]"
            >
              Sign Out
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
