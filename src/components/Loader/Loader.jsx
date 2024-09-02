import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Loader.css";

export default function Loader({ progress, handleStart }) {
  const logo = useRef();
  const clipPathLogo = useRef();
  const loadingMeta = useRef();
  const enter = useRef();
  const loadedMeta = useRef();

  const loadedGsapOptions = {
    opacity: 0,
    y: -10,
    duration: 0.6,
    ease: "power2.in",
  };

  useEffect(() => {
    if (clipPathLogo.current) {
      gsap.to(clipPathLogo.current, {
        duration: 0.2,
        ease: "power1.inOut",
        clipPath: `polygon(0 ${100 - progress}%, 100% ${
          100 - progress
        }%, 100% 100%, 0% 100%`,
      });
    }

    if (progress === 100) {
      gsap.to(logo.current, {
        ...loadedGsapOptions,
        onComplete: () => {
          gsap.set(logo.current, { display: "none" });

          gsap.to(enter.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          });
          gsap.to(loadedMeta.current, {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          });
        },
      });
      gsap.to(clipPathLogo.current, {
        ...loadedGsapOptions,
        onComplete: () => {
          gsap.set(clipPathLogo.current, { display: "none" });
        },
      });
      gsap.to(loadingMeta.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(loadingMeta.current, { display: "none" });
        },
      });
    }
  }, [progress]);

  useEffect(() => {
    const loadingMetaInnerText = loadingMeta.current.innerText;
    const loadingChar = loadingMetaInnerText.split("").map((char, index) => {
      const span = document.createElement("span");
      span.innerText = char;
      span.style.display = "inline-block";
      return span;
    });

    loadingMeta.current.innerHTML = "";
    loadingChar.forEach((span) => loadingMeta.current.appendChild(span));

    gsap.from(loadingChar, {
      opacity: 0,
      y: 10,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.05,
    });
  }, []);

  return (
    <>
      <div className="loader" onClick={progress === 100 ? handleStart : null}>
        <img
          ref={logo}
          src="./Logo/Logo Loader unload white.svg"
          alt="Logo Anto couleur white"
          className="center"
        />

        <img
          ref={clipPathLogo}
          src="./Logo/Logo Loader load gold.svg"
          alt="Logo Anto couleur or"
          className="center"
        />
        <span className="meta loading" ref={loadingMeta}>
          Chargement
        </span>
        <button
          ref={enter}
          className="body white-text hover-underline-from-center red launch center opacity-0 y-20 pointer"
        >
          Enter
        </button>
        <span className="meta loading opacity-0" ref={loadedMeta}>
          Terminé !
        </span>
      </div>
    </>
  );
}
