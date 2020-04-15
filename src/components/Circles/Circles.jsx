import React from "react";
import "./Circles.css";

export default function Circle(props) {
  return (
    <div className="Circles">
      {props.selected === 1 ? <div className="selected">1</div> : <div>1</div>}

      {props.selected === 2 ? <div className="selected">2</div> : <div>2</div>}

      {props.selected === 3 ? <div className="selected">3</div> : <div>3</div>}

      {props.selected === 4 ? <div className="selected">4</div> : <div>4</div>}
    </div>
  );
}
