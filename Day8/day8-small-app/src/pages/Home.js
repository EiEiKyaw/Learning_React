import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "./ItemContext";

const Home = () => {
  const { items, deleteItem } = useContext(ItemContext);

  return (
    <div>
      <h1>Home Page</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <Link to={`/edit/${item.id}`}>Edit</Link>
              </td>
              <td>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
