import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/icon-nav-home.svg";
import { ReactComponent as MooviesIcon } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as TvIcon } from "../../assets/icon-nav-tv-series.svg";
import userAvatar from "./../../assets/image-avatar.jpg";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <img className="navbar__logo" src={logo} alt="logo" />
        <ul className="navbar__routes">
          <li className="route">
            <NavLink className="route-link" to="/">
              <HomeIcon className="route-icon" />
            </NavLink>
          </li>
          <li className="route">
            <MooviesIcon className="route-icon" />
          </li>
          <li className="route">
            <TvIcon className="route-icon" />
          </li>
        </ul>
      </div>
      <NavLink className="navbar__user" to="/">
        <img
          className="navbar__user-avatar"
          src={userAvatar}
          alt="user-avatar"
        />
      </NavLink>
    </nav>
  );
};

export default Navbar;
