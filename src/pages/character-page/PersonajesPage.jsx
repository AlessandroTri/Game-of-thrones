import React, { useEffect, useState } from 'react'
import axios from "axios";
import {GalleryCharacter} from '../../components/gallery/GalleryCharacter';



function PersonajesPage() {

 

  const [characters, setCharacters] = useState([]);

  const getCharacter = () =>{

    axios.get("http://localhost:3000/characters").then(res => {
      setCharacters(res.data)
      
    })
  }

  useEffect(() =>{
    getCharacter("")
  },[])

  return (
    <div>
      <GalleryCharacter list={characters} characters={true}></GalleryCharacter>
    </div>
  )
}

export default PersonajesPage

