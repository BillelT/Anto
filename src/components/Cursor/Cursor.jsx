import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Cursor.css";

export default function Cursor({
  isStarted,
  isAnimationEnded,
  isCursorActive,
}) {
  const cursor = useRef();
  const cursorText = useRef();
  // const keyCursor = useRef();

  useEffect(() => {
    const handleMouseDown = () => {
      gsap.to(".hold-click-fill", {
        duration: 1.3,
        ease: "power1.inOut",
        clipPath: "circle(100%)",
      });
    };

    const handleMouseUp = () => {
      gsap.to(".hold-click-fill", {
        duration: 1.3,
        ease: "power1.inOut",
        clipPath: "circle(0%)",
      });
    };

    if (isStarted && !isAnimationEnded) {
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
    }

    if (isStarted && isAnimationEnded) {
      handleMouseUp();
    }

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isStarted, isAnimationEnded]);

  useEffect(() => {
    const handleCursorFadeIn = (e) => {
      if (e.target.classList.contains("pointer")) {
        cursor.current.classList.add("fade-out");
      } else {
        cursor.current.classList.remove("fade-out");
      }
    };

    if (isCursorActive) {
      window.addEventListener("mousemove", handleCursorFadeIn);
    }

    return () => {
      window.removeEventListener("mousemove", handleCursorFadeIn);
    };
  }, [cursor, isCursorActive]);

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

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursor]);

  return (
    <>
      <div ref={cursor} className="cursor gold-border">
        <span className="hold-click-fill"></span>
        <p
          ref={cursorText}
          className={`cursor-text meta ${
            isStarted && !isAnimationEnded ? "fade-in" : ""
          }`}
        >
          Maintenez pour passer
        </p>
      </div>
    </>
  );
}
