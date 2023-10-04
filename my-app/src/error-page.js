import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error from "./Error/ErrorPage";

export default function ErrorPage() {
    return (
        <><Header /><Error /><Footer /></>
    )
}
