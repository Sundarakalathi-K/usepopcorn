import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      {/* <StarRating color="blue" maxRating={10} onsetsRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p> */}
      <App />
    </div>
  );
}

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating maxRating={5} /> */}
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating maxRating={5} size={20} color={"red"} defaultRating={3} />
    <Test /> */}
    <App />
  </React.StrictMode>
);
