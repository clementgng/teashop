// Homepage.js -- Initial page when a guest comes to the website
import React from "react";
import { Link } from "react-router-dom";
import { teas } from "../teas/Teas";
import TeaList from "../teas/TeaList";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="dark-overlay homepage-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-12 text-center">
                <TeaList teas={teas} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
