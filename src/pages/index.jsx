import { Canvas } from "@react-three/fiber";
import Header from "../components/Header/Header.jsx";
import Experience from "../experience/Experience.jsx";
import Presentation from "../components/Header/Presentation.jsx";
import Legacy from "../components/Header/Legacy.jsx";

export default function Index() {
  return (
    <>
      <Header />
      <Presentation />
      <Legacy />

      <Canvas
        camera={{
          fov: 75,
          near: 0.001,
          far: 200,
          position: [0, 0, 1],
        }}
        style={{ position: "fixed", top: "0", left: "0", zIndex: "-1" }}
      >
        <Experience />
      </Canvas>
    </>
  );
}
