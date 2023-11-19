import { useState } from "react";

const Form = ({ handleData }) => {
  const [formData, setFormData] = useState({
    description: "",
    quantity: "1",
    packed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevdata) => {
      return {
        ...prevdata,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description) return;
    handleData(formData);
    setFormData({ description: "", quantity: "1", packed: false });
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        name="quantity"
        id="quantity"
        onChange={handleChange}
        value={formData.quantity}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="description"
        onChange={handleChange}
        value={formData.description}
        placeholder="Item..."
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Form;
