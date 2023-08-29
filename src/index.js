import React from "react";
import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import "./App/styles.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";

const rootDiv = document.getElementById("root");

function render() {
  const root = ReactDOM.createRoot(rootDiv);
  root.render(<App />);
}

if (module.hot) {
  module.hot.accept("./App/App", function () {
    setTimeout(render);
  });
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
