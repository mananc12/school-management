import React from "react";

function Sidecard(props) {
  return (
    <div className="link" style={props.style}>
      {props.icon}
      {props.data && <p>{props.text}</p>}
    </div>
  );
}
export default Sidecard;
