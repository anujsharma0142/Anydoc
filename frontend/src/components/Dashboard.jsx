import React from "react";
import { ImageSign } from "./ImageSign";
// import Milestones from "./Milestones";
import Navbar from "./Navbar";
// import Revenue from "./Revenue";
// import StoreVisits from "./StoreVisits";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="grid">
        <div className="one">
          <ImageSign />
        </div>
        {/* <div className="two">
          <Revenue />
          <StoreVisits />
        </div> */}
      </div>
    </div>
  );
}
