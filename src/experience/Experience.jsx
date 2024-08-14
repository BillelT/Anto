import {
  Environment,
  PerspectiveCamera,
  Sparkles,
  // useTexture,
  // shaderMaterial,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import Debug from "./utils/Debug";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

/** Custom import */

import Guitar from "./world/Guitar";
import Parallax from "./utils/Parallax";
import ScrollAnimation from "./utils/ScrollAnimation";

//////////////////////////////////////////////////////////////////////////////////

export default function Experience({ stopScrollAnimation }) {
  const sparkles = useRef();
  const cameraGroup = useRef();
  const camera = useRef();

  Parallax(cameraGroup);
  ScrollAnimation(camera, 0, 0);
  ScrollAnimation(sparkles, 0.35, 0);

  useEffect(() => {
    if (camera) {
      gsap.to(camera.current.position, {
        z: 1,
        duration: 2,
        ease: "power1.inOut",
      });
      gsap.to(camera.current.rotation, {
        y: 0,
        z: 0,
        duration: 2,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <>
      {/* Debug & Perf */}
      {/* <Debug /> */}
      {/* <Perf position="top-left" /> */}

      {/* Light & Environment */}
      <Environment preset="studio" environmentIntensity={0.75} />
      <group ref={cameraGroup}>
        <PerspectiveCamera
          ref={camera}
          makeDefault
          fov={75}
          near={0.001}
          far={200}
          position={[0, 0, 1.5]}
          rotation={[0, 0.5, 0]}
        />
      </group>

      {/* Model*/}
      <Guitar></Guitar>

      {/* Element */}
      <Sparkles
        ref={sparkles}
        speed={0.1}
        size={0.3}
        color={"#D4AD49"}
        count={100}
        noise={10}
        scale={[1.5, 1, 1]}
      />
    </>
  );
}
