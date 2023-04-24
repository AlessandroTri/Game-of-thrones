import React, { useEffect, useState } from 'react';
import axios from "axios";
import {GalleryCharacter} from '../../components/gallery/GalleryCharacter';

function CasasPage() {

  
  const [Houses, setHouses] = useState([]);

  const getHouses = (HousesText) =>{

    axios.get("http://localhost:3000/houses").then(res => {
      setHouses(res.data)
      console.log(res.data);
    })
  }

  useEffect(() =>{
    getHouses("")
  },[])

  return (
    <div>
      
      <GalleryCharacter list={Houses}></GalleryCharacter>
    </div>
  )
 
}

export default CasasPage
