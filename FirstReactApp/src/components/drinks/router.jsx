import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeOfDrinks from "./homeofdrinks";
import Main from "./main";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="dispc/:id" element={<HomeOfDrinks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
