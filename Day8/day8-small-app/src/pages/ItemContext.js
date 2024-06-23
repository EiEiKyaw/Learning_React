import React, { createContext, useState } from "react";

export const ItemContext = createContext();

const ItemContextProvider = ({ children }) => {
  const [items, setItems] = useState([
    { id: 1, name: "Coffee" },
    { id: 2, name: "Tea" },
  ]);

  const addItem = (name) => {
    setItems([...items, name]);
  };

  const updateItem = (id, name) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...items, name: name };
        }
        return item;
      })
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <ItemContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
