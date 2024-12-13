import React, { useState } from "react";
import { SidebarData } from "../assets/Data/Data";
import { Tooltip } from "@mui/material";
import { useActiveStore } from "../store/store";


const Sidebar = () => {
  const { activeIndex, setActiveIndex } = useActiveStore();

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-fit h-screen pt-24 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {SidebarData?.map((it, index) => (
              <li key={it.id || index} className="w-12">
                <div>
                  <Tooltip title={it?.name} placement="right">
                    <a
                      href="#"
                      onClick={() => handleItemClick(it.id)}
                      className={`flex items-center p-2 rounded-lg group ${
                        activeIndex == it.id
                          ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
                          : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      {it?.img}
                    </a>
                  </Tooltip>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;