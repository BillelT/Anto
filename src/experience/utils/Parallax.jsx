import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function Parallax(element) {
  const mousePosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    mousePosition.current = { x, y };
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  let parallaxX;
  let parallaxY;

  useFrame((state, delta) => {
    parallaxX = mousePosition.current.x * 0.25;
    parallaxY = -mousePosition.current.y * 0.5;

    element.position.x += (parallaxX - element.position.x) * 1 * delta;
    element.position.y += (parallaxY - element.position.y) * 1 * delta;
  });

  return null;
}
