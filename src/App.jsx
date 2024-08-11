import { Canvas } from "@react-three/fiber";
import Experience from "./experience/Experience.jsx";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./App.css";

function App() {
  const [lenis, setLenis] = useState(null);

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

  return (
    <>
      <Canvas
        camera={{
          fov: 75,
          near: 0.001,
          far: 200,
          position: [0, 0, 1],
        }}
        style={{ position: "fixed", top: "0", left: "0", zIndex: "-1" }}
      >
        <Experience />
      </Canvas>
      <div className="test"></div>
    </>
  );
}

export default App;
