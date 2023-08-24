import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React..!!"
);

const parnet = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Heading 1"),
    React.createElement("h2", {}, "Heading 2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parnet);

console.log(parnet);
