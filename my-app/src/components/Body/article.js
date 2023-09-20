import React from "react";
import {NavLink, Link} from "react-router-dom";
import home from "../../assets/home.png";
import "./body.css";

const Article = () => {
    return (
        <article className="home-image">
            <img src={home} className="home-img" />
            <h1 className="home-text"><b>Chez vous, partout et ailleurs</b></h1>
        </article>
    );
}

export default Article;
