import React from "react";
import { storiesOf } from "@storybook/react";
import DateComponent from "../components/DateComponent/DateComponent";
import EventComponent from "../components/EventComponent/EventComponent";

storiesOf("Date Block", module).add("Date Default", () => (
  <DateComponent day={9} />
));

storiesOf("Event block", module)
  .add("Event length < 2", () => <EventComponent name="q" desc={"njbadbdab"} />)
  .add("Event length >=2", () => (
    <EventComponent name="wqwqwqw" desc={"njbbbbbb"} />
  ));
