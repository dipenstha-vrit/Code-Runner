import React, { useState, useEffect, useRef } from "react";

const OutputPannel = ({
  output,
  setOutput,
  input,
  setInput,
  handleRunCode,
  handleInputCode,
}) => {
  const [displayOutput, setDisplayOutput] = useState(""); // Persistent output display
  const terminalRef = useRef(null);

  // Update display output whenever new output comes in
  useEffect(() => {
    setDisplayOutput((prev) => prev + output);
  }, [output]);

  const handleTerminalKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent newlines
      if (input) {
        // Append the input to displayOutput (like a terminal)
        setDisplayOutput((prev) => prev + "\n" + input);

        // Send input to the backend
        handleInputCode();

        // Clear input field
        setInput("");
      }
    }
  };

  return (
    <textarea
      ref={terminalRef}
      title="output"
      value={displayOutput + "\n" + input} // Persistent output + input line
      onChange={(e) => setInput(e.target.value)} // Update current input
      onKeyDown={handleTerminalKeyDown}
      className="bg-transparent focus:outline-none w-full h-full text-gray-300 resize-none"
      style={{ lineHeight: "1.5em", whiteSpace: "pre-wrap" }} // Preserve formatting
      readOnly={false} // Allow only input typing
    />
  );
};

export default OutputPannel;
