import React from "react";
import { useParams } from 'react-router'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer"
import Caroussel from "./Caroussel";
import PhotoCarousel from "./Caroussel";
import Collapsear from "./Collapsear";


export default function ArticlePage(props) {
    const { id } = useParams();
    console.log("id", id)
    console.log("appartements", props.appartements)
    const appartement = props.appartements.find(appartement => appartement.id === id);
    console.log("appartement", appartement)
    return (
        <><><Header /><PhotoCarousel imgs={ appartement.pictures } /></><Footer /></>
        )
    }