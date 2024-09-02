import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Index from "./pages/index.jsx";
import "./App.css";
import Cursor from "./components/Cursor/Cursor.jsx";

function App() {
  const [lenis, setLenis] = useState(null);
  const [isCursorActive, setIsCursorActive] = useState(
    window.innerWidth > 780 ? true : false
  );
  const [isStarted, setIsStarted] = useState(false);
  const [isAnimationEnded, setAnimationEnded] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleAnimationSkipped = () => {
    setAnimationEnded(true);
  };

  useEffect(() => {
    const lenisInstance = new Lenis();

    lenisInstance.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
      gsap.ticker.remove(lenisInstance.raf);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsCursorActive(window.innerWidth > 780 ? true : false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Router>
        {isCursorActive && (
          <Cursor
            isStarted={isStarted}
            isAnimationEnded={isAnimationEnded}
            isCursorActive={isCursorActive}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Index
                lenis={lenis}
                isStarted={isStarted}
                handleStart={handleStart}
                isAnimationEnded={isAnimationEnded}
                handleAnimationSkipped={handleAnimationSkipped}
                isCursorActive={isCursorActive}
              />
            }
          />
          {/* <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
