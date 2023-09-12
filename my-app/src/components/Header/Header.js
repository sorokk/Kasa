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
 
                <div className="header-button">
                    <button className="btn">Accueil</button>
                    <button className="btn">A&nbsp;Propos</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;
