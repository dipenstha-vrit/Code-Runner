import React, { useState, useEffect } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { SidebarData, themeData } from "../assets/Data/Data";
import { useActiveStore, useThemeStore } from "../store/store";
import { Button, TextareaAutosize } from "@mui/material";
import OutputPannel from "./OutputPannel";

const ResponsiveResizableContent = ({
  code,
  setCode,
  language,
  output,
  setOutput,
  handleRunCode,
  handleInputCode,
  input,
  setInput,
}) => {
  const [direction, setDirection] = useState("horizontal");
  const { activeIndex } = useActiveStore();
  const { themeIndex } = useThemeStore();
  const handleClear = () => {
    setOutput("");
    setInput("");
  };

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
              width="100%"
              className="h-dvh w-full"
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
          <div className="bg-gray-900 rounded-md h-dvh overflow-y-scroll p-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Output: </span>{" "}
              <Button
                variant="outlined"
                size="small"
                type="button"
                onClick={handleClear}
              >
                Clear
              </Button>
            </div>

            {/* <span className="text-gray-200">{output}</span> */}
            {activeIndex == "1" ? (
              <iframe
                className="bg-white w-full h-full"
                srcDoc={code}
                title="HTML Preview"
                sandbox="allow-scripts"
              />
            ) : (
              <OutputPannel
                output={output}
                setOutput={setOutput}
                input={input}
                setInput={setInput}
                handleRunCode={handleRunCode}
                handleInputCode={handleInputCode}
              />
            )}
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default ResponsiveResizableContent;
