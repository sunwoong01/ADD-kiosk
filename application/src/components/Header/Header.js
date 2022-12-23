import React from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "./header.css";

export default function Header(props) {
  return <div className="header-text">{props.name}</div>;
}
