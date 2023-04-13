import "./App.css";
import React, { useState } from "react";
import { uid } from "uid";
import Form from "./components/Form";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const isGoodWeather = false;

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
    // setActivities([...activities, newActivity]);
  }

  console.log(activities);
  return (
    <>
      <List activities={activities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
