import React, { useState } from "react";
import "./Collapsepropos.css";

const Collapse = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div>
        <button onClick={toggleCollapse}>
        {isOpen ? "Fermer" : "Ouvrir"}
        </button>
        {isOpen && (
            <div>
            <p>Fiabilité</p>
            <p>Respect</p>
            <p>Service</p>
            <p>Sécurité</p>
            </div>
            )}
            </div>
            );
        };
        
        export default Collapse;