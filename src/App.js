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

  // useEffect(() => {
  async function fetchWeather() {
    const response = await fetch("https://example-apis.vercel.app/api/weather");
    const fetchData = await response.json();
    setWeather(fetchData);
  }

  useEffect(() => {
    fetchWeather();
    const timer = setInterval(() => {
      fetchWeather();
    }, 5000);

    // cleanup function
    return () => {
      clearInterval(timer);
    };
  }, []);

  console.log(weather);
  let isGoodWeather = weather.isGoodWeather;

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  console.log(activities);
  return (
    <>
      <section className="emoji">
        {weather.condition}
        {weather.temperature} Grad
      </section>
      <List
        activities={activities}
        isGoodWeather={isGoodWeather}
        handleDeleteActivity={handleDeleteActivity}
      />

      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
