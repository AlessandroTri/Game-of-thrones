import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./housedetails.scss";
import { useTranslation } from "react-i18next";

const HouseDetails = () => {
  const [t, i18n] = useTranslation('global');
  const { id } = useParams();

  const [detailHouses, setDetailHouses] = useState([]);

  const getHouses = () => {
    axios.get("http://localhost:3000/houses/" + id).then((res) => {
      setDetailHouses(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    getHouses("");
  }, );

  return <div className="container_houses">
  
  <div className="list_houses"><h1>{detailHouses.name}</h1>
  <img src={`http://localhost:3000${detailHouses.image}`} alt={detailHouses.characters} />
  <ul >
<li>{ t('region') }: { detailHouses.region}</li>
<li>{ t('alliances') }: {detailHouses.alliances}</li>
<li>{ t('settlement') }: {detailHouses.settlement}</li>
<li>{ t('religions') }: {detailHouses.religions}</li>
<li>{ t('foundation') }: {detailHouses.foundation}</li>
</ul>
</div>
  </div>;
};

export default HouseDetails;
