import React, { useEffect, useState } from "react";
import { TickBar, LightTickBar } from "../assets/Icon";
import { Link, useLocation } from "react-router-dom";

function SideBarOption({ title, route, desc, isKey }) {
  //   const isRouteActive = location.pathname === route;
  const location = useLocation();
  const [isRouteActive, setRouteActive] = useState(location.pathname === route);
  useEffect(() => {
    setRouteActive(location.pathname === route);
  }, [location.pathname]);
  const handleRouting = () => {};

  return (
    <Link
      key={title}
      to={route}
      onClick={handleRouting}
      className={`
        flex items-center gap-2 py-2 rounded-[6px] px-3 
        ${isRouteActive ? "bg-[#18181b] text-white" : "hover:bg-slate-100"}
      `}
    >
      {isKey === "Quick Links" ? <LightTickBar /> : <TickBar />}
      <div className={`flex-1 text-[14px]`}>{title}</div>
      {desc && (
        <div
          className={`
            bg-[#f4f4f5] text-[#65758c] text-[9px] px-2 py-[2px] rounded-[5px]
            ${isRouteActive ? "!bg-[#f4f4f5] text-[#64748B]" : ""}
          `}
        >
          {typeof desc === "number" ? desc.toLocaleString() : desc}
        </div>
      )}
    </Link>
  );
}

export default SideBarOption;
