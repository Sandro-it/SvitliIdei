// React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Routing and Providers
import { BrowserRouter } from "react-router-dom";

// Main App Component
import App from "./App";

// Styles
import "./index.css";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
