import React from "react";
import "./CircleSelector.css";

export default function CircleSelector(props) {
  return (
    <div className="CircleSelector">
      {props.selected === 1 ? (
        <button className="selected">circle 1 selected</button>
      ) : (
        <button onClick={() => props.handleClick(1)}>select circle 1</button>
      )}

      {props.selected === 2 ? (
        <button className="selected">circle 2 selected</button>
      ) : (
        <button onClick={() => props.handleClick(2)}>select circle 2</button>
      )}

      {props.selected === 3 ? (
        <button className="selected">circle 3 selected</button>
      ) : (
        <button onClick={() => props.handleClick(3)}>select circle 3</button>
      )}

      {props.selected === 4 ? (
        <button className="selected">circle 4 selected</button>
      ) : (
        <button onClick={() => props.handleClick(4)}>select circle 4</button>
      )}
    </div>
  );
}
