import React from "react";
import Header from "../../Header/Header";
import "../../Header/header.css";
import Footer from "../../Footer/Footer"
import Collapsepropos from "../../Pages/Apropos/Collapsepropos";

export default function Apropos() {
    return (
        <><div className="main"><Header page="propos" /><Collapsepropos /></div><Footer /></>
        )
    }