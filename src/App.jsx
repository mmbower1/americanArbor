import {} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// containers
import About from "./containers/about/About";
import Home from "./containers/home/Home";
import Services from "./containers/services/Services";

// components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
