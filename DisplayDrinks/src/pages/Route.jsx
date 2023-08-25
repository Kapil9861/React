import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drinks from "./drinks";
import IndiDrinks from "./indiDrinks";

function Rout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Drinks />} />
          <Route path="path/:id" element={<IndiDrinks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Rout;
