import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dispc from "./dispc";
import Main from "./main";

function Route() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="dispc/:id" element={<Dispc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Route;
