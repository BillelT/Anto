import { Suspense, useEffect, useRef, useState } from "react";
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
import Video from "../components/Video/Video.jsx";

export default function Index({
  lenis,
  isStarted,
  handleStart,
  isAnimationEnded,
  handleAnimationSkipped,
}) {
  const song = useRef();
  const { progress } = useProgress();
  const [guitarColorIndex, setGuitarColorIndex] = useState(0);

  const handleSound = () => {
    const bars = document.querySelectorAll(".bar");

    bars.forEach((bar) => {
      if (bar.classList.contains("paused")) {
        bar.classList.remove("paused");
        gsap.to(song.current, {
          volume: 1,
          duration: 2,
          onStart: () => {
            song.current.play();
          },
        });
      } else {
        bar.classList.add("paused");
        gsap.to(song.current, {
          volume: 0,
          duration: 2,
          onComplete: () => {
            song.current.pause();
          },
        });
      }
    });
  };

  const handleGuitarColorIndex = (e) => {
    setGuitarColorIndex(e.target.dataset.index);
  };

  useEffect(() => {
    if (lenis && !isAnimationEnded) {
      lenis.stop();
    }

    if (lenis && isAnimationEnded) {
      lenis.start();
    }
  }, [isAnimationEnded, lenis]);

  useEffect(() => {
    if (!isStarted) return;

    if (song.current) {
      song.current.loop = true;
      song.current.play();
    }

    window.scrollTo(0, 0);
  }, [isStarted]);

  useEffect(() => {
    if (!isAnimationEnded) return;

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
  }, [isAnimationEnded]);

  return (
    <>
      {!isStarted && <Loader progress={progress} handleStart={handleStart} />}

      {!isAnimationEnded && (
        <Video
          handleAnimationSkipped={handleAnimationSkipped}
          isStarted={isStarted}
        />
      )}

      <audio ref={song} src="./video/son anto.mp3"></audio>

      <Header isAnimationEnded={isAnimationEnded} handleSound={handleSound} />
      <Presentation />
      <Legacy />
      <Performances />
      <Freedom />
      <Discover handleGuitarColorIndex={handleGuitarColorIndex} />
      <Footer />

      <Canvas style={{ position: "fixed", top: "0", left: "0", zIndex: "-1" }}>
        <Suspense fallback={null}>
          <Experience
            isAnimationEnded={isAnimationEnded}
            guitarColorIndex={guitarColorIndex}
          />
        </Suspense>
      </Canvas>
    </>
  );
}
