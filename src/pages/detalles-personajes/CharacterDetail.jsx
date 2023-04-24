import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./characterdetails.scss";
import { useTranslation } from "react-i18next";

function CharacterDetail() {
  const [t, i18n] = useTranslation('global');
  const { id } = useParams();
  const [detailCharacter, setDetailCharacter] = useState({});
  const [detailHouse, setDetailHouse] = useState({});

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const characterResult = await axios.get(`http://localhost:3000/characters/${id}`);
        setDetailCharacter(characterResult.data);

        if (characterResult.data.house) {
          const houseResult = await axios.get(`http://localhost:3000/houses?name=${characterResult.data.house}`);
          setDetailHouse(houseResult.data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getCharacter();
  }, [id]);

  
  return (
    <div className="container_char">
      <div className="list_characters">
        <h1>{detailCharacter.name}</h1>
        <img src={`http://localhost:3000${detailCharacter.image}`} alt={detailCharacter.name}  />
        <ul>
          <li>
            <strong>{ t('title') }: </strong>
            {detailCharacter.titles}
          </li>
          <li>
            <strong>{ t('age') }: </strong>
            {detailCharacter.age}
          </li>
          <li>
            <strong>{ t('parents') }: </strong>
            {detailCharacter.parents}
          </li>
          <li>
            <strong>{ t('siblings') }: </strong>
            {detailCharacter.siblings}
          </li>
        </ul>
        {detailHouse && (
          <div className="list_import">
            {detailHouse.image && <img src={`http://localhost:3000${detailHouse.image}`} alt={detailHouse.name} />}
            <p>
              <strong>{ t('house') }: </strong>
              {detailCharacter.house}
            </p>
            <p>
              <strong>{ t('alliances') }: </strong>
              {detailCharacter.alliances}
            </p>
            <p>
              <strong>{ t('episodes') }: </strong>
              {detailCharacter.episodes}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CharacterDetail;
