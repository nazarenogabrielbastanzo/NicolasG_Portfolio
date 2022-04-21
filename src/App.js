// Import React Router Dom
import { BrowserRouter } from "react-router-dom";

// Components
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";

// Styles
import "./reset.styles.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
