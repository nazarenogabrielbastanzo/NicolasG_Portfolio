import "./reset.styles.css";
import Home from "./views/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./views/NotFound/NotFound.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
