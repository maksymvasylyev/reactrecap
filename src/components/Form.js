import React, { useState } from "react";

export default function Form({ onAddActivity }) {
  const [formInput, setFormInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setFormInput(data);
    console.log(data);

    // const name = data.name;
    // const isForGoodWeather = data.checkBox.checked;
    // console.log(name);
    // console.log(isForGoodWeather);

    onAddActivity(data);

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new activity</h1>

      <label htmlFor="name">Name:</label>
      <input name="name" id="name" type="text" />

      <label htmlFor="checkBox">Good-weather activity</label>
      <input name="checkBox" id="checkBox" type="checkBox" />

      <button type="submit">Submit</button>
    </form>
  );
}
