import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import ScrollAnimation from "../utils/ScrollAnimation";

///////////////////////////////////////////

export default function Guitar() {
  const guitar = useRef();
  const model = useGLTF("/src/assets/models/4.glb");

  return (
    <>
      <primitive ref={guitar} object={model.scene} position={[0, -0.25, 0]} />
    </>
  );
}
