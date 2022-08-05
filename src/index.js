import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router} from "react-router-dom";
import "antd/dist/antd.css";


const container =   document.getElementById("root")
const root = ReactDOM.createRoot(container);
root.render(

  <Router>
    <App />
  </Router>
  // document.getElementById("root")
);

