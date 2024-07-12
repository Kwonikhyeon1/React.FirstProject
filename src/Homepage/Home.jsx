import React, { useState , useEffect } from "react"; 
import Menubar from "../Homepage/Menubar"; //Menubar component
import HomeBg from './HomeBg'; // Swiper Component
import Footer from '../Homepage/Footer' // Footer component 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../member/SignIn.jsx";
import SignUp from "../member/SignUp.jsx";
import Modify from "../member/Modify.jsx";
import SubPage from "../sub/SubPage.jsx"
import CommentWrite from'../comment/CommenWritet.jsx'
import Main from'../main/main.jsx'                                  // main page


const Home = () => {

    const [isSignIned, setIsSignIned] = useState(false);

    useEffect(() => {

        setIsSignIned(isSignIned);


    });


    return (
        <>
            <BrowserRouter>
                <Menubar isSignIned={isSignIned} setIsSignIned={setIsSignIned} />
                <div className="home_wrap">
                <Routes>
                    <Route path="/comment" element={<CommentWrite />} />    { /*main page */}
                    <Route path="/" element={<HomeBg />} />
                    <Route path="/main/:area/:result" element={<Main />} />    { /*main page */}
                    <Route path="/signin" element={<SignIn isSignIned={isSignIned} setIsSignIned={setIsSignIned} />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/modify" element={<Modify isSignIned={isSignIned} setIsSignIned={setIsSignIned}/>} />
                    <Route path="/subpage" element={<SubPage />} />
                </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default Home;
