export default function Header() {
  return (
    <>
      <header className="container aic pt-32">
        <img
          src="../Logo/Logo Anto.svg"
          alt="Logo de la marque Anto"
          className="gc-2"
        />
        <div className="flex aic gc-11 cg-24">
          <span className="hover-underline-from-center gold">Menu</span>
          <svg
            width="12"
            height="4"
            viewBox="0 0 12 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 4L1 1M6 4V0.5M11 4V2.5" stroke="#D4AD49" />
          </svg>
        </div>
      </header>
    </>
  );
}
