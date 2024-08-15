import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import ScrollAnimation from "../utils/ScrollAnimation";
import gsap from "gsap";

///////////////////////////////////////////

export default function Guitar({ onGuitarLoaded }) {
  const guitar = useRef();
  const { scene } = useGLTF("./experience/models/4.glb");

  ScrollAnimation(guitar, 0.2, -0.25);

  useEffect(() => {
    if (guitar.current) {
      gsap.to(guitar.current.position, {
        z: 0.6,
        x: 0.1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#legacy",
          start: "bottom 60%",
          endTrigger: "#performances",
          end: "top bottom",
          scrub: true,
          markers: true,
          toggleActions: "play none play reverse",
        },
      });
    }
  }, []);

  const offsetX = window.innerWidth < 780 ? 0.3 : 0;

  return (
    <>
      <primitive ref={guitar} object={scene} position={[offsetX, -0.25, 0]} />
    </>
  );
}
