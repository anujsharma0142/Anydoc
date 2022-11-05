import React from "react";
import { FiSettings } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";
import { BiHistory, BiHelpCircle } from "react-icons/bi";
import { MdLogout, MdSpaceDashboard } from "react-icons/md";
import Links from "./Links";

export default function Sidebar() {
  const links1 = [
    {
      text: "Dashboard",
      icon: MdSpaceDashboard,
      // active: true,
    },
    {
      text: "Templates",
      icon: IoWalletOutline,
    },
    {
      text: "History",
      icon: BiHistory,
    },
  ];
  const links2 = [
    {
      text: "Help Centre",
      icon: BiHelpCircle,
    },
    {
      text: "Settings",
      icon: FiSettings,
    },
    {
      text: "Logout",
      icon: MdLogout,
    },
  ];
  return (
    <div className="sidebar">
      <div className="brand">AnyDoc</div>
      <div className="links">
        <Links links={links1} />
        <Links links={links2} />
      </div>
      {/* <div className="pro">
        <div className="image">
          <img src={rocket} alt="" />
        </div>
        <h3>ShopStop Pro</h3>
        <h5>Get access to all features on ShopStop</h5>
        <button>Get Pro</button>
      </div> */}
    </div>
  );
}
