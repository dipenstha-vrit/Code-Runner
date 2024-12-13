import React from "react";
import { useResizable } from "react-resizable-layout";
import "react-resizable/css/styles.css";
const MainComponent = () => {
  const { position, separatorProps } = useResizable({
    axis: "x", // Resizes horizontally
    initial: 700, // Initial width of the left block
    min: 400, // Minimum width of the left block
    max: 1000, // Maximum width of the left block
  });

  return (
    <div className="p-4 sm:ml-20 mt-[10rem] sm:mt-16 rounded-xl md:h-screen">
      <div className="wrapper flex md:flex-row flex-col md:h-full md:relative">
        {/* Left block */}
        <div
          className={`left-block h-full p-2 `}
          style={{ width: `${position}px` }}
        >
          <div className="md:h-dvh h-[400px] border rounded-xl"></div>
        </div>

        {/* Separator */}
        <div className="flex justify-center items-center">
          <div
            {...separatorProps}
            className="md:w-2 w-24 bg-gray-500 cursor-ew-resize h-2 md:h-44"
          ></div>
        </div>

        {/* Right block */}
        <div className="right-block flex-grow h-full  p-2">
          {" "}
          <div className="h-dvh border rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
