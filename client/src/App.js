import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import Homepage from "./components/layout/Homepage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="others">
            <Navigation />
            <Homepage />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
