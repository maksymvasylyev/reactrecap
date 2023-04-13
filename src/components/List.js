import React from "react";

export default function List({ activities, isGoodWeather }) {
  const goodWeatherArray = activities.filter(
    (activity) => activity.isGoodWeather === true
  );

  const badWeatherArray = activities.filter(
    (activity) => activity.isGoodWeather === false
  );

  return (
    <ul>
      {isGoodWeather ? (
        <>
          <h2>The wather is awesome! Go outside and: </h2>
          {goodWeatherArray.map((activity) => (
            <li className="activity" key={activity.id}>
              {activity.name}
            </li>
          ))}
        </>
      ) : (
        <>
          <h2>Bad weather outside! Here's what you can do now: </h2>
          {badWeatherArray.map((activity) => (
            <li className="activity" key={activity.id}>
              {activity.name}
            </li>
          ))}
        </>
      )}
    </ul>
  );
}
