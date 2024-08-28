import React, { createContext, useState, useMemo, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeContext = createContext();

export function ThemeProviderWrapper({ children }) {
  const [themeColor, setThemeColor] = useState("#25655E");

  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                backgroundColor: themeColor,
                color: "#fff",
                "&:hover": {
                  backgroundColor: themeColor,
                  color: "#fff",
                },
              },
              custom: {
                backgroundColor: "#fff",
                color: "#25655E",
                fontWeight: "bold",
                padding: 0,
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#2f8077",
                  textDecoration: "underline",
                },
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: themeColor,
              },
            },
          },
        },
        palette: {
          icon: {
            main: themeColor,
            hover: "#e64a19",
          },
          title: {
            primary: themeColor,
          },
        },
      }),
    [themeColor]
  );

  return (
    <ThemeContext.Provider value={{ setThemeColor }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
