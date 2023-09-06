import React from "react";
import {NavLink, Link} from "react-router-dom";
import kasa from "../../assets/kasa.png";
import "./header.css";

const Header = () => {
    return (
        <nav>
            <div className="div-header">
                <div className="logo-header">
                    <img src={kasa} alt="kasa logo"/>
                </div>
 
                <div>
                    <button className="button-accueil">Accueil</button>
                    <button className="button-about">A Propos</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;