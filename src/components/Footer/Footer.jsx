export default function Footer() {
  return (
    <>
      <footer className="container bg-black mt-256 pt-96-256 pb-32 rg-sm-96-ls-256 z-index-10 relative">
        <div className="container gc-f rg-64">
          <article className="gc-sm-2-12-ls-4-6">
            <p className="meta gold-text mb-sm-32-ls-64">Modèles</p>
            <nav>
              <ul className="grid rg-8">
                <li>
                  <h3 className="h3 flex cg-8 aie hover-text-gold">
                    Anto <span className="kanji meta">アント</span>
                  </h3>
                </li>
                <li>
                  <h3 className="h3 flex cg-8 aie hover-text-gold">
                    Jikan no yūgasa{" "}
                    <span className="kanji meta">時間の優雅さ</span>
                  </h3>
                </li>
                <li>
                  <h3 className="h3 flex cg-8 aie hover-text-gold">
                    pāru burū <span className="kanji meta">パールブルー</span>
                  </h3>
                </li>
                <li>
                  <h3 className="h3 flex cg-8 aie hover-text-gold">
                    uesutan <span className="kanji meta">ウエスタン</span>
                  </h3>
                </li>
                <li>
                  <h3 className="h3 flex cg-8 aie hover-text-gold">
                    aki no bakuhatsu{" "}
                    <span className="kanji meta">秋の爆発</span>
                  </h3>
                </li>
              </ul>
            </nav>
          </article>
          <article className="gc-sm-2-12-ls-8-12">
            <p className="meta gold-text mb-sm-32-ls-64">Autres pages</p>
            <nav>
              <ul className="grid rg-sm-16-ls-32 ">
                <li>
                  <h2 className="h2">À propos</h2>
                </li>
                <li>
                  <h2 className="h2">Certification</h2>
                </li>
                <li>
                  <h2 className="h2">Contact</h2>
                </li>
              </ul>
            </nav>
          </article>
        </div>
        <div className="container gc-f rg-24">
          <article className="gc-f container border-bottom pb-24">
            <nav className="gc-2-9">
              <ul className="grid ls-flex rg-8 cg-32">
                <li className="hover-underline-from-center white w-fit-c">
                  <p className="body">Instagram</p>
                </li>
                <li className="hover-underline-from-center white w-fit-c">
                  <p className="body">Linkedin</p>
                </li>
                <li className="hover-underline-from-center white w-fit-c">
                  <p className="body">Behance</p>
                </li>
                <li className="hover-underline-from-center white w-fit-c">
                  <p className="body">Twitch</p>
                </li>
              </ul>
            </nav>
            <p className="flex gc-11 cg-8 ase jc-fe">
              ©
              <img
                src="./Logo/Logo Anto Footer.svg"
                alt="Logo Anto"
                width={61}
                height={26}
              />
            </p>
          </article>
          <article className="gc-f container">
            <nav className="gc-2-9">
              <ul className="grid rg-8 cg-32 l-ls-flex">
                <li className="hover-underline-from-center w-fit-c white">
                  <p className="meta">Mentions légales</p>
                </li>
                <li className="hover-underline-from-center w-fit-c white">
                  <p className="meta">Conditions générales de ventes</p>
                </li>
                <li className="hover-underline-from-center w-fit-c white">
                  <p className="meta">Politiques de confidentialité</p>
                </li>
              </ul>
            </nav>
            <aside className="gc-9-12 ase grid rg-8 l-ls-flex cg-32 jc-fe">
              <p className="meta hover-underline-from-center w-fit-c white">
                Partenariat
              </p>
              <p className="meta hover-underline-from-center w-fit-c white">
                Service client
              </p>
            </aside>
          </article>
        </div>
      </footer>
    </>
  );
}
