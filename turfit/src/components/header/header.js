import React from "react";
import Navbar from "../Navbar";
import Carousel from "./carousel";
// import Sponsors from "./sponsors";
export default function Header() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Carousel></Carousel>
      </div>
      {/* <div>
        <Sponsors></Sponsors>
      </div> */}
    </div>
  );
}
