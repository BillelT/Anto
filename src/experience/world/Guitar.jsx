import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import ScrollAnimation from "../utils/ScrollAnimation";

///////////////////////////////////////////

export default function Guitar({ onGuitarLoaded }) {
  const guitar = useRef();
  const { scene } = useGLTF("./experience/models/4.glb");

  ScrollAnimation(guitar, 0.2, -0.25);

  useEffect(() => {
    if (guitar.current) {
      // console.log("gui");
    }
  });

  const offsetX = window.innerWidth < 780 ? 0.3 : 0;

  return (
    <>
      <primitive ref={guitar} object={scene} position={[offsetX, -0.25, 0]} />
    </>
  );
}
