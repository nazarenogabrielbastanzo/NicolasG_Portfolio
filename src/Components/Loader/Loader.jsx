import React from "react";

// Styles
import "./Loader.styles.css";

const Loader = () => {
  return (
    <div className="spinner-border loader" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loader;
