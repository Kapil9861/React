// import { useState } from "react";
// import "./App.css";
// import Drinks from "./pages/drinks";
// import { useSelector, useDispatch } from "react-redux";
// import { Route } from "react-router-dom";
// import Form from "./pages/form";
// import Homepage from "./pages/Homepage";
// import IndiDrinks from "./pages/indiDrinks";
// import Rout from "./pages/Rout";
// import { increment, decrement } from "./pages/Redux/slice/CounterSlice";

// function App() {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   function incre() {
//     dispatch(increment());
//   }
//   function decre() {
//     dispatch(decrement());
//   }
//   return (
//     <>
//       {/* For the drinks part */}
//       {/* <Drinks />
//       <IndiDrinks /> */}
//       {/* <Rout /> */}
//       {/* For the revision part */}
//       {/* <Homepage />
//       <Form /> */}

//       {/* Counter */}
//       <button onClick={decre}>-</button>
//       <span>{count}</span>
//       <button onClick={incre}>+</button>
//     </>
//   );
// }

// export default App;

//Login Form Only
import React from "react";
import Signin from "./pages/Signin";

function App() {
  return <Signin />;
}

export default App;
