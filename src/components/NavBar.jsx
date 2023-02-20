import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

const NavBar = ({ onLogin, userID, onLogOut }) => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="surreal-estate-logo" />
      <ul className="navbar-links">
        <Link className="navbar-links-item" to="/add-property">
          Add Property
        </Link>
        <Link className="navbar-links-item" to="/">
          View Properties
        </Link>
      </ul>
      {userID ? (
        <button type="button" onClick={onLogOut}>
          Log Out
        </button>
      ) : (
        <FacebookLogin
          appId="1209535509689351"
          autoLoad
          fields="name,email,picture"
          callback={onLogin}
        />
      )}
    </div>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

export default NavBar;
