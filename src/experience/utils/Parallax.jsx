import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function Parallax(element) {
  const mousePosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    mousePosition.current = { x, y };
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    const parallaxX = mousePosition.current.x * 0.1;
    const parallaxY = -mousePosition.current.y * 0.1;

    element.current.position.x +=
      (parallaxX - element.current.position.x) * 1 * delta;
    element.current.position.y +=
      (parallaxY - element.current.position.y) * 1 * delta;
  });

  return {};
}
