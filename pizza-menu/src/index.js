import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>hello react</h1>
      <pizza />
    </div>
  );
}

function Pizza() {
  return <h2>Pizza </h2>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    <App />{" "}
  </React.StrictMode>
);
