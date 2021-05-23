import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
class Nav extends React.Component {
  render() {
    return (
      <div className="container-fluid page">
        <div className="row">
          <div className="col-sm">
            <img src="logo.png" alt="logo" className="m-2 ms-5" width="150px" />
          </div>

          <div className="col-sm" align="center">
            <nav className="navbar navbar-expand-lg container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link nav-bar-item">
                    <span className="navbar-brand">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/store">
                    <a className="nav-link nav-bar-item" href="#">
                      <span className="navbar-brand">Store</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-bar-item" href="#">
                    <span className="navbar-brand">Service</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-bar-item" href="#">
                    <span className="navbar-brand">Contact Us</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-bar-item" href="#">
                    <span className="navbar-brand">About</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-sm searchbar" align="">
            <form action="#" method="get">
              <input
                class="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <input type="submit" hidden />
            </form>
            <h1>
              <i class="bi bi-person-circle"></i>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;
