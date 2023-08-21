import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { MainContext } from "./Context/MainContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <MainContext>
    <App />
  </MainContext>
);
