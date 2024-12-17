import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainComponent from "./components/MainComponent";
import { SidebarData } from "./assets/Data/Data";
import { useActiveStore } from "./store/store";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { activeIndex } = useActiveStore();
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState("");
  const [socketUrl, setSocketUrl] = useState(
    "wss://compiler.skillshikshya.com/ws/compiler/"
  );
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    socketUrl,
    {
      shouldReconnect: () => true, // Automatically try to reconnect if the WebSocket closes
    }
  );

  useEffect(() => {
    setLanguage(SidebarData[activeIndex]?.name.toLowerCase());
  }, [activeIndex]);
  // Handle WebSocket connection state changes
  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      // WebSocket connection opened
      console.log("WebSocket connected");
    }
  }, [readyState]);

  // Handle incoming WebSocket messages
  useEffect(() => {
    if (lastJsonMessage) {
      console.log("Received message:", lastJsonMessage);
      // Process the incoming message and update output if necessary
      if (lastJsonMessage.data) {
        setOutput((prev) => prev + lastJsonMessage.data); // Update output box with response
      }
    }
  }, [lastJsonMessage]);

  // Handle running code (sending WebSocket message)
  const handleRunCode = () => {
    if (readyState === ReadyState.OPEN) {
      const message = {
        language: language,
        code: code,
        command: "run",
      };
      setOutput("");
      sendJsonMessage(message); // Send the code to the WebSocket server
    } else {
      setOutput("WebSocket is not connected.");
    }
  };
  const handleInputCode = () => {
    const message = {
      command: "input",
      input: input,
    };
    sendJsonMessage(message);
  };
  console.log(input, "input");
  return (
    <div className="main-container">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        code={code}
        setIsSidebarOpen={setIsSidebarOpen}
        sendJsonMessage={sendJsonMessage}
        readyState={readyState}
        handleRunCode={handleRunCode}
      />
      <Sidebar isOpen={isSidebarOpen} />
      <MainComponent
        input={input}
        setInput={setInput}
        code={code}
        setCode={setCode}
        language={language}
        setLanguage={setLanguage}
        handleRunCode={handleRunCode}
        output={output}
        setOutput={setOutput}
        handleInputCode={handleInputCode}
      />
    </div>
  );
};

export default App;
