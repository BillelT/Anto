import { useEffect, useRef, useState } from "react";
import "./Discover.css";
import gsap from "gsap";

export default function Discover() {
  const ctaArrow = useRef();
  const discover = useRef();

  let ctaButtonAnimation, removeButtonAnimation;

  ctaButtonAnimation = (event) => {
    event.currentTarget.classList.add("hover");
    gsap.to(ctaArrow.current, {
      x: "16px",
      opacity: 1,
      duration: 0.9,
      ease: "power1.inOut",
    });
  };

  removeButtonAnimation = (event) => {
    event.currentTarget.classList.remove("hover");
    gsap.to(ctaArrow.current, {
      x: "0",
      opacity: 0,
      duration: 0.9,
      ease: "power1.inOut",
    });
  };

  return (
    <>
      <section className="container h-300vh">
        <article className="h-200vh gc-f "></article>
        <article className=" h-100vh gc-f container ">
          <div
            ref={discover}
            id="discover"
            className="gc-sm-2-9-ls-7-11 pt-192-320 fade-in-text-reveal"
          >
            <h3 className="pb-16">
              Anto <span className="kanji">アント</span>
            </h3>
            <p className="body pb-32">
              Modèle signature d'Anto. <br /> Conçu il y a plus de 100 ans, ce
              modèle emblématique compte seulement 500 exemplaires.
            </p>
            <div className="flex cg-16 w-fit-c pb-64">
              <article className="rounded color-choice active bg-black"></article>
              <article className="rounded color-choice bg-black"></article>
              <article className="rounded color-choice bg-black"></article>
              <article className="rounded color-choice bg-black"></article>
              <article className="rounded color-choice bg-black"></article>
            </div>
            <button
              className="button cta"
              onMouseOver={ctaButtonAnimation}
              onMouseOut={removeButtonAnimation}
            >
              Discover
              <img
                ref={ctaArrow}
                src="./Icon/Button Arrow Icon.svg"
                alt="Icône de flèche"
                className="hidden"
              />
              <span className="horizontal-border left"></span>
              <span className="horizontal-border right"></span>
            </button>
          </div>
        </article>
      </section>
    </>
  );
}
