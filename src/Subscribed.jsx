import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SubscribedCard from "./SubscribedCard";
function Subscribed(props) {
  const SubscribedList = [
    { icon: <AccountCircleIcon />, to: "/", p: "Principal" },
    { icon: <AccountCircleIcon />, to: "/", p: "Vice Principal" },
    { icon: <AccountCircleIcon />, to: "/", p: "Counselor" },
    { icon: <AccountCircleIcon />, to: "/", p: "Librarian" },
    { icon: <AccountCircleIcon />, to: "/", p: "Head Master" },
    { icon: <AccountCircleIcon />, to: "/", p: "Doctor" }
  ];
  const SubscribedList2 = SubscribedList.map((obj, index) => (
    <SubscribedCard data={props.data} to={obj.to} icon={obj.icon} p={obj.p} />
  ));
  return (
    
      <div className="Subscriptions">{SubscribedList2}</div>
  );
}
export default Subscribed;
