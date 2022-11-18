import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
