import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";

// Custom Import
import Header from "../components/Header/Header.jsx";
import Experience from "../experience/Experience.jsx";
import Presentation from "../components/Presentation/Presentation.jsx";
import Legacy from "../components/Legacy/Legacy.jsx";
import Performances from "../components/Performances/Performances.jsx";
import Freedom from "../components/Freedom/Freedom.jsx";
import Discover from "../components/Discover/Discover.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Index() {
  useEffect(() => {
    const fadeInTexts = document.querySelectorAll(".fade-in-text-reveal");

    fadeInTexts.forEach((element) => {
      if (element) {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: element,
            start: "-35% 15%",
            end: "bottom 40%",
            // markers: true,
            toggleActions: "play none play reverse",
          },
        });
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Presentation />
      <Legacy />
      <Performances />
      <Freedom />
      <Discover />
      <Footer />

      <Canvas style={{ position: "fixed", top: "0", left: "0", zIndex: "-1" }}>
        <Experience />
      </Canvas>
    </>
  );
}
