import { createTheme } from "@mui/material/styles";
import "@fontsource-variable/manrope";

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#01F0D0",
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
        typography: {
            fontFamily: "Manrope",
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
                @font-face {
  font-family: 'Manrope Variable';
  font-style: normal;
  font-display: swap;
  font-weight: 200 800;
  src: url(https://cdn.jsdelivr.net/fontsource/fonts/manrope:vf@latest/latin-wght-normal.woff2) format('woff2-variations');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}
              `,
            },
        },
    },
});
