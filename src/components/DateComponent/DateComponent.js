import React, { PureComponent } from "react";
import "./DateComponent.css";

class Date extends PureComponent {
  render() {
    const { events, day, week, month, year } = this.props;
    return (
      <div onClick={this.onDivClick} className="DateCompnentMainDiv">
        {day}
      </div>
    );
  }
}

export default Date;
