import React, {useState} from "react";
import logo from "./logo.svg";
import Movie from "./Components/Movie.js";
import Layout from "./Components/Layout";
import "./App.css";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#221f1f",
        width: "100%",
        height: "100%"
      }}
      className="App"
    >
      <Layout />
    </div>
  );
}

export default App;
