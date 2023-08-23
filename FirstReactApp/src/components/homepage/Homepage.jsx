import { Router } from "react-router-dom";
// import HomeOfDrinks from "../drinks/homeofdrinks";
// import Idrink from "../drinks/idrink";
import Navbar from "./navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      {/* <Idrink />
      <HomeOfDrinks /> */}
      <Router />
    </>
  );
}

export default Homepage;
