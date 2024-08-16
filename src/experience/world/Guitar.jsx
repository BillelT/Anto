import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import ScrollAnimation from "../utils/ScrollAnimation";
import gsap from "gsap";

///////////////////////////////////////////

export default function Guitar() {
  const guitar = useRef();
  const guitarGroup = useRef();
  const { scene } = useGLTF("./experience/models/4.glb");

  ScrollAnimation(guitar, 0.2, -0.25);

  useEffect(() => {
    if (guitarGroup.current) {
      gsap.to(guitarGroup.current.position, {
        x: -0.26,
        y: -0.3,
        z: 0.8,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#legacy",
          start: "bottom 60%",
          endTrigger: "#performances",
          end: "top 60%",
          scrub: true,
          markers: true,
          toggleActions: "play none play reverse",
        },
      });
      gsap.to(guitarGroup.current.position, {
        y: -0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#performances",
          start: "top 30%",
          endTrigger: "#performances",
          end: "bottom bottom",
          scrub: true,
          markers: true,
          toggleActions: "play none play reverse",
        },
      });
    }
  }, [guitarGroup.current]);

  const offsetX = window.innerWidth < 780 ? 0.3 : 0;

  return (
    <>
      <group ref={guitarGroup}>
        <primitive ref={guitar} object={scene} position={[offsetX, -0.25, 0]} />
      </group>
    </>
  );
}
