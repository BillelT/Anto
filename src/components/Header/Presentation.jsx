import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles/Presentation.css";

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
        <div className="gc-sm-2-9-ls-9-13 max-w-90 pt-192-320 ">
          <h1 className="pb-16">Anto</h1>
          <p className="body pb-8">
            En japonais, le terme "Anto" (案外) évoque le réconfort et
            l'apaisement.
          </p>
          <p className="body">
            Nous concevons chaque instrument dans l'espoir que ses notes vous
            offriront une évasion et une sérénité profondes.
          </p>
        </div>
        <div className="scroll-line-container">
          <div ref={scrollLine} className="animated-scroll-line"></div>
        </div>
      </section>
    </>
  );
}
