import React from "react";
function SubscribedCard(props) {
  return (
    <div
      to={props.to}
      className="subs"
      style={{ textDecoration: "none" ,cursor:'pointer'}}
    >
      {props.data && props.icon}
      {props.data === true ? <p>{props.p}</p> : null}
    </div>
  );
}
export default SubscribedCard;
