import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound.jsx";
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import "./reset.styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Provider>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
