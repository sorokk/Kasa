import React, { useState } from 'react';

function Appartment(props) {
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const [isOpenEquipements, setIsOpenEquipements] = useState(false);
  
  const toggleDescription = () => {
    setIsOpenDescription(!isOpenDescription);
  };
  
  const toggleEquipements = () => {
    setIsOpenEquipements(!isOpenEquipements);
  };

  const data = props.data;
  const starArray = Array.from({ length: data.rating }, (_, index) => index + 1);
  
  return (
    <div className="apartment">
    <h2>{data.title}</h2>
    <p>{data.location}</p>
    <div>
    {data.tags.map((tags, index) => (
      <span key={index} className="tag">
      {tags} 
      </span>
      ))}
      </div>
      <div className="host">
      <img src={data.host.picture} alt="photo de profil du host" />
      <div className="host-info">
      <h3>{data.host.name}</h3>
      <div className="rating">
      {starArray.map((star) => (
        <span key={star} className="star">&#9733;</span>
        ))}
        </div>
        </div>
        </div>
        <div className="collapse-item">
        <p>Description</p>
        <button
        className={`collapse-button ${isOpenDescription ? "open" : ""}`}
        onClick={toggleDescription}
        >
        {isOpenDescription ? "▼" : "▲"}
        </button>
        </div>
        {isOpenDescription && (
          <p
          className={`text ${isOpenDescription ? "open" : ""}`}
          onClick={toggleDescription}
          >
          {data.description}
          </p>
          )}
          <div className="collapse-item">
          <p>Équipements</p>
          <button
          className={`collapse-button ${isOpenEquipements ? "open" : ""}`}
          onClick={toggleEquipements}
          >
          {isOpenEquipements ? "▼" : "▲"}
          </button>
          </div>
          {isOpenEquipements && (
            <p
            className={`text ${isOpenEquipements ? "open" : ""}`}
            onClick={toggleEquipements}
            >
            {data.equipments}
            </p>
            )}
            </div>
            );
          };
          
          export default Appartment;