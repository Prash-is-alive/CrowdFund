import React from "react";
import { Icon } from "@iconify/react";
import "./css/navbar.css";
import logo from '../assets/logo.png'
function Navbar() {
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center mt-3">
        <div className="searchBox">
          <input
            placeholder="Search campaigns..."
            type="search"
            className="p-1 ps-3 rounded-4 border-3"
          />
        </div>
        <div className="logo mx-2"><img src={logo} alt="logo" className="img-fluid"/></div>
        <button className="createCampaign btn d-flex align-items-center rounded-4 border-3">
          Create a Campaign &nbsp;
          <Icon icon="material-symbols:campaign-rounded" />
        </button>
      </div>
      <div className="sidebar rounded-4 p-3 d-flex flex-column gap-5 align-items-center justify-content-center">
        <div className="link"><Icon icon="ep:menu" /></div>
        <div className="link"><Icon icon="ic:twotone-campaign" /></div>
        <div className="link"><Icon icon="carbon:money" /></div>
        <div className="link"><Icon icon="solar:card-broken" /></div>
        <div className="link"><Icon icon="iconoir:profile-circle" /></div>
        <div className="link"><Icon icon="fluent:arrow-exit-20-filled" /></div>
        <div className="cover rounded-2">&nbsp;</div>
      </div>
    </>
  );
}

export default Navbar;
