import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { themeOptions } from "./assets/custom_themes.jsx";
import { ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <ThemeProvider theme={themeOptions}> */}
            <App />
        {/* </ThemeProvider> */}
    </React.StrictMode>
);
