// Import React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

// Views
import Home from "./View/Home/Home";
import Portfolio from "./View/Portfolio/Portfolio";
import About from "./View/About/About";
import Contact from "./View/Contact/Contact";
import RouteError from "./View/RouteError/RouteError";

// Styles
import "./reset.styles.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/portfolio" element={<Portfolio />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="*" element={<RouteError />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
