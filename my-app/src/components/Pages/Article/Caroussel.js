import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AppartementsData from '../../../appartements';
import "./Caroussel.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function PhotoCaroussel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("imgs", props.imgs)
  const images = props.imgs;

  const goToPrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious} className="arrow-button arrow-left">
      <FontAwesomeIcon color='white' size='10x' icon={faChevronLeft} />
      </button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button onClick={goToNext} className="arrow-button arrow-right">
      <FontAwesomeIcon color='white' size='10x' icon={faChevronRight} />
      </button>
    </div>
  );
}

export default PhotoCaroussel;