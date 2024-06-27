import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class hello extends Component {

  state = {
    progress : 0,
    mode : 'light'
  }

  apikey = process.env.REACT_APP_NEWS_APIKEY

  setProgress=(progress)=>{
    this.setState({progress : progress})
  }
  togglemode = () => {
    if (this.state.mode === "dark") {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "white";
    } else {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "#042743";
    }
  };
  pageSize = 15;
  render() {
    return (
      <div>
        <Router>
          <NavBar  mode={this.state.mode} togglemode={this.togglemode} />
          <LoadingBar
            color="green"
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress= {this.setProgress} apikey={this.apikey}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress= {this.setProgress} apikey={this.apikey}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress= {this.setProgress} apikey={this.apikey}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress= {this.setProgress} apikey={this.apikey}
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News setProgress= {this.setProgress} apikey={this.apikey}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress= {this.setProgress} apikey={this.apikey}
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress= {this.setProgress} apikey={this.apikey}
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress= {this.setProgress} apikey={this.apikey}
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
