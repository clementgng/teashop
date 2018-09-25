import React, { Component } from "react";

class Tea extends Component {
  render() {
    const { name, description, picture } = this.props;
    return (
      <div
        className="card card-columns bg-white mb-3"
        style={{ width: "18rem", height: "18rem", display: "inline-flex" }}
      >
        <div className="row">
          <div className="card-body">
            <h5 className="tea-title text-dark">{name}</h5>
            <img alt="tea pic" src={picture} width="100" height="100" />
            <p className="tea-text text-dark">{description}</p>
            <p>
              <a href="/cart" className="btn btn-primary">
                Add to Cart
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tea;
