import './App.scss';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import _404 from "./pages/_404";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <div className="canvas-container">
        <BackgroundAnimation />
      </div>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* eslint-disable-next-line react/jsx-pascal-case */}
          <Route path="*" element={<_404 />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
