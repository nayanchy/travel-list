const Stats = ({ itemsCount, packedCount }) => {
  const percentage =
    itemsCount == 0 ? 0 : Math.round((packedCount / itemsCount) * 100);
  const renderStats =
    itemsCount == 0 ? (
      <em>Start Packing Items to Your List! 🚀</em>
    ) : percentage === 100 ? (
      <em>You have packed everything! You are ready to go✈️</em>
    ) : (
      <em>
        🫣 You have {itemsCount} items on your list and you already packed{" "}
        {packedCount} ({percentage}%)
      </em>
    );

  return <footer className="stats">{renderStats}</footer>;
};

export default Stats;
