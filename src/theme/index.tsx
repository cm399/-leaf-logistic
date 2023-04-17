import { createTheme } from "@mui/material/styles";

// const paletteData = {
//   common: {
//     black: "#000",
//     white: "#fff",
//   },
//   text: {
//     primary: "rgba(0, 0, 0, 0.87)",
//     secondary: "rgba(0, 0, 0, 0.6)",
//     disabled: "rgba(0, 0, 0, 0.38)",
//   },
//   background: {
//     paper: "#fff",
//     default: "#fff",
//   },
//   action: {
//     active: "rgba(0, 0, 0, 0.54)",
//     disabled: "rgba(0, 0, 0, 0.26)",
//     disabledBackground: "rgba(0, 0, 0, 0.12)",
//   },
// };

// Create a theme instance.
const theme = createTheme({
  // palette: paletteData,
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontWeight: "300",
      fontSize: "96px",
      lineHeight: "112px",
      letterSpacing: "-1.5px",
    },
    h2: {
      fontWeight: "300",
      fontSize: "60px",
      lineHeight: "72px",
      letterSpacing: "-0.5px",
    },
    h3: {
      fontWeight: "400",
      fontSize: "48px",
      lineHeight: "56px",
    },
    h4: {
      fontWeight: "400",
      fontSize: "34px",
      lineHeight: "42px",
      letterSpacing: "0.25px",
    },
    h5: {
      fontWeight: "600",
      fontSize: "24px",
      lineHeight: "32px",
    },
    h6: {
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "32px",
      letterSpacing: "0.15px",
    },
    body1: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "24px",
      letterSpacing: "0.15px",
    },
    body2: {
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "20px",
      letterSpacing: "0.15px",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "28px",
      letterSpacing: "0.15px",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "20px",
      letterSpacing: "0.1px",
    },
    overline: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "32px",
      letterSpacing: "1px",
    },
    caption: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "20px",
      letterSpacing: "0.4px",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
