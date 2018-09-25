import React, { Component } from "react";
import Footer from "./component/layout/Footer";
import Navigation from "./component/layout/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>HELLO !</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
