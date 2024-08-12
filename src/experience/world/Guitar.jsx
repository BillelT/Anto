import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import ScrollAnimation from "../utils/ScrollAnimation";

///////////////////////////////////////////

export default function Guitar() {
  const guitar = useRef();
  const model = useGLTF("./experience/models/4.glb");

  ScrollAnimation(guitar, 0.2, -0.25);

  const offsetX = window.innerWidth < 780 ? 0.3 : 0;

  return (
    <>
      <primitive
        ref={guitar}
        object={model.scene}
        position={[offsetX, -0.25, 0]}
      />
    </>
  );
}
