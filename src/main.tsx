import React from "react";
import ReactDOM from "react-dom/client";
import "lenis/dist/lenis.css";
import "./styles/global.css";
import App from "./App";
import { SmoothScroll } from "./components/SmoothScroll";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SmoothScroll />
    <App />
  </React.StrictMode>,
);
