import React, { useState, useEffect } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { SidebarData, themeData } from "../assets/Data/Data";
import { useActiveStore, useThemeStore } from "../store/store";

const ResponsiveResizableContent = ({ code, setCode, language, output }) => {
  const [direction, setDirection] = useState("horizontal");
  const { activeIndex } = useActiveStore();
  const { themeIndex } = useThemeStore();

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
        {/* Code Editor */}
        <Panel defaultSize={50} minSize={30}>
          <div className=" bg-gray-900 rounded-md h-full p-2">
            <CodeMirror
              value={code}
              height="100%"
              className="h-dvh"
              extensions={SidebarData[activeIndex].ext || [python()]}
              onChange={(value) => setCode(value)}
              basicSetup={{ autocompletion: true }}
              theme={themeData[themeIndex].theme || black}
            />
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
          <div className="bg-gray-900 rounded-md h-full p-2">{output}</div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default ResponsiveResizableContent;
