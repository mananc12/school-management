import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import Looks5OutlinedIcon from "@mui/icons-material/Looks5Outlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Subscribed from "./Subscribed";
import Sidecard from "./Sidecard";

function Sidebar(props) {
  const shortcutLinks = [
    { icon: <DashboardIcon style={{width:'1.3em', height:'1.3em'}}/>, text: "Dashboard" },
    { icon: <Looks5OutlinedIcon style={{width:'1.3em', height:'1.3em'}}/>, text: "Student" },
    { icon: <EditCalendarIcon style={{width:'1.3em', height:'1.3em'}}/>, text: "Results" },
    { icon: <VideoLibraryOutlinedIcon style={{width:'1.3em', height:'1.3em'}}/>, text: "Library" },
    { icon: <HistoryOutlinedIcon style={{width:'1.3em', height:'1.3em'}}/>, text: "History" },
    { icon: <SmartDisplayOutlinedIcon style={{width:'1.3em', height:'1.3em'}}/>, text: "Videos" },
    { icon: <DesignServicesIcon style={{width:'1.3em', height:'1.3em'}}/>, text: "Exam" },
    { icon: <ExpandMoreIcon style={{width:'1.3em', height:'1.3em'}} />, text: "Show more" }
  ];

  const linkElements = shortcutLinks.map((link, index) => (
    <Sidecard
      key={index}
      icon={link.icon}
      text={link.text}
      style={{ textDecoration: "none",cursor:'pointer'}}
      data={props.data}
    />
  ));

  return (
    <div className="sideBar" style={{width: props.data ? null : '5vw' }}>
      
        <div className="shortcutLinks">
          {linkElements}
          {props.data && <hr></hr>}
        </div>
      
      {props.data && <h4>Administrators</h4>}
      <Subscribed data={props.data} />
    </div>
  );
}

export default Sidebar;
