import React from "react";

export default function List({ activities }) {
  return (
    <ul>
      {activities.map((activity) => {
        return (
          <li className="activity" key={activity.id}>
            {activity.name}
          </li>
        );
      })}
    </ul>
  );
}
