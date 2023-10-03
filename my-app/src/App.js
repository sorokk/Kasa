import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Article from "./components/Body/article";
import Card from "./components/Body/card";
import Footer from "./components/Footer/Footer";
import Apropos from "./components/Pages/Apropos/Apropos";
import Headerpropos from "./components/Pages/Apropos/Headerpropos";
import Collapsepropos from "./components/Pages/Apropos/Collapsepropos";
import Footerpropos from "./components/Pages/Apropos/Footerpropos";
import Error from "./error-page";

export default function App() {
    return(
        <Router>
        <Routes>
        <Route path="/" Component={Home} />
        <Route path="a-propos" Component={Apropos} />
        <Route path="article" Component={ArticlePage} />
        <Route path="error-page" Component={Error} />
        </Routes>
        </Router>
        )
    }
    
    const Home = () => {
        return (
            <div>
            <Header />
            <Article />
            <Card />
            <Footer />
            </div>
            )
    }
    
    const APropos = () => {
        return (
            <div>
                <Headerpropos />
                <Collapsepropos />
                <Footerpropos />
            </div>
            )
    }

    const ArticlePage = () => {

    }

    const ErrorPage = () => {
        return (
            <div>
            <ErrorPage />
            </div>
        )
    }