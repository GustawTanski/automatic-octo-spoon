import React from "react";
import { render } from "react-dom";
import "./global.css";
import Sider from "./components/ViewFeedback/FeedbackSider";

// import App from "./components/App";

const root = document.querySelector("#root");

render(<Sider />, root);
