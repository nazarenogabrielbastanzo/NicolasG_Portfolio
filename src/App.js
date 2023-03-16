import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound.jsx";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./reset.styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
