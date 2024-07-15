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

    const toggleLeaveHandler = () => {
         setSignMenuBar(false);
     }

    const goHome = () => {
        if (props.curMenu !== undefined){
            document.getElementsByName(props.curMenu)[0].style.backgroundColor= '';
            document.getElementsByName(props.curMenu)[0].style.color='';
        }
        navigate(`/`);
    }
 

    const goMain = (e, area) => {                               // main page
        console.log('[Menubar] goMain()');

        let befMenu = props.curMenu;
        if (befMenu !== undefined){
            document.getElementsByName(befMenu)[0].setAttribute('style', 'backgroundColor="#000"');
            document.getElementsByName(befMenu)[0].setAttribute('style', 'color="#fff"');
        }
        
        props.setCurMenu(area)
        
        e.target.style.backgroundColor='#fff';
        e.target.style.color='#000';
        
        props.setMenuFlag(v => !v);
        navigate(`/main/${area}/all`);
    }

    const searchSpot = (e, spot) => {                           // main page
        console.log('[Menubar] searchSpot()');

        // if (spot === '') return alert('검색하고자 하는 곳을 입력하세요')

        let searcResult = findSpot(spot);

        if (searcResult.length === 0){
            alert('찾으시는 장소가 DB에 없습니다.')
            return
        }

        if (props.curMenu !== undefined){
            document.getElementsByName(props.curMenu)[0].setAttribute('style', 'backgroundColor="#000"');
            document.getElementsByName(props.curMenu)[0].setAttribute('style', 'color="#fff"');
        }            
        
        console.log(props.menuFlag)
        props.setMenuFlag(v => !v);

        navigate(`/main/서치/${searcResult}` , { replace: true });
    }

    const signOutClickHandler = () => {
        console.log('[Menubar] signOutClickHandler()');

        setLoginedSessionID();
        props.setIsSignIned(false);
        
    }

    const goEnter = (e) => {
        console.log('[Menubar] goEnter()');
        console.log (e.target.value);

        if (e.keyCode === 13) {
            searchSpot(e, e.target.value);
        }

    }

    return (
        <>
            <div className="header">
                <h2 onClick={goHome}>어디로 떠나고 싶으세요?</h2>

                <div className="search_bar">
                    <input type="text" className="search" id="searchInput" onKeyDown={goEnter}/>
                    <a href="#none" className="material-symbols-outlined search_icon" onClick={(e) => searchSpot(e, document.getElementById('searchInput').value)}>search</a>   
                </div>

                <div className="sign_bar"  onClick={toggleClickHandler} onMouseLeave={toggleLeaveHandler}>
                    <span className="material-symbols-outlined"  onClick={toggleClickHandler}
                        style ={
                            props.isSignIned 
                            ?
                            {color:'#0f0'}
                            :
                            null
                        }>account_circle</span>
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
                    <li name='서울' onClick={(e) => goMain(e,'서울')}>서울</li>
                    <li name='인천' onClick={(e) => goMain(e,'인천')}>인천</li>
                    <li name='대전'onClick={(e) => goMain(e,'대전')}>대전</li>
                    <li name='대구'onClick={(e) => goMain(e,'대구')}>대구</li>
                    <li name='광주'onClick={(e) => goMain(e,'광주')}>광주</li>
                    <li name='울산'onClick={(e) => goMain(e,'울산')}>울산</li>
                    <li name='경기'onClick={(e) => goMain(e,'경기')}>경기</li>
                    <li name='강원'onClick={(e) => goMain(e,'강원')}>강원</li>
                    <li name='충북'onClick={(e) => goMain(e,'충북')}>충북</li>
                    <li name='충남' onClick={(e) => goMain(e,'충남')}>충남</li>
                    <li name='경북' onClick={(e) => goMain(e,'경북')}>경북</li>
                    <li name='경남' onClick={(e) => goMain(e,'경남')}>경남</li>
                    <li name='전북' onClick={(e) => goMain(e,'전북')}>전북</li>
                    <li name='전남' onClick={(e) => goMain(e,'전남')}>전남</li>
                    <li name='제주' onClick={(e) => goMain(e,'제주')}>제주</li>
                    <li name='세종' onClick={(e) => goMain(e,'세종')}>세종</li>


                </ul>
            </div>
        </>
    );
}

export default Menubar;
