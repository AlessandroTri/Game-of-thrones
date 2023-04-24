import React, { useContext } from "react";
import "./gallery.scss";
import { CountContext } from "../../App";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export function GalleryCharacter({ list, characters }) {
  
  const { search } = useContext(CountContext);

  let charact = characters === true ? "/Personajes/" : "/Casas/";

  return (
    <SimpleBar style={{ height: "72.5vh", width: "80vw", margin: "0 auto" }} forceVisible="y" autoHide={false}>
    <div className="container_characters">

      {search
        ? list
            .filter(
              (character) => character.name.toLowerCase().indexOf(search) >= 0
            )
            .map((item) => (
              <div key={item.id}>
                <a href={charact + item.id}>
                  <img
                    className="imghide"
                    src={`http://localhost:3000${item.image}`}
                    alt={item.characters}
                  />
                  <h3 className="h3hide">{item.name}</h3>
                </a>{" "}
              </div>
            ))
        : list.map((item) => (
            <div key={item.id}>
              {
                <a href={charact + item.id}>
                  <img
                    className="imghide"
                    src={`http://localhost:3000${item.image}`}
                    alt={item.characters}
                  />
                  <h3 className="h3hide">{item.name}</h3>
                </a>
              }
            </div>
          ))}
    </div>
  </SimpleBar>
  );
}
