import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import ScrollAnimation from "../utils/ScrollAnimation";
import gsap from "gsap";
import { useControls } from "leva";

///////////////////////////////////////////

export default function Guitar() {
  const guitar = useRef();
  const guitarGroup = useRef();
  const { scene } = useGLTF("./experience/models/Guitar.glb");

  // const { rotationY, posX, posY, posZ } = useControls("guitarGroup", {
  //   rotationY: {
  //     value: 0,
  //     min: -12,
  //     max: 12,
  //     step: 0.01,
  //   },
  //   posX: {
  //     value: 0,
  //     min: -3,
  //     max: 3,
  //     step: 0.001,
  //   },
  //   posY: {
  //     value: 0,
  //     min: -3,
  //     max: 3,
  //     step: 0.001,
  //   },
  //   posZ: {
  //     value: 0,
  //     min: -3,
  //     max: 3,
  //     step: 0.001,
  //   },
  // });

  // ScrollAnimation(guitar, 0.2, -0.25);

  useEffect(() => {
    if (guitarGroup.current) {
      // Legacy to performances
      gsap.to(guitarGroup.current.position, {
        x: window.innerWidth < 780 ? -0.16 : 0.05,
        y: -0.25,
        z: window.innerWidth < 780 ? 0.75 : 0.8,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#legacy",
          start: "bottom 60%",
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
        z: 0.25,
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
  }, [guitarGroup.current]);

  const offsetX = window.innerWidth < 780 ? 0.2 : 0;

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
