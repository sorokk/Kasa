import React, { Fragment } from "react";
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Article from "./components/Body/article";
import Card from "./components/Body/card";
import Footer from "./components/Footer/Footer";
import Apropos from "./components/Pages/Apropos/Apropos";
import ArticlePage from "./components/Pages/Article/ArticlePage";
import Error from "./error-page";
import AppartementsData from "./appartements";

export default function App() {
    return(
        <Router>
        <Routes>
        <Route path="/" Component={Home} />
        <Route path="a-propos" Component={Apropos} />
        <Route path="article/:id" element={<ArticlePage appartements={AppartementsData} />} />
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
            <Header page="propos" />
            </div>
            )
    }

    const Articlepage = () => {

    }

    const ErrorPage = () => {
        return (
            <div>
            <Error />
            </div>
        )
    }