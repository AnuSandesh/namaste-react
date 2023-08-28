import React from "react";
import ReactDOM from "react-dom/client";

//Create element from jsx
const title = <h1 className="head">Title </h1>;

//React component
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">Namaste react from functional component..!!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
