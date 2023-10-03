import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Article from "./components/Body/article";
import Card from "./components/Body/card";
import Footer from "./components/Footer/Footer";
import APropos from "./components/Pages/Apropos/Apropos";
import Error from "./error-page";
import Footerpropos from "./components/Pages/Apropos/Footerpropos";

export default function App() {
    return(
        <Router>
        <Routes>
        <Route path="/" Component={Home} />
        <Route path="a-propos" Component={APropos} />
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
    
    const Apropos = () => {
        <div>
            <Header />
            <Footerpropos />
        </div>
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