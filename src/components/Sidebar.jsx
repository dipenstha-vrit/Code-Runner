import React from "react";
import { SidebarData } from "../assets/Data/Data";
import { Tooltip } from "@mui/material";
import { useActiveStore } from "../store/store";

const Sidebar = ({ isOpen }) => {
  const { activeIndex, setActiveIndex } = useActiveStore();

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-[6.5rem] lg:top-[4.5rem] left-0 z-40 h-screen w-fit bg-gray-800 dark:border-gray-700 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="flex flex-col justify-between h-[90%] p-4 bg-gray-800">
        <ul className="space-y-2 font-medium">
          {SidebarData?.map((it, index) => (
            <li key={it.id || index} className="w-12">
              <Tooltip title={it?.name} placement="right">
                <a
                  href="#"
                  onClick={() => handleItemClick(index)}
                  className={`flex items-center p-2 rounded-lg group ${
                    activeIndex == index
                      ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {it?.img}
                </a>
              </Tooltip>
            </li>
          ))}
        </ul>
        <span className="text-xs text-gray-500">SkillSikshya</span>
      </div>
    </aside>
  );
};

export default Sidebar;
