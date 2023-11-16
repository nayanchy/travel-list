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

  const packedCount = listItems.map((item) => item.packed === true).length;

  return (
    <div className="app">
      <Logo />
      <Form handleData={handleData} />
      <PackingList items={listItems} />
      <Stats itemsCount={listItems.length} packedCount={packedCount} />
    </div>
  );
}

export default App;
