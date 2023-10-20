import React, { useState } from 'react';
import "./Collapsear.css";

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
    <h2 className='title-article'>{data.title}</h2>
    <p className='location-article'>{data.location}</p>
    <div>
    {data.tags.map((tags, index) => (
      <span key={index} className="tag">
      {tags} 
      </span>
      ))}
      </div>
      <div className="host">
      <img src={data.host.picture} alt="photo de profil du host" className='host-picture' />
      <div className="host-info">
      <h3 className='host-name'>{data.host.name}</h3>
      <div className="rating">
      {starArray.map((star) => (
        <span key={star} className="star">&#9733;</span>
        ))}
        </div>
        </div>
        </div>
        <div className='collapse-container'>
          <div className='collapse-col'>
        <div className="collapse-item-article">
        <p className='collapse-title'>Description</p>
        <button
        className={`collapse-button-article ${isOpenDescription ? "open" : ""}`}
        onClick={toggleDescription}
        >
        {isOpenDescription ? "▼" : "▲"}
        </button>
        </div>
        {isOpenDescription && (
          <p
          className={`text-ar ${isOpenDescription ? "open" : ""}`}
          onClick={toggleDescription}
          >
            <div className='collapse-description'>
          {data.description}
          </div>
          </p>
          )}
          </div>
          <div className='collapse-col'>
          <div className="collapse-item-article">
          <p className='collapse-title'>Équipements</p>
          <button
          className={`collapse-button-article ${isOpenEquipements ? "open" : ""}`}
          onClick={toggleEquipements}
          >
          {isOpenEquipements ? "▼" : "▲"}
          </button>
          </div>
          {isOpenEquipements && (
            <p
            className={`text-ar ${isOpenEquipements ? "open" : ""}`}
            onClick={toggleEquipements}
            >
              <div className='collapse-description'>
            {data.equipments}
            </div>
            </p>
            )}
            </div>
            </div>
            </div>
            );
          };
          
          export default Appartment;