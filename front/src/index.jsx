import React from "react";
import { render } from "react-dom";
import "./global.css";

import App from "./components/App";

const root = document.querySelector("#root");

render(<App />, root);
