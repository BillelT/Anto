import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

///////////////////////////////////////////

export default function Guitar({ guitarColorIndex, isAnimationEnded }) {
  const guitar = useRef();
  const guitarGroup = useRef();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 780);
  const [offsetX, setOffsetX] = useState(isLargeScreen ? 0 : 0.2);
  const { scene } = useGLTF("./experience/models/Guitar 2.glb");

  useEffect(() => {
    if (guitarColorIndex == 0) {
      scene.children[0].children[0].material.color.set(0x000000);
    }
    if (guitarColorIndex == 1) {
      scene.children[0].children[0].material.color.set(0x3333ff);
    }
    if (guitarColorIndex == 2) {
      scene.children[0].children[0].material.color.set(0xffffff);
    }
  }, [guitarColorIndex]);

  useEffect(() => {
    const handleResize = () => {
      const largeScreen = window.innerWidth > 780;
      setIsLargeScreen(largeScreen);
      setOffsetX(largeScreen ? 0 : 0.2);
    };

    handleResize(); // Update immediately on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (guitarGroup.current && isAnimationEnded) {
      // Kill previous scroll triggers
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars &&
          trigger.vars.id &&
          trigger.vars.id.startsWith("guitar-trigger-")
        ) {
          trigger.kill();
        }
      });

      // Legacy to performances
      gsap.to(guitarGroup.current.position, {
        x: !isLargeScreen ? -0.11 : 0.05,
        y: -0.25,
        z: !isLargeScreen ? 0.6 : 0.8,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#legacy",
          start: "100% 60%",
          endTrigger: "#performances",
          end: "top 60%",
          scrub: true,
          // markers: true,
          toggleActions: "play none none reverse",
          id: "guitar-trigger-legacy-to-perf",
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
          id: "guitar-trigger-perf",
        },
      });
      // Performances to freedom
      gsap.to(guitarGroup.current.position, {
        x: !isLargeScreen ? 0.305 : -0.075,
        y: -0.42,
        z: !isLargeScreen ? 0.9 : 0.9,
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
          id: "guitar-trigger-perf-to-freedom",
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
          id: "guitar-trigger-perf-to-freedom-2",
        },
      });
      // Freedom to Discover
      gsap.to(guitarGroup.current.position, {
        x: !isLargeScreen ? 0.02 : -0.4,
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
          id: "guitar-trigger-freedom-to-discover",
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
          id: "guitar-trigger-freedom-to-discover-2",
        },
      });
    }
  }, [isAnimationEnded, isLargeScreen]);

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
