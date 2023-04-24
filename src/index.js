import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {I18nextProvider, initReactI18next} from "react-i18next";
import i18next from 'i18next';
import global_en from "./translations/en/global.json"
import global_es from "./translations/es/globaj.json"
import global_ita from "./translations/ita/global.json"

const userLang = navigator.language.substring(0, 2); 

i18next.use(initReactI18next).init({
        interpolation : { escapeValue: false}, 
        lng: userLang,
        fallbackLng: "es", 
        resources: {
          es: {
            global:global_es,
          },
          en: {
            global:global_en,
          },
          ita:{
            global:global_ita,
          }
        },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 