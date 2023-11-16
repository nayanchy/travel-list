import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

function App() {
  const [listItems, setListItems] = useState([]);
  const handleData = (data) => {
    const newItem = {
      ...data,
      id: listItems.length + 1,
    };
    setListItems((prevItems) => [...prevItems, newItem]);
  };
  const packedCount = listItems.filter((item) => item.packed).length;

  const handleDelete = (id) => {
    return setListItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const handlePacked = (updatedItem) => {
    setListItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form handleData={handleData} />
      <PackingList
        items={listItems}
        onDelete={handleDelete}
        onTogglePacked={handlePacked}
      />
      <Stats itemsCount={listItems.length} packedCount={packedCount} />
    </div>
  );
}

export default App;
