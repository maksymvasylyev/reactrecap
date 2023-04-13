import "./App.css";
import React, { useEffect, useState } from "react";
import { uid } from "uid";
import Form from "./components/Form";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState("");

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const fetchData = await response.json();
      setWeather(fetchData);
    }
    fetchWeather();
  }, []);
  console.log(weather);
  const isGoodWeather = weather.isGoodWeather;

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  console.log(activities);
  return (
    <>
      <section>
        {weather.condition}
        {weather.temperature} Grad
      </section>
      <List activities={activities} isGoodWeather={isGoodWeather} />

      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
