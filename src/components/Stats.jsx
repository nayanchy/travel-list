const Stats = ({ itemsCount, packedCount }) => {
  const percentage =
    itemsCount == 0 ? 0 : Math.round((packedCount / itemsCount) * 100);
  return (
    <footer className="stats">
      <em>
        🫣 You have {itemsCount} items on your list and you already packed{" "}
        {packedCount} ({percentage}%)
      </em>
    </footer>
  );
};

export default Stats;
