import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
class Nav extends React.Component {
  state = {
    items: [],
    filter: "",
  };
  //get change filds 
  onChange = (event) => {
    this.setState(
      {
        input: event.target.value,
      },
      this.filterHandler
    );
  };

  //get item data to search
  componentDidMount() {
    fetch("http://localhost:8280/items/findAllItems", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          //set get value to state
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    {
      
      return (
        <div className="container-fluid page">
          <div className="row">
            <div className="col-sm">
              <img
                src="logo.png"
                alt="logo"
                className="m-2 ms-5"
                width="150px"
              />
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
              <div className="row">
                <div className="col-lg-10">
                  {/* <form > */}
                  <input
                    class="form-control"
                    type="text"
                    name="filter"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={this.onChange}
                    value={this.state.filter === null ? "" : this.state.filter}
                  />
                  {/* {filteredData.map((item) => (
                    <div key={item.itemID}>
                      <div>{item.itemName}</div>
                    </div>
                  ))} */}
                
                </div>
                <div className="col-lg-2">
                  <Link to="/login">
                    <h1>
                      <i class="fas fa-sign-out-alt icon-log"></i>
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Nav;
