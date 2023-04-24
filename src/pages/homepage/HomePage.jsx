import React from 'react';
import "./home.scss";
import { useTranslation } from "react-i18next";

function HomePage() {
  const [t] = useTranslation(['global']);
  return (
    <div className='title_game'>
    <img className="img_trono" src= "trono.png" alt=""></img>
      <p className='title'>{ t('got') }</p>
    </div>
  )
}

export default HomePage
