import React, { useState, useEffect } from "react";
import { getMyTravelComment, setMyTravelComment, getDateTime } from './comment.js'
import './index.css'
import {getLoginedSessionID} from '../member/session.js'
// import { useNavigate } from 'react-router-dom';

const CommentWrite = (props) => {
    const [comment, setComment] = useState('');
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {

    }, []);


    const writeBtnClickHandler = () => {

    console.log('spot -->',props.spot);
    console.log('id -->',getLoginedSessionID());
    console.log('comment --> ', document.getElementById('WriteInput').value)
    console.log('regdate -->', getDateTime());
    console.log('moddate -->', getDateTime());
    console.log('rank --> ',document.getElementById('rankInput').value )



        // navigate('/commentlist');
    };

    return (
        <>
            <div id="write_form">
                <div className="inner">
                    <input id="WriteInput" type="text" className="comment_write" placeholder="로그인 후에 소중한 의견 부탁드립니다!"/>
                    <input id="rankInput" type="text" className="comment_write" placeholder="rank"/>
                    <button onClick={writeBtnClickHandler}>작성</button>
                    &nbsp;&nbsp;
                </div>
            </div>

        </>
    );
}

export default CommentWrite;
