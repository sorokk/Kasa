import React from "react";
import { Link } from "react-router-dom";
import kasa from "../../assets/kasa.png";
import propos from "../../assets/propos.png";
import home from "../../assets/home.png";
import "./header.css";

const Header = (props ) => {
    const url= props.page== "home" ?home: propos;
    return (
        <><nav>
            <div className="div-header">
                <div className="logo-header">
                    <img src={kasa} alt="kasa logo" />
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
        </nav><article className="home-image">
                <img src={url} className="home-img" />
                {props.page=="home" && <h1 className="home-text"><b>Chez vous, partout et ailleurs</b></h1>}
            </article></>
    )
}

export default Header;
