import React, { useState, useEffect } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const ResponsiveResizableContent = () => {
  const [direction, setDirection] = useState("horizontal");

  useEffect(() => {
    // Determine layout direction based on window width
    const handleResize = () => {
      setDirection(window.innerWidth < 1024 ? "vertical" : "horizontal");
    };

    // Set initial direction
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-dvh p-2 rounded-md bg-gray-800 text-white">
      <PanelGroup
        className="h-full"
        autoSaveId="responsive-panel-group"
        direction={direction}
      >
        {/* Left or Top Panel */}
        <Panel defaultSize={50} minSize={30}>
          <div className=" bg-gray-900 rounded-md h-full p-2">
            <p>Left/Top Panel</p>
          </div>
        </Panel>

        {/* Resizer Bar */}
        <PanelResizeHandle
          className={`${
            direction === "horizontal" ? "w-1 h-full" : "w-full h-1"
          } bg-gray-700 mx-2`}
        />

        {/* Right or Bottom Panel */}
        <Panel defaultSize={50} minSize={20}>
          <PanelGroup
            className="h-full"
            autoSaveId="inner-responsive-panel-group"
            direction="vertical"
          >
            {/* Top Right or Bottom Top Panel */}
            <Panel defaultSize={30} minSize={10}>
              <div className="bg-gray-900 rounded-md h-full p-2">
                <form className="h-full w-full">
                  <textarea
                    placeholder="Enter Input here"
                    name="inputBox"
                    id="inputBox"
                    className="w-full h-full bg-transparent resize-none focus:outline-none"
                  ></textarea>
                </form>
              </div>
            </Panel>

            {/* Vertical Resizer */}
            <PanelResizeHandle className="w-full h-1 bg-gray-700 my-2" />

            {/* Bottom Right or Bottom Panel */}
            <Panel defaultSize={70} minSize={50}>
              <div className="bg-gray-900 rounded-md h-full p-2">
                <p>Output</p>
              </div>
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default ResponsiveResizableContent;
