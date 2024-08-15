import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useProgress } from "@react-three/drei";

// Custom Import
import Loader from "../components/Loader/Loader.jsx";
import Header from "../components/Header/Header.jsx";
import Experience from "../experience/Experience.jsx";
import Presentation from "../components/Presentation/Presentation.jsx";
import Legacy from "../components/Legacy/Legacy.jsx";
import Performances from "../components/Performances/Performances.jsx";
import Freedom from "../components/Freedom/Freedom.jsx";
import Discover from "../components/Discover/Discover.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Index({ lenis }) {
  const { progress } = useProgress();
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  useEffect(() => {
    if (lenis && !isStarted) {
      lenis.stop();
    }

    if (lenis && isStarted) {
      lenis.start();
    }
  }, [isStarted, lenis]);

  useEffect(() => {
    if (!isStarted) return;
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
            start: "top 40%",
            end: "bottom 40%",
            // markers: true,
            toggleActions: "play none play reverse",
          },
        });
      }
    });
  }, [isStarted]);

  return (
    <>
      {!isStarted && <Loader progress={progress} handleStart={handleStart} />}

      <Header />
      <Presentation />
      <Legacy />
      <Performances />
      <Freedom />
      <Discover />
      <Footer />

      <Canvas style={{ position: "fixed", top: "0", left: "0", zIndex: "-1" }}>
        <Suspense fallback={null}>
          <Experience isStarted={isStarted} />
        </Suspense>
      </Canvas>
    </>
  );
}
