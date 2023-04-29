import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MicIcon from "@mui/icons-material/Mic";
import MenuIcon from "@mui/icons-material/Menu";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar(props) {
  const [data, setdata] = useState(false);

  function handleClick() {
    setdata((preValue) => !preValue);
    props.onButtonClick(data);
  }

  return (
    <nav className="flexDiv">
      {/* ----------------------Left navbar-------------------- */}
      <div onClick={handleClick} className="navLeft">

        <div className="menuIcon">
        <MenuIcon style={{width:'2em', height:'2em'}}/>
        <div className="menuText">Menu</div>
        </div>

        <div class="title">XYZ School📕</div>
        
      </div>

      {/* ----------------------middle navbar-------------------- */}
      <div className="navMiddle">
        <input type="text" placeholder="Search" />
        <SearchOutlinedIcon
          className="icon searchIcon"
          style={{ cursor: "pointer",color:'white' }}
        />
        <MicIcon className="icon" style={{ cursor: "pointer" ,color:'white'}} />
      </div>

      {/* ----------------------Right navbar-------------------- */}
      <div className="navRight">
        <VideocamOutlinedIcon className="videoIcon" style={{width:'1.5em', height:'1.5em'}}/>
        <NotificationsNoneOutlinedIcon className="notifIcon" style={{width:'1.5em', height:'1.5em'}}/>
        <AccountCircleIcon className="userIcon"style={{width:'1.5em', height:'1.5em'}} />
      </div>
    </nav>
  );
}
export default Navbar;
