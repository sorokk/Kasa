import React, { useState } from "react";
import "./Collapsepropos.css";

const Collapse = () => {
  const [isOpenFiabilite, setIsOpenFiabilite] = useState(false);
  const [isOpenRespect, setIsOpenRespect] = useState(false);
  const [isOpenService, setIsOpenService] = useState(false);
  const [isOpenSecurite, setIsOpenSecurite] = useState(false);
  
  const toggleFiabilite = () => {
    setIsOpenFiabilite(!isOpenFiabilite);
  };
  
  const toggleRespect = () => {
    setIsOpenRespect(!isOpenRespect);
  };
  
  const toggleService = () => {
    setIsOpenService(!isOpenService);
  };
  
  const toggleSecurite = () => {
    setIsOpenSecurite(!isOpenSecurite);
  };
  
  return (
    <div className="bloc">
    <div className="collapse-item">
    <p className="text-about">Fiabilité</p>
    <button
    className={`collapse-button ${isOpenFiabilite ? "open" : ""}`}
    onClick={toggleFiabilite}
    >
    ▼
    </button>
    </div>
    {isOpenFiabilite && <p className={`text ${isOpenFiabilite ? "open" : ""}`} onClick={toggleFiabilite}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>}
    
    <div className="collapse-item">
    <p className="text-about">Respect</p>
    <button
    className={`collapse-button ${isOpenRespect ? "open" : ""}`}
    onClick={toggleRespect}
    >
    ▼
    </button>
    </div>
    {isOpenRespect && <p className={`text ${isOpenRespect ? "open" : ""}`} onClick={toggleFiabilite}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
    
    <div className="collapse-item">
    <p className="text-about">Service</p>
    <button
    className={`collapse-button ${isOpenService ? "open" : ""}`}
    onClick={toggleService}
    >
    ▼
    </button>
    </div>
    {isOpenService && <p className={`text ${isOpenService ? "open" : ""}`} onClick={toggleFiabilite}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
    
    <div className="collapse-item">
    <p className="text-about">Sécurité</p>
    <button
    className={`collapse-button ${isOpenSecurite ? "open" : ""}`}
    onClick={toggleSecurite}
    >
    ▼
    </button>
    </div>
    {isOpenSecurite && <p className={`text ${isOpenSecurite ? "open" : ""}`} onClick={toggleFiabilite}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établies par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.</p>}
    </div>
    );
  };
  
  export default Collapse;
  