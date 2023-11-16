import { useState } from "react";

const Form = ({ handleData }) => {
  const [formData, setFormData] = useState({
    description: "",
    quantity: "1",
    packed: true,
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

    handleData(formData);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select name="quantity" id="quantity" onChange={handleChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <input
        type="text"
        name="description"
        onChange={handleChange}
        value={formData.description}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Form;
