import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Routes, // Use Routes instead of Switch
  Route,  // Updated Route component
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"; // Dark background
      document.body.style.color = "white"; // Text color for dark mode
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"; // Light background
      document.body.style.color = "black"; // Text color for light mode
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert="This is alert" />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
