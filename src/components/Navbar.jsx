import React from "react";
import RunnerLogo from "../images/runnerlogo.png";
import { SidebarData } from "../assets/Data/Data";
import { useActiveStore } from "../store/store";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";

const Navbar = () => {
  const { activeIndex, setActiveIndex } = useActiveStore();
  const handleSelectChange = (event) => {
    setActiveIndex(event.target.value);
  };
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-1 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end gap-2 md:flex-row flex-col">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
              </button>
              <a href="/" className="flex ms-2 md:me-24">
                <img
                  src={RunnerLogo}
                  className="h-16 w-14 me-3"
                  alt="Code Runner logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Code Runner
                </span>
              </a>
              <div className="flex gap-6">
                <select
                  onChange={handleSelectChange}
                  value={activeIndex || ""}
                  class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 bg-gray-900  border-gray-700"
                >
                  {SidebarData?.map((it, index) => (
                    <option key={it.id || index} value={it.id}>
                      {it?.name}
                    </option>
                  ))}
                </select>
                <select class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 bg-gray-900  border-gray-700">
                  {SidebarData?.map((it, index) => (
                    <option value={it.name}>{it?.name}</option>
                  ))}
                </select>
                <div className="border border-green-700 bg-green-900 whitespace-nowrap p-1 rounded-md">
                  Active Users:
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex bg-green-600 px-4 py-1 rounded-md hover:bg-green-700">
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
