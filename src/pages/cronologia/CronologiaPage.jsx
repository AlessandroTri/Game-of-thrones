import axios from "axios";
import React, { useEffect, useState } from "react";
import "./cronologia.scss";
import SimpleBar from "simplebar-react";

const CronologiaPage = () => {
  const [characters, setCharacters] = useState([]);
  const [ordered, setOrdered] = useState(false);

  const getCharacter = () => {
    axios.get("http://localhost:3000/characters").then((res) => {
      setCharacters(res.data);
    });
  };

  useEffect(() => {
    getCharacter("");
  }, []);

  const sortCharacters = () => {
    let sortedCharacters;
    if (!ordered) {
     
      sortedCharacters = [...characters].sort((a, b) => a.age - b.age);
    } else {
      
      sortedCharacters = [...characters].sort((a, b) => b.age - a.age);
    }
    setCharacters(sortedCharacters);
    setOrdered(!ordered);
  };

  return (
    <SimpleBar
      style={{ height: "72.5vh", width: "80vw", margin: "0 auto" }}
      forceVisible="y"
      autoHide={false}
    >
      <div className="timeline">
        <button className="change_age" onClick={sortCharacters}>
          {ordered ? "🡫" : "🡩"}
        </button>
        {characters.map((item, index) => (
          <div
            className={index % 2 === 0 ? "container_crono left" : "container_crono right"}
            key={item.id}
          >
            <div className="container_cronologia">
              <div className="imagenes_crono">
                <img
                  src={`http://localhost:3000${item.image}`}
                  alt={item.name}
                />
              </div>
              <div className="contenido_crono">
                <h3>{item.name}</h3>
                <p>{item.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SimpleBar>
  );
};

export default CronologiaPage;
