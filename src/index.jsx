import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
