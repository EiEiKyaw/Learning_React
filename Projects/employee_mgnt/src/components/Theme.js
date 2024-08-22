// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#25655E",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#2f8077",
          },
        },
      },
    },
  },
  palette: {
    icon: {
      main: "#25655E",
      hover: "#e64a19",
    },
    title: {
      primary: "#25655E",
    },
  },
});

export default theme;
