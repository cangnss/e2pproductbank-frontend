import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette:{
    mode:'dark'
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
