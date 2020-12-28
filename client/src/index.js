import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";

import './assets/css/style.css';
import './assets/css/flaticon.css';
import './assets/css/magnific-popup.css';
//import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/animate.css';

Modal.setAppElement("#root");

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
