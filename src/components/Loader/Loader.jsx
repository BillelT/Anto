import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Loader.css";

export default function Loader({ progress, handleStart }) {
  const clipPathLogo = useRef();
  const loadingMeta = useRef();

  useEffect(() => {
    gsap.to(clipPathLogo.current, {
      duration: 0.2,
      ease: "power1.inOut",
      clipPath: `polygon(0 ${100 - progress}%, 100% ${
        100 - progress
      }%, 100% 100%, 0% 100%`,
    });
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
      <div className="loader">
        <img
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
        <div className="loader-information">
          {progress === 100 && (
            <button
              className="body white-text hover-underline-from-center red launch"
              onClick={handleStart}
            >
              Enter
            </button>
          )}
          <span className="meta" ref={loadingMeta}>
            Chargement
          </span>
        </div>
      </div>
    </>
  );
}
