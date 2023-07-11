import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import usersSlice from "./features/usersSlice";

export const store = configureStore({
  reducer: {
    app: usersSlice
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
