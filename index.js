import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./containers/Home";

const App = function () {
  return <Home />;
};

render(<App />, document.getElementById("app"));
