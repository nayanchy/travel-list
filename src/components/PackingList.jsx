import Item from "./Item";

const PackingList = ({ items, onDelete, onTogglePacked }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDelete={() => onDelete(item.id)}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
