import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDelete, onTogglePacked, clearList }) => {
  const [sortBy, setSortBy] = useState("input");
  const handleSort = (e) => {
    setSortBy(e.target.value);
  };
  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "description") {
    sortedItems = [...items];
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = [...items];
    sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  const resetList = () => {
    clearList();
  };
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDelete={() => onDelete(item.id)}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select onChange={handleSort} value={sortBy}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={resetList}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
