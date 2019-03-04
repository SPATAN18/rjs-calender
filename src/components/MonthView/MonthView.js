import React, { Component } from "react";
import "./MonthView.css";
import DateComponent from "../DateComponent/DateComponent";
import WeekStripe from "../WeekStripe/WeekStripe";
import {
  daysArrayForMonth,
  nextMonthDate,
  prevMonthDate,
  getMonthName
} from "../../utils";

class MonthView extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  _onClickNext = () => {
    const newDate = nextMonthDate(this.state.date);
    this.setState({
      date: newDate
    });
  };

  _onClickPrev = () => {
    const newDate = prevMonthDate(this.state.date);
    this.setState({
      date: newDate
    });
  };

  render() {
    const { date } = this.state;
    return (
      <div className="MonthViewParentDiv">
        <p>{getMonthName(date)}</p>
        <div className="MonthViewRootDiv">
          <div className="ButtonDiv">
            <button onClick={this._onClickPrev}>Prev</button>
          </div>
          <div className="MonthViewMainDiv">
            <WeekStripe />
            {daysArrayForMonth(date).map((day, index) => (
              <DateComponent key={index} day={day} />
            ))}
          </div>
          <div className="ButtonDiv">
            <button onClick={this._onClickNext}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MonthView;
