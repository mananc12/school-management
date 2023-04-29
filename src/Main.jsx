import React from "react";
import Card from "./Card";
import BarChart from "./barChart";

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import DataGridDemo from "./DataGrid";

import RightContainer from "./RightContainer";
import TitlebarImageList from "./Image";

import { Link } from "react-router-dom";

function Main(props) {
  return (
    <div
      className="container"
      style={{
        paddingLeft: props.data ? "10%":null
      }}
    >
      
      <div className="middle-container">

      <div className="list-containers">
       <Link to='/registeration'> <Card text1="Total Students" text2="1141" color="rgb(245, 137, 137)"/> </Link>
       <Link to='/teachers'> <Card text1="Total Teachers" text2="30" color="#FFF8D6"/> </Link>
       <Link to='/courses'> <Card text1="Total Courses" text2="25" color="#F5C6EC"/> </Link>
       <Link to='/admit-card'> <Card text1="Admit Card" color="#D4FAFC"/> </Link>
      </div>

      <div className="data-container">
      <BarChart/>
      
      <div className="circularProgress">
       <CircularProgressbarWithChildren value={66}>
        <div style={{ fontSize: '1.5vw', marginTop: -5 }}>
         <strong style={{ fontSize: '1.5vw', marginTop: -5 }}>66%</strong> complete
        </div>
       </CircularProgressbarWithChildren>;
       <div style={{ fontSize: '1.2vw', marginBottom: '1vh', textAlign: 'center'}}><h2 style={{fontSize:'1.5vw'}}>Course Activities</h2></div>
        </div>
      </div>

      <DataGridDemo/>
    </div>
    
    <div className="middle-end-container">
    <RightContainer/>
    <TitlebarImageList/>
    </div>
    </div>
  );
}

export default Main;
