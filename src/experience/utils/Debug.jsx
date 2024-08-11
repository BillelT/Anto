import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Debug() {
  const { camera } = useThree();

  const { positionY, positionZ, environmentIntensity } = useControls({
    positionY: {
      value: 0,
      min: 0,
      max: 3,
      step: 0.1,
    },
    positionZ: {
      value: 1,
      min: 0,
      max: 3,
      step: 0.1,
    },
    environmentIntensity: {
      value: 0.75,
      min: 0,
      max: 3,
      step: 0.01,
    },
  });

  // useFrame(() => {
  //   camera.position.y = positionY;
  //   camera.position.z = positionZ;
  // });

  return null;
}
