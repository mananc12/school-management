import React from "react";

function Card(props) {
  return (
      <div className="cards" style={{backgroundColor:props.color}}>
       
       <div style={{fontWeight:"700", fontSize:"20px",color:'black'}}>
        {props.text1}
        </div>
        <div style={{fontWeight:"800", fontSize:"20px",color:'black'}}>
        {props.text2}
       </div>
      </div>
  );
}
export default Card;
