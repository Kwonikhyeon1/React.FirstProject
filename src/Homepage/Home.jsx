import React from "react";
import Menubar from "../Homepage/Menubar"; //Menubar component
import HomeBg from './HomeBg'; // Swiper Component
import Footer from '../Homepage/Footer' // Footer component 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from'../main/main.jsx'                                  // main page


const Home = () => {
    return (
        <>
            <BrowserRouter>
                <Menubar />
                <Routes>
                    <Route path="/" element={<HomeBg />} />
                    <Route path="/main/:area/:result" element={<Main />} />    { /*main page */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default Home;
