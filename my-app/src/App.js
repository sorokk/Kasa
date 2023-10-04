import React, { Fragment } from "react";
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Article from "./components/Body/article";
import Card from "./components/Body/card";
import Footer from "./components/Footer/Footer";
import Apropos from "./components/Pages/Apropos/Apropos";
import Error from "./error-page";

export default function App() {
    return(
        <Router>
        <Routes>
        <Route path="/" Component={Home} />
        <Route path="a-propos" Component={Apropos} />
        <Route path="article" Component={ArticlePage} />
        <Route path="*" Component={Error} />
        </Routes>
        </Router>
        )
    }
    
    const Home = () => {
        return (
            <div>
            <Header page="home" />
            <Article />
            <Card />
            <Footer />
            </div>
            )
    }
    
    const About = () => {
        return (
            <div>
            </div>
            )
    }

    const ArticlePage = () => {

    }

    const ErrorPage = () => {
        return (
            <div>
            <Error />
            </div>
        )
    }