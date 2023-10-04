import React from "react";
import "../Error/Errorpage.css";
import img from "../assets/404404.png";

const ErrorPage = () => {
    return (
        <div className="error-page">
            <img src={img} alt="kasa logo" id="img" />
            <h2 className="text-error">Oups, la page que vous demandez n'existe pas.</h2>
            <a href="/" className="return">Retournez sur la page d'accueil</a>
        </div>
    );
};

export default ErrorPage;
