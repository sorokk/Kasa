import React, { useState } from 'react';

const Apartment = ({ name, location, tags, sellerName, sellerPhoto, sellerRating, description, amenities }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleAmenities = () => {
    setIsAmenitiesOpen(!isAmenitiesOpen);
  };

  return (
    <div className="apartment">
      <h2>{name}</h2>
      <p>{location}</p>
      <div>
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="seller">
        <img src={sellerPhoto} alt={sellerName} />
        <div className="seller-info">
          <h3>{sellerName}</h3>
          <div className="rating">
            {[...Array(sellerRating).keys()].map((i) => (
              <span key={i} className="star">&#9733;</span>
            ))}
          </div>
        </div>
      </div>
      <div className="collapse">
        <button onClick={toggleDescription}>Description</button>
        <button onClick={toggleAmenities}>Éléments</button>
      </div>
      {isDescriptionOpen && <p className="description">{description}</p>}
      {isAmenitiesOpen && (
        <ul className="amenities">
          {amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Apartment;