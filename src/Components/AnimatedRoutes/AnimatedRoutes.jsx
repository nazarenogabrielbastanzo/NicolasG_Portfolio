import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Views
import Home from "../../View/Home/Home";
import Portfolio from "../../View/Portfolio/Portfolio";
import About from "../../View/About/About";
import RouteError from "../../View/RouteError/RouteError";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} exact />
        <Route path="/portfolio" element={<Portfolio />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="*" element={<RouteError />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
