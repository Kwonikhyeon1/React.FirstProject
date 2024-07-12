import React from "react";
import Menubar from "../Homepage/Menubar"; //Menubar component
import HomeBg from './HomeBg'; // Swiper Component
import Footer from '../Homepage/Footer' // Footer component 
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Main from'../main/main.jsx'                                  // main page
import CommentWrite from'../comment/CommenWritet.jsx'

const Home = () => {
    return (
        <>
            <BrowserRouter>
                <Menubar />
                <Routes>
                    <Route path="/" element={<HomeBg />} />
                    <Route path="/main/:area/:result" element={<Main />} />    { /*main page */}
                    <Route path="/comment" element={<CommentWrite />} />    { /*main page */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default Home;
