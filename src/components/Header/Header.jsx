import gsap from "gsap";

export default function Header() {
  return (
    <>
      <header className="container aic pt-32 fixed z-index-100 mix-blend-diff white-text ">
        <img
          src="../Logo/Logo Anto.svg"
          alt="Logo de la marque Anto"
          className="gc-2"
        />
        <div className="flex aic gc-11 cg-24 jc-fe">
          <span
            className="hover-underline-from-center gold-diff "
            style={{ fontWeight: "200" }}
          >
            Menu
          </span>
          <svg
            width="12"
            height="4"
            viewBox="0 0 12 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 4L1 1M6 4V0.5M11 4V2.5" stroke="#2B52B6" />
          </svg>
        </div>
      </header>
    </>
  );
}
