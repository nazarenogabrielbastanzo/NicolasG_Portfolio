import React from "react";

// Styles
import "./RouteError.styles.css";

// Utils
import gif from "../../Utils/Gif/NotFound3.gif";

const RouteError = () => {
  return (
    <div className="not-found-container">
      <p>Not Found</p>
      <img className="gif" src={gif} alt="Not found" />
    </div>
  );
};

export default RouteError;
