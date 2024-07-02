import React, { createContext, useContext } from "react";

const MyContext = createContext("Default");

const Title = () => {
  const name = useContext(MyContext);
  return <h1>{name}</h1>;
};

const Header = () => <Title />;

const BasicPropsWithContext = () => {
  return (
    <MyContext.Provider value="Basic Props With UseContext">
      <Header />
    </MyContext.Provider>
  );
};

export default BasicPropsWithContext;
