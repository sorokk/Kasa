import React from "react";
import { Link } from "react-router-dom";
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
                    <Link to="/">
                    <button className="btn">Accueil</button>
                    </Link>
                    <Link to="a-propos">
                    <button className="btn">A&nbsp;Propos</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;
