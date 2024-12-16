import React, { useState } from "react";
import ResizableContent from "./ResizableContent";
const MainComponent = ({ code, setCode, language, output, handleRunCode }) => {
  return (
    <div className="lg:py-24 lg:ps-24  px-2 pb-4 pt-[8rem] h-dvh">
      <ResizableContent {...{ code, setCode, language, output, handleRunCode }} />
    </div>
  );
};

export default MainComponent;
