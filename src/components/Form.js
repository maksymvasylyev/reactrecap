import React, { useState } from "react";

export default function Form({ onAddActivity }) {
  const [isChecked, setIsChecked] = useState(false);
  // localStorage.clear();
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddActivity({ ...data, isChecked });
    setIsChecked(false);

    event.target.reset();
  }

  function handleChange(event) {
    setIsChecked(event.target.checked);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new activity</h1>

      <label htmlFor="name">Name:</label>
      <input name="name" id="name" type="text" />

      <label htmlFor="checkBox">Good-weather activity</label>
      <input
        name="checkBox"
        id="checkBox"
        type="checkBox"
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
