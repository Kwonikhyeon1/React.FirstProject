import React, { useState, useEffect } from "react";
import  { getAllAres, getAllDBJobj, getAllSpotArea, initTravelDB, findSpot, getComment, dispRank  } from '../main/travelDB.js'
import {getLoginedSessionID} from '../member/session.js'
import './CommentList.css'
// import { useNavigate } from 'react-router-dom';

const CommentList = (props) => {

    const [commentList, setCommentList] = useState([]);

    useEffect(() => {

        console.log('spot -->',props.spot);
        console.log('id -->',getLoginedSessionID());
        setCommentList(getComment(props.spot));
        console.log(typeof(commentList));
        console.log(commentList);

    }, []);


    const myMenModify = () => {
        let fullId = document.getElementById('fullId').value;

        if(getLoginedSessionID() === '') {
            alert('수정은 로그인 하셔야 가능합니다');
        } else if (getLoginedSessionID() !== fullId) {
            alert('타인의 글은 수정할 수 없습니다.');
        }
        
    }

    return (
        <>
            <div id="list-wrap">
                <div className="list-item">
                    {
                                                
                                                commentList.map(e => 
                                                    <>
                                                    <div className="item-wrap">
                                                    <div className="id">{e.id.substr(0,1)}</div>
                                                    <input id='fullId' type='hidden' value={`${e.id}`}/>
                                                    <input id="mention" type="text" readOnly onClick={myMenModify} value={`${e.comment}`}/>
                                                    <div className="moddate">{e.moddate}</div>
                                                    <div className="rank">{dispRank(e.rank)}</div>
                                                    </div>
                                                    </>
                                                ) 
                                                
                    }
                </div>
            </div>

        </>
    );
}

export default CommentList;
