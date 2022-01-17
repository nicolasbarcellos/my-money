import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./globalStyles";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <GlobalStyles />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
