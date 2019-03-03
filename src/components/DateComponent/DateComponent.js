import React, { Component } from "react";
import "./DateComponent.css";

class Date extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sk",
      date: 2
    };
  }
  componentWillMount() {
    console.log("component is mounting");
  }
  componentDidMount() {
    console.log("componet mounted");
  }
  componentWillUnmount() {
    console.log("Component will unmount");
  }
  onDivClick = () => {
    this.setState({
      date: 4
    });
  };
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
