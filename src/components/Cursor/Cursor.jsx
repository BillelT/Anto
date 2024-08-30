import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Cursor.css";

export default function Cursor({ isStarted, isAnimationEnded }) {
  const cursor = useRef();
  const cursorText = useRef();
  //   const keyCursor = useRef();

  useEffect(() => {
    gsap.set(cursor.current, {
      xPercent: -50,
      yPercent: -50,
      scaleX: 1,
      scaleY: 1,
    });

    // gsap.set(keyCursor.current, {
    //   xPercent: -50,
    //   yPercent: -50,
    //   scaleX: 1,
    //   scaleY: 1,
    // });

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      gsap.to(cursor.current, {
        duration: 0.6,
        x,
        y,
        ease: "power2.out",
      });

      //   gsap.to(keyCursor.current, {
      //     duration: 0.1,
      //     x,
      //     y,
      //     ease: "power2.out",
      //   });
    };

    window.addEventListener("mousemove", moveCursor);

    const largers = document.querySelectorAll(".larger-cursor");

    largers.forEach((larger) => {
      larger.addEventListener("mouseenter", handleMouseEnter);
      larger.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      largers.forEach((larger) => {
        larger.removeEventListener("mouseenter", handleMouseEnter);
        larger.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursor]);

  return (
    <>
      <div
        ref={cursor}
        className={`cursor ${
          isStarted && isAnimationEnded ? "black-border" : ""
        }`}
      >
        <p
          ref={cursorText}
          className={`cursor-text meta ${
            isStarted && !isAnimationEnded ? "fade-in" : ""
          }`}
        >
          Maintenez pour passer
        </p>
      </div>
      {/* <div ref={keyCursor} className="key-cursor">
        <img src="./Icon/Clé de sol red.svg" alt="Icône de clé de sol" />
      </div> */}
    </>
  );
}
