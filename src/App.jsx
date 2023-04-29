import "./Navbar";
import Navbar from "./Navbar";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { useState } from "react";

import Footer from "./Footer";

export default function App() {
  const [ndata, setData] = useState();

  function handleButtonClick(data) {
    // console.log(ndata)
    return setData(data);
  }

  return (
    <div className="App">
      <Navbar onButtonClick={handleButtonClick} />
      <Sidebar data={ndata} />
      <Main data={ndata} />
      <Footer/>
    </div>
  );
}
