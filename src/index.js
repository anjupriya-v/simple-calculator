import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import About from "./js/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
