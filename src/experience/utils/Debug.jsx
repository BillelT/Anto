import { useControls } from "leva";

export default function Debug() {
  const {
    cameraPositionY,
    cameraPositionZ,
    environmentIntensity,
    rotationY,
    posX,
    posY,
    posZ,
  } = useControls({
    cameraPositionY: {
      value: 0,
      min: 0,
      max: 3,
      step: 0.1,
    },
    cameraPositionZ: {
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
    rotationY: {
      value: 0,
      min: -Math.PI * 4,
      max: -Math.PI * 4,
      step: 0.01,
    },
    posX: {
      value: 0,
      min: -3,
      max: -3,
      step: 0.001,
    },
    posY: {
      value: 0,
      min: -3,
      max: -3,
      step: 0.001,
    },
    posZ: {
      value: 0,
      min: -3,
      max: -3,
      step: 0.001,
    },
  });

  return null;
}
