import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useScroll } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation(element, delay = 0, offset = 0) {
  let scrollY = window.scrollY;
  const elementScrolling = useRef(scrollY);

  // const handleScroll = () => {
  //   scrollY = window.scrollY;
  //   elementScrolling.current = scrollY / window.innerHeight;
  // };

  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      // markers: true,
      onUpdate: (self) => {
        gsap.to(elementScrolling, {
          current: self.progress * 0.2,
          delay,
          overwrite: false,
        });
      },
    });

    return () => scrollTrigger.kill();
  }, []);

  useFrame(() => {
    const target = element.current ? element.current : element;
    if (target) {
      target.position.y = -elementScrolling.current + offset;
    }
  });

  return null;
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
