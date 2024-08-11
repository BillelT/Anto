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
  const { camera } = useThree();

  Parallax(camera);
  ScrollAnimation(camera);
  ScrollAnimation(group);

  return (
    <>
      {/* Debug & Perf */}
      {/* <Debug /> */}
      {/* <Perf position="top-left" /> */}

      {/* Light & Environment */}
      <Environment preset="studio" environmentIntensity={0.75} />

      {/* Scene Group*/}
      <group ref={group}>
        <Guitar></Guitar>
      </group>

      {/* Element */}
      <Sparkles speed={0.1} size={0.3} color={"#D4AD49"} count={200} />
    </>
  );
}
