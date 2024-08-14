import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Presentation.css";

export default function Presentation() {
  const scrollLine = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(scrollLine.current, {
      scaleY: 1,
      duration: 2.5,
      ease: "power3.inOut",
      onComplete: () => {
        scrollLine.current.style.transformOrigin = "bottom";
      },
    }).to(scrollLine.current, {
      scaleY: 0,
      duration: 2.5,
      ease: "power3.inOut",
      onComplete: () => {
        scrollLine.current.style.transformOrigin = "top";
      },
    });
  }, []);

  return (
    <>
      <section className="container  h-100vh">
        <div className="gc-sm-2-9-ls-9-13 max-w-90 pt-192-320 fade-in-text-reveal ">
          <h1 className="pb-16">Anto</h1>
          <p className="body pb-8">
            Depuis toujours, Anto croit que la musique est une source de
            réconfort et d'apaisement.
          </p>
          <p className="body">
            Chaque guitare que nous concevons est façonnée avec passion, dans
            l'espoir que ses notes vous offrent une sérénité profonde.
          </p>
        </div>
        <div className="scroll-line-container">
          <div ref={scrollLine} className="animated-scroll-line"></div>
        </div>
      </section>
    </>
  );
}
