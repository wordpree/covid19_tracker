import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FB4C47",
    },
    secondary: {
      main: "#035755",
    },
  },
  typography: {
    fontFamily: [
      "Gentium Basic",
      "serif",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
