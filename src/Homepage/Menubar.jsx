import React, { useEffect, useState } from "react";
import { Link, useNavigate , Outlet } from "react-router-dom";
import "../css/Menubar.css"; // Import CSS file properly
import { findSpot } from'../main/travelDB.js'                   // main page 
import {setLoginedSessionID} from '../member/session.js'




const Menubar = (props) => {
    // hook
    const navigate = useNavigate()                               // main page
    
    const [signMenuBar, setSignMenuBar] = useState(false);

    useEffect(() => {
        console.log('[Menubar] useEffect()');

        console.log('[Menubar] props.isSignIned ----> ', props.isSignIned);     // false

    }, []);


    // handler
    const toggleClickHandler = () => {
        setSignMenuBar(signMenuBar => !signMenuBar);
    }

    const goMain = (e, area) => {                               // main page
        console.log('[Menubar] goMain()');

        alert(area);
        navigate(`/main/${area}/all`);
    }

    const searchSpot = (e, spot) => {                           // main page
        console.log('[Menubar] searchSpot()');

        let searcResult = findSpot(spot);
        
        navigate(`/main/서치/${searcResult}`);
    }

    const signOutClickHandler = () => {
        console.log('[Menubar] signOutClickHandler()');

        setLoginedSessionID();
        props.setIsSignIned(false);
        
    }

    return (
        <>
            <div className="header">
                <h2>어디로 떠나고 싶으세요?</h2>

                <div className="search_bar">
                    <input type="text" className="search" id="searchInput" />
                    <a href="#none" className="material-symbols-outlined search_icon" onClick={(e) => searchSpot(e, document.getElementById('searchInput').value)}>search</a>   
                </div>

                <div className="sign_bar">
                    <span className="material-symbols-outlined" onClick={toggleClickHandler}>account_circle</span>
                    <div className="inner">
                        {signMenuBar && (
                            <ul>
                                {
                                    props.isSignIned?
                                    <>
                                     <li><Link to="/" onClick={signOutClickHandler} >로그아웃</Link></li>
                                     <li><Link to="/modify">회원정보수정</Link></li>
                                    </>
                                    :
                                    <>
                                     <li><Link to="/signup">회원가입</Link></li>
                                     <li><Link isSignIned={props.isSignIned} setIsSignIned={props.setIsSignIned} to="/signin">로그인</Link></li>
                                     <Outlet />
                                    </>
                                }
                               
                              
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            <div className="menubar">
                <ul>
                <li onClick={(e) => goMain(e,'서울')}>서울</li>
                    <li onClick={(e) => goMain(e,'인천')}>인천</li>
                    <li onClick={(e) => goMain(e,'대전')}>대전</li>
                    <li onClick={(e) => goMain(e,'대구')}>대구</li>
                    <li onClick={(e) => goMain(e,'광주')}>광주</li>
                    <li onClick={(e) => goMain(e,'울산')}>울산</li>
                    <li onClick={(e) => goMain(e,'경기')}>경기</li>
                    <li onClick={(e) => goMain(e,'강원')}>강원</li>
                    <li onClick={(e) => goMain(e,'충북')}>충북</li>
                    <li onClick={(e) => goMain(e,'충남')}>충남</li>
                    <li onClick={(e) => goMain(e,'경북')}>경북</li>
                    <li onClick={(e) => goMain(e,'경남')}>경남</li>
                    <li onClick={(e) => goMain(e,'전북')}>전북</li>
                    <li onClick={(e) => goMain(e,'전남')}>전남</li>
                    <li onClick={(e) => goMain(e,'제주')}>제주</li>
                    <li onClick={(e) => goMain(e,'세종')}>세종</li>

                </ul>
            </div>
        </>
    );
}

export default Menubar;
