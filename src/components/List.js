import React from "react";

export default function List({
  activities,
  isGoodWeather,
  handleDeleteActivity,
}) {
  // Function receives a boolean
  const filterActivities = (weather) =>
    // Filter activities depending on the weather
    activities
      .filter((activity) => activity.isGoodWeather === weather)
      // Map filtered array elements and render list items
      .map((activity) => (
        <li className="activity" key={activity.id}>
          {activity.name}
          <div onClick={() => handleDeleteActivity(activity.id)}>x</div>
        </li>
      ));

  return (
    <ul>
      {isGoodWeather ? (
        <>
          <h2>The wather is awesome! Go outside and: </h2>
          {filterActivities(isGoodWeather)}
        </>
      ) : (
        <>
          <h2>Bad weather outside! Here's what you can do now: </h2>
          {filterActivities(isGoodWeather)}
        </>
      )}
    </ul>
  );
}
