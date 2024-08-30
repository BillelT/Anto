import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

///////////////////////////////////////////

export default function Guitar({ guitarColorIndex, isAnimationEnded }) {
  const guitar = useRef();
  const guitarGroup = useRef();
  const [offsetX, setOffsetX] = useState(window.innerWidth < 780 ? 0.2 : 0);
  const { scene } = useGLTF("./experience/models/Guitar.glb");

  useEffect(() => {
    if (guitarColorIndex == 0) {
      scene.children[0].children[0].material.color.r = 0;
      scene.children[0].children[0].material.color.g = 0;
      scene.children[0].children[0].material.color.b = 0;
    }
    if (guitarColorIndex == 1) {
      scene.children[0].children[0].material.color.r = 0.2;
      scene.children[0].children[0].material.color.g = 0.2;
      scene.children[0].children[0].material.color.b = 1;
    }
    if (guitarColorIndex == 2) {
      scene.children[0].children[0].material.color.r = 1;
      scene.children[0].children[0].material.color.g = 1;
      scene.children[0].children[0].material.color.b = 1;
    }
    if (guitarColorIndex == 3) {
      scene.children[0].children[0].material.color.r = 1;
      scene.children[0].children[0].material.color.g = 0.2;
      scene.children[0].children[0].material.color.b = 0.2;
    }
    if (guitarColorIndex == 4) {
      scene.children[0].children[0].material.color.r = 1;
      scene.children[0].children[0].material.color.g = 0.2;
      scene.children[0].children[0].material.color.b = 1;
    }
  }, [guitarColorIndex]);

  useEffect(() => {
    if (guitarGroup.current && isAnimationEnded) {
      // Legacy to performances
      gsap.to(guitarGroup.current.position, {
        x: window.innerWidth < 780 ? -0.16 : 0.05,
        y: -0.25,
        z: window.innerWidth < 780 ? 0.75 : 0.8,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#legacy",
          start: "100% 60%",
          endTrigger: "#performances",
          end: "top 60%",
          scrub: true,
          // markers: true,
          toggleActions: "play none none reverse",
        },
      });
      // Along performances
      gsap.to(guitarGroup.current.position, {
        y: -0.075,
        ease: "power1.inOut",
        immediateRender: false,
        scrollTrigger: {
          trigger: "#performances",
          start: "top 30%",
          endTrigger: "#performances",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
          toggleActions: "play none none reverse",
        },
      });
      // Performances to freedom
      gsap.to(guitarGroup.current.position, {
        x: window.innerWidth < 780 ? 0.25 : -0.075,
        y: -0.44,
        z: window.innerWidth < 780 ? 0.9 : 0.9,
        ease: "power1.inOut",
        immediateRender: false,
        scrollTrigger: {
          trigger: "#performances",
          start: "100% end",
          endTrigger: "#freedom",
          end: "top 30%",
          scrub: true,
          // markers: true,
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(guitarGroup.current.rotation, {
        y: Math.PI,
        ease: "power1.inOut",
        immediateRender: false,
        scrollTrigger: {
          trigger: "#performances",
          start: "100% end",
          endTrigger: "#freedom",
          end: "top 30%",
          scrub: true,
          // markers: true,
          toggleActions: "play none none reverse",
        },
      });
      // Freedom to Discover
      gsap.to(guitarGroup.current.position, {
        x: window.innerWidth < 780 ? 0.02 : -0.4,
        y: 0,
        z: 0.15,
        ease: "power1.inOut",
        immediateRender: false,
        scrollTrigger: {
          trigger: "#freedom",
          start: "100% end",
          endTrigger: "#discover",
          end: "top 30%",
          scrub: true,
          // markers: true,
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(guitarGroup.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
        immediateRender: false,
        scrollTrigger: {
          trigger: "#freedom",
          start: "100% end",
          endTrigger: "#discover",
          end: "top 30%",
          scrub: true,
          // markers: true,
          toggleActions: "play none none reverse",
        },
      });
    }
  }, [guitarGroup, isAnimationEnded]);

  useEffect(() => {
    const handleResize = () => {
      setOffsetX(window.innerWidth < 780 ? 0.2 : 0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <group
        ref={guitarGroup}
        position={[0, 0, 0]}
        // position={[posX, posY, posZ]}
        // rotateY={rotationY}
      >
        <primitive ref={guitar} object={scene} position={[offsetX, -0.25, 0]} />
      </group>
    </>
  );
}
