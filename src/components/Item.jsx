const Item = ({ item, onDelete, onTogglePacked }) => {
  const handleDelete = () => {
    onDelete();
  };

  const handleCheckboxChange = () => {
    const updatedItem = {
      ...item,
      packed: !item.packed,
    };
    onTogglePacked(updatedItem);
  };
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={handleCheckboxChange}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
};
export default Item;
