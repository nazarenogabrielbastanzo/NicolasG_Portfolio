import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Portfolio
    </motion.div>
  );
};

export default Portfolio;
