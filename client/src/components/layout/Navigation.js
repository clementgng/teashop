// Navigation.js --  UI at the top of the page with links to do stuff
import React from "react";
import { Link, withRouter } from "react-router-dom";

//Navigation bar at the top

class Navigation extends React.Component {
  render() {
    //const { isAuthenticated } = this.props.auth;
    const loggedIn = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/cart">
            My Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/catalog">
            Settings
          </Link>
        </li>
        <li className="nav-item">
          <a
            href=""
            /*onClick={this.onLogoutClick.bind(this)}*/
            className="nav-link"
          >
            Logout
          </a>
        </li>
      </ul>
    );
    const loggedOut = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">
              TeaShop Inc.
            </Link>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/profiles">
                    {" "}
                    View Tea Collection
                  </Link>
                </li>
              </ul>
              {true ? loggedIn : loggedOut}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navigation);
/*
<nav className="navbar navbar-expand-sm navbar-dark bg-info mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            TeaShop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {" "}
                  TestApp Users
                </Link>
              </li>
            </ul>
            {false ? loggedIn : loggedOut}
          </div>
        </div>
      </nav>
*/
