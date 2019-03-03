import React from "react";
import "./EventComponent.css";

const EventComponent = ({ name, desc }) => {
  return (
    <div
      className={
        name.length > 2 ? "EventComponentMainDivEvent" : "EventComponentNoEvent"
      }
    >
      <h6>{name}</h6>
      <p>{desc}</p>
    </div>
  );
};
export default EventComponent;
