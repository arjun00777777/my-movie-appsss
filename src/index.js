import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Data from "./data";
import Ddata from "./descdata";
import Card from "./card";
import Notfound from "./notfound";
import Rate from "./mostrated";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} exact />
        <Route path="/mostrated" element={<Rate />} />
        <Route path="/data" element={<Data />} />
        <Route path="/descdata" element={<Ddata />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
