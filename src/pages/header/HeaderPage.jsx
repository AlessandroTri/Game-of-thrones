import React, { useContext } from "react";
import "./Header.scss";
import { CountContext } from "../../App";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeaderPage = () => {
  const [t, i18n] = useTranslation('global');

const retroceder = () => {
  window.history.back();
}

  const { setSearch } = useContext(CountContext);

  return (
    <>
      <div className="container_header">
        <div className="Buscador">
          <div className="form__group field">
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              className="form__field"
              placeholder="Name"
              required
            />
            <label for="name" className="form__label">
            { t('search') }
            </label>
            <div>
              <button className="button_back" onClick={retroceder}> 🡠 { t('back') }</button>
            </div>
          </div>
        </div>
        <div className="Home">
            
          </div>
        <div className="cont_leng">
        <Link className="Home" to="/Home"><img  src="/house.png" alt={""} /> </Link>
            <img className="lenguaje_es"  onClick={() => i18n.changeLanguage("es")} src="/español.png" alt={"  "} />
            <img className="lenguaje_en" onClick={() => i18n.changeLanguage("en")} src="/ingles.png" alt={"  "} />
            <img className="lenguaje_en" onClick={() => i18n.changeLanguage("ita")} src="/italia.png" alt={"  "} />
          </div>
        </div>
    </>
  );
};

export default HeaderPage;
