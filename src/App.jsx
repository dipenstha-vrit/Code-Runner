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
  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState("");
  console.log(code, "code");
  const [socketUrl, setSocketUrl] = useState(
    "wss://compiler.skillshikshya.com/ws/compiler/"
  );
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    shouldReconnect: () => true, // Automatically try to reconnect if the WebSocket closes
  });
  console.log(language, "language");

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
    if (lastMessage) {
      console.log("Received message:", lastMessage);
      // Process the incoming message and update output if necessary
      if (lastMessage.data) {
        setOutput(lastMessage.data); // Update output box with response
      }
    }
  }, [lastMessage]);

  // Handle running code (sending WebSocket message)
  const handleRunCode = () => {
    if (readyState === ReadyState.OPEN) {
      const message = {
        language: language,
        code: code,
        command: "run",
      };
      sendMessage(JSON.stringify(message)); // Send the code to the WebSocket server
    } else {
      setOutput("WebSocket is not connected.");
    }
  };

  return (
    <div className="main-container">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        code={code}
        setIsSidebarOpen={setIsSidebarOpen}
        sendMessage={sendMessage}
        readyState={readyState}
        handleRunCode={handleRunCode}
      />
      <Sidebar isOpen={isSidebarOpen} />
      <MainComponent
        code={code}
        setCode={setCode}
        language={language}
        setLanguage={setLanguage}
        handleRunCode={handleRunCode}
        output={output}
      />
    </div>
  );
};

export default App;
