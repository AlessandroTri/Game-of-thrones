import {  Route, Routes, BrowserRouter as Router, NavLink } from "react-router-dom";
import './App.css';
import CasasPage from "./pages/house-page/CasasPage";
import CronologiaPage from "./pages/cronologia/CronologiaPage";
import PersonajesPage from "./pages/character-page/PersonajesPage";
import HeaderPage from "./pages/header/HeaderPage";
import CharacterDetail from "./pages/detalles-personajes/CharacterDetail";
import  HouseDetails  from "./pages/detalles-casas/HouseDetails";
import HomePage from "./pages/homepage/HomePage";
import React, { useState } from "react";
import 'simplebar-react/dist/simplebar.min.css';
import { useTranslation } from "react-i18next";


export const CountContext = React.createContext(20);


function App() {
  const [t] = useTranslation(['global']);

  const [search, setSearch] = useState([]);
  return (
    <Router>
    <CountContext.Provider value={{search, setSearch}}>
    <HeaderPage></HeaderPage>
    <div className="container">
      <header className="header">
      </header>
        <main className="Main">  
        <Routes>
          {<Route path="/" element= {<HomePage />} /> }
          {<Route path="/Home" element= {<HomePage />} /> }
          <Route path="/Personajes" element={<PersonajesPage />} />
          <Route path="/Personajes/:id" element={<CharacterDetail/>} />
          <Route path="/casas/:id" element={<HouseDetails/>} />
          <Route path="/Casas" element={<CasasPage />} />
          <Route path="Cronologia" element={<CronologiaPage />} />
        </Routes>
        </main>
        
      <nav className="Nav">
      <NavLink   to="/Personajes">{ t('characters') }</NavLink>
      <NavLink   to="/Casas">{ t('house') }</NavLink>
      <NavLink   to="/Cronologia">{ t('chronology') }</NavLink>
      </nav>
     
    </div>
    </CountContext.Provider>
  </Router>
  );
}

export default App;
 