import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Menubar.css"; // Import CSS file properly

const Menubar = () => {
    const [signMenuBar, setSignMenuBar] = useState(false);

    const toggleClickHandler = () => {
        setSignMenuBar(signMenuBar => !signMenuBar);
    }
    
    return (
        <>
            <div className="header">
                <h2>어디로 떠나고 싶으세요?</h2>

                <div className="search_bar">
                    <input type="text" className="search" id="searchInput" />
                    <a href="#none" className="material-symbols-outlined search_icon" onClick={() => document.getElementById('searchInput').focus()}>search</a>
                </div>

                <div className="sign_bar">
                    <span className="material-symbols-outlined" onClick={toggleClickHandler}>account_circle</span>
                    <div className="inner">
                        {signMenuBar && (
                            <ul>
                                <li><Link to="/">회원가입</Link></li>
                                <li><Link to="/">로그인</Link></li>
                                <li><Link to="/">로그아웃</Link></li>
                                <li><Link to="/">내정보수정</Link></li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            <div className="menubar">
                <ul>
                    <li><Link to="/">서울</Link></li>
                    <li><Link to="/">인천</Link></li>
                    <li><Link to="/">대전</Link></li>
                    <li><Link to="/">대구</Link></li>
                    <li><Link to="/">광주</Link></li>
                    <li><Link to="/">울산</Link></li>
                    <li><Link to="/">경기</Link></li>
                    <li><Link to="/">강원</Link></li>
                    <li><Link to="/">충북</Link></li>
                    <li><Link to="/">충남</Link></li>
                    <li><Link to="/">경북</Link></li>
                    <li><Link to="/">경남</Link></li>
                    <li><Link to="/">전북</Link></li>
                    <li><Link to="/">전남</Link></li>
                    <li><Link to="/">제주</Link></li>
                    <li><Link to="/">세종</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Menubar;
