import React from "react";
import { render } from "react-dom";

import App from "./components/App";
import Feed from './components/ViewFeedback/FeedbackMain'

const root = document.querySelector("#root");

// render(<App />, root);
render(<Feed />, root);
