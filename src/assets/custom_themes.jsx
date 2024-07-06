import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#e7473c",
        },
        secondary: {
            main: "#232c33",
        },
        text: {
            hint: "#ffffff",
            primary: "#14213d",
            disabled: "#777777",
            secondary: "#28427b",
            unselected: "#C2C2C2",
        },
        background: {
            paper: "#f8f9fa",
            default: "#f0f0f0",
        },
    },
});
