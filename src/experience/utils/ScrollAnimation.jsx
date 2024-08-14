import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation(element, delay = 0, offset = 0) {
  const elementScrolling = useRef(window.scrollY);
  const scrollTrigger = useRef();

  useEffect(() => {
    scrollTrigger.current = ScrollTrigger.create({
      trigger: "body",
      endTrigger: element.current.isCamera ? null : "#discover",
      start: "top top",
      end: element.current.isCamera ? "bottom bottom" : "top 15%",
      scrub: true,
      // markers: true,
      onUpdate: () => {
        gsap.to(elementScrolling, {
          current: window.scrollY / 1000,
          delay,
        });
      },
    });

    return () => {
      if (scrollTrigger.current) {
        scrollTrigger.current.kill();
      }
    };
  }, []);

  useFrame(() => {
    element.current.position.y = -elementScrolling.current + offset;
  });

  return {};
}

// if (self.progress > 0.2 && self.progress <= 0.4) {
//   gsap.to(element.position, {
//     z: 10, // Remplace 10 par la position Z souhaitée
//     duration: 1,
//     ease: "power2.out",
//   });
// } else if (self.progress > 0.4 && self.progress <= 0.6) {
//   gsap.to(element.position, {
//     z: 20, // Remplace 20 par la position Z souhaitée
//     duration: 1,
//     ease: "power2.out",
//   });
// }

// if (self.progress > 0.6) {
// }
