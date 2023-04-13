import React, { useState } from "react";

export default function Form({ onAddActivity }) {
  const [isGoodWeather, setIsGoodWeather] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddActivity({ ...data, isGoodWeather });
    setIsGoodWeather(false);

    event.target.reset();
  }

  function handleChange(event) {
    setIsGoodWeather(event.target.checked);
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
