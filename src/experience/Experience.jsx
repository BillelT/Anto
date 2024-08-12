import {
  Environment,
  Sparkles,
  // useTexture,
  // shaderMaterial,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

/** Custom import */

import Guitar from "./world/Guitar";
import Debug from "./utils/Debug";
import Parallax from "./utils/Parallax";
import ScrollAnimation from "./utils/ScrollAnimation";

//////////////////////////////////////////////////////////////////////////////////

export default function Experience() {
  const group = useRef();
  const sparkles = useRef();
  const { camera } = useThree();

  Parallax(camera);
  ScrollAnimation(camera, 0, 0);
  ScrollAnimation(sparkles, 0.25, 0);

  return (
    <>
      {/* Debug & Perf */}
      {/* <Debug /> */}
      {/* <Perf position="top-left" /> */}

      {/* Light & Environment */}
      <Environment preset="studio" environmentIntensity={0.75} />

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
