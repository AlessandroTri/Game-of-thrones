import React from 'react'
import "./gallery.scss";
import {} from "react-i18next"


const GalleryCasas = ({list}) => {
  


  return <div className='container_casas'>
  {list.map((item, index) => <div key={index}>
  <a href={item.id}>
      <h3>{item.name}</h3>
      <img src={`http://localhost:3000${item.image}`} alt={item.characters} />
    </a></div>)} 
    </div>
}

export default GalleryCasas

