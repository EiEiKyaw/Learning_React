import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Used Dark Theme</button>;
};

const ToolBar = () => <ThemedButton />;

const ThemeContextWithUseContext = () => {
  const theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      <ToolBar />
    </ThemeContext.Provider>
  );
};

export default ThemeContextWithUseContext;
