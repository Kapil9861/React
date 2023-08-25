import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Homepage from "./pages/Homepage.jsx";
// import Form from "./pages/form.jsx";
// import { Provider } from "react-redux";
// import { store } from "./pages/Redux/slice/store.js";
// // const routerConfig = createBrowserRouter([
// //   {
// //     path: "/", //Control shift will give all the available function inside package
// //     element: <Homepage />,
// //   },
// //   {
// //     path: "/form",
// //     element: <Form />,
// //   },
// // ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      
    </Provider> */}
    <App />
  </React.StrictMode>
);
