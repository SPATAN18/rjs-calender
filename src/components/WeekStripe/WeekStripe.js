import React from "react";
import "./WeekStripe.css";
import { weekDays, shortenDayName } from "../../utils";

const WeekStripe = () => {
  return (
    <div className="WeekStripeMainDiv">
      {weekDays.map((day, index) => (
        <div key={index} className="WeetStripeDay">
          {shortenDayName(day)}
        </div>
      ))}
    </div>
  );
};

export default WeekStripe;
