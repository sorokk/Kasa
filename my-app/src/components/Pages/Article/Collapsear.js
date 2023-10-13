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
  
  return (
    <div className="apartment">
    <h2>{props.title}</h2>
    <p>{props.location}</p>
    <div>
    {props.tags.map((tags, index) => (
      <span key={index} className="tag">
      {tags}
      </span>
      ))}
      </div>
      <div className="host">
      <img src={props.picture} alt={props.title} />
      <div className="host-info">
      <h3>{props.name}</h3>
      <div className="rating">
      {[...Array(props.rating).keys()].map((i) => (
        <span key={i} className="star">&#9733;</span>
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
          {props.description}
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
            {props.equipments}
            </p>
            )}
            </div>
            );
          };
          
          export default Appartment;