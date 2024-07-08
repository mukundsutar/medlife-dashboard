import { createTheme } from "@mui/material/styles";
import "@fontsource-variable/manrope";

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#01f0d0",
        },
        secondary: {
            main: "#232c33",
        },
        text: {
            hint: "#ffffff",
            primary: "#072635",
            disabled: "#777777",
            secondary: "#28427b",
        },
        background: {
            paper: "#f8f9fa",
            default: "#f0f0f0",
        },
        divider: "#f7f7f7",
    },
});
