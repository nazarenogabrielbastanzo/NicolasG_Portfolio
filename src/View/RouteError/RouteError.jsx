import React from "react";
import { motion } from "framer-motion";

// Styles
import "./RouteError.styles.css";

// Utils
import gif from "../../Utils/Gif/NotFound3.gif";

const RouteError = () => {
  return (
    <motion.div
      className="not-found-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p>Not Found</p>
      <img className="gif" src={gif} alt="Not found" />
    </motion.div>
  );
};

export default RouteError;
