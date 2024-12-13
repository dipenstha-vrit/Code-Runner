import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainComponent from "./components/MainComponent";

const App = () => {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Sidebar />
        <MainComponent />
      </div>
    </>
  );
};

export default App;
