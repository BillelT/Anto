import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "./Video.css";

export default function Video({ isStarted, handleAnimationSkipped }) {
  const videoContainer = useRef();
  const animation = useRef();
  const interval = useRef(null);

  const [duration, setDuration] = useState(0);

  const handleMouseDown = () => {
    const startTime = Date.now();
    interval.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      setDuration(elapsedTime);
    }, 1);
  };

  const handleAnimationEnded = () => {
    console.log("end");
    gsap.to(videoContainer.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power1.out",
    });
    handleAnimationSkipped();
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
      });
      handleAnimationSkipped();
    }
  }, [duration, videoContainer]);

  if (isStarted) animation.current.play();

  return (
    <>
      <div
        ref={videoContainer}
        className="video-container full-page"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        <video
          ref={animation}
          controls={false}
          onEnded={handleAnimationEnded}
          className="video video-animation full-page-child"
        >
          <source src="/video/Version Complete 02.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
