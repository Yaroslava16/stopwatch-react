import React from "react";
import ReactDOM from "react-dom";

import Stopwatch from "./components/Stopwatch/Stopwatch";
// import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <Stopwatch />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
