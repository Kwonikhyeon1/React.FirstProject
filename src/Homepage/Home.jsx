import React, { useState , useEffect } from "react"; 
import Menubar from "../Homepage/Menubar"; //Menubar component
import HomeBg from './HomeBg'; // Swiper Component
import Footer from '../Homepage/Footer' // Footer component 
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import SignIn from "../member/SignIn.jsx";
import SignUp from "../member/SignUp.jsx";
import Modify from "../member/Modify.jsx";
import SubPage from "../sub/SubPage.jsx"
import CommentWrite from'../comment/CommentWrite.jsx'
import Main from'../main/main.jsx'                                  // main page
import ScrollToTop from "./ScrollToTop.js";


import  { getAllAres, getAllDBJobj, getAllSpotArea, initTravelDB, findSpot, getCommentRank  } from '../main/travelDB.js'

const Home = () => {

    const [isSignIned, setIsSignIned] = useState(false);

    const [menuFlag, setMenuFlag] = useState(false);
    const [signMenuBar, setSignMenuBar] = useState(false);
    const [curMenu, setCurMenu] = useState();

    
    const [allDB, setAllDB] = useState();           // from Main.jsx
    const [curImgNo, setCurImgNo] = useState('0');  // from ImgNoChange.jsx
    const [passImg, setPassImg] = useState('0')

    const [allArea, setAllArea] = useState();
    const [allSpot, setAllSpot] = useState([]);

    const param = useParams();
    useEffect(() => {

        // setIsSignIned(isSignIned);

        if (localStorage.getItem('loginedSessionID') === null) {
            setIsSignIned(false);
            
        } else {
            setIsSignIned(true);

        }

        initTravelDB();

        // setAllDB(getAllDBJobj());      // Object
        // setAllArea(getAllAres());      // Array
       


        console.log(curImgNo);


    },[]);

    return (
        <>
            <BrowserRouter>
                <Menubar curMenu={curMenu} setCurMenu={setCurMenu} isSignIned={isSignIned} setIsSignIned={setIsSignIned} menuFlag={menuFlag} setMenuFlag={setMenuFlag}  signMenuBar={signMenuBar} setSignMenuBar={setSignMenuBar}/>
                <div className="home_wrap">
                <ScrollToTop />
                <Routes>
                    
                    <Route path="/comment" element={<CommentWrite />} />    { /*main page */}
                    <Route path="/" element={<HomeBg />} />
                    <Route path="/main/:curMenu/:result" element={<Main curMenu={curMenu} setCurMenu={setCurMenu} menuFlag={menuFlag} 
                    setMenuFlag={setMenuFlag} 
                    allDB={allDB} setAllDB={setAllDB}
                    allArea={allArea} setAllArea={setAllArea}
                    allSpot={allSpot} setAllSpot={setAllSpot}
                    curImgNo={curImgNo} setCurImgNo={setCurImgNo}
                    passImg={passImg} setPassImg={setPassImg}
                    />} />    { /*main page */}
                    <Route path="/signin" element={<SignIn isSignIned={isSignIned} setIsSignIned={setIsSignIned} 
                    curMenu={curMenu} setCurMenu={setCurMenu} 
                    menuFlag={menuFlag} setMenuFlag={setMenuFlag}
                    />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/modify" element={<Modify isSignIned={isSignIned} setIsSignIned={setIsSignIned}/>} />
                    <Route path="/subpage/:spotname" element={<SubPage isSignIned={isSignIned} allDB={allDB} curImgNo={curImgNo} setCurImgNo={setCurImgNo} passImg={passImg} setPassImg={setPassImg} setCurMenu={setCurMenu}/>} />
                </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default Home;
