import React, { useState } from "react";
import RunnerLogo from "../images/runnerlogo.png";
import { SidebarData, themeData } from "../assets/Data/Data";
import { useActiveStore, useThemeStore } from "../store/store";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import { HamburgerIcon } from "../assets";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, code, handleRunCode }) => {
  const { activeIndex, setActiveIndex } = useActiveStore();
  const { themeIndex, setThemeIndex } = useThemeStore();

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelectChange = (event) => {
    setActiveIndex(event.target.value);
  };
  console.log(activeIndex, "activeIndex");

  const handleThemeChange = (e) => {
    setThemeIndex(e.target.value);
  };

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-gray-800">
        <div className="px-3 py-1 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex items-center gap-4">
              {/* Sidebar Toggle Button */}
              <button
                onClick={handleSidebarToggle}
                aria-controls="logo-sidebar"
                aria-expanded={isSidebarOpen}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <HamburgerIcon />
              </button>
              <a href="/" className="flex items-center">
                <img
                  src={RunnerLogo}
                  className="h-16 w-14 me-3"
                  alt="Code Runner logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Code Runner
                </span>
              </a>
              <div className="border border-green-700 bg-green-900 whitespace-nowrap p-1 rounded-md">
                Active Users:
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <select
                onChange={handleSelectChange}
                value={activeIndex || ""}
                className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 bg-gray-900 border-gray-700 text-white"
              >
                {SidebarData?.map((it, index) => (
                  <option key={it.id || index} value={index}>
                    {it?.name}
                  </option>
                ))}
              </select>
              <select
                onChange={handleThemeChange}
                value={themeIndex || ""}
                className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 bg-gray-900 border-gray-700 text-white"
              >
                {themeData?.map((it, index) => (
                  <option key={index} value={index}>
                    {it?.name}
                  </option>
                ))}
              </select>

              <div className="flex gap-2">
                <button
                  className="flex bg-green-600 px-4 py-1 rounded-md hover:bg-green-700"
                  onClick={() => handleRunCode(code)}
                >
                  <PlayArrowIcon /> <span>Run</span>
                </button>
                <button className="flex bg-red-600 px-4 py-1 rounded-md hover:bg-red-700">
                  <StopIcon /> <span>Stop</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
