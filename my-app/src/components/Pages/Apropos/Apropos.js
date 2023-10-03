import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./Apropos.css";
import kasa from "../../../assets/kasa.png";
import home from "../../../assets/propos.png"


const Apropos = () => {
    return (
        <nav>
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

            <article className="home-image">
                <img src={home} className="home-img" />
            </article>
        </nav>
        )
    }

    export default Apropos;

