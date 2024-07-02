import React from "react";

const ThemedButton = ({ theme }) => {
  return <button className={theme}>Click Me</button>;
};

const ToolBar = ({ theme }) => {
  return <ThemedButton theme={theme} />;
};

const ThemeContextAlternative = (props) => {
  return (
    <div>
      <ToolBar theme={props.value} />
    </div>
  );
};

export default ThemeContextAlternative;
