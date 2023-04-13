import "./App.css";
import React, { useState } from "react";
import { uid } from "uid";
import Form from "./components/Form";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
    // setActivities([...activities, newActivity]);
  }

  console.log(activities);
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
