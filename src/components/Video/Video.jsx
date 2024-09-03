import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "./Video.css";

export default function Video({
  isStarted,
  handleAnimationSkipped,
  isCursorActive,
}) {
  const videoContainer = useRef();
  const animation = useRef();
  const interval = useRef(null);

  const [duration, setDuration] = useState(0);

  const handleMouseDown = () => {
    const startTime = Date.now();
    interval.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      setDuration(elapsedTime);
    }, 50);
  };

  const handleAnimationEnded = () => {
    gsap.to(videoContainer.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power1.out",
      onComplete: () => {
        handleAnimationSkipped();
      },
    });
  };

  const handleMouseUpOrLeave = () => {
    clearInterval(interval.current);
    interval.current = null;
  };

  useEffect(() => {
    if (duration > 1000) {
      gsap.to(videoContainer.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power1.out",
        onComplete: () => {
          handleAnimationSkipped();
        },
      });
    }
  }, [duration, videoContainer]);

  if (isStarted) animation.current.play();

  return (
    <>
      <div
        ref={videoContainer}
        className="video-container full-page"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        <video
          ref={animation}
          controls={false}
          playsInline
          onEnded={handleAnimationEnded}
          className="video video-animation full-page-child"
        >
          <source
            src="/video/Anto Animation Song Finale.mp4"
            type="video/mp4"
          />
        </video>

        {!isCursorActive && (
          <span
            className=" meta underline white-text skip pointer"
            onClick={handleAnimationEnded}
            onTouchEnd={handleAnimationEnded}
          >
            Passer
          </span>
        )}
      </div>
    </>
  );
}
