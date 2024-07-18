import React, { useState, useEffect } from "react";
import  { getAllAres, getAllDBJobj, getAllSpotArea, initTravelDB, findSpot, getComment, dispRank  } from '../main/travelDB.js'
import {getLoginedSessionID} from '../member/session.js'
import {getSpotAllCommentDB} from '../comment/comment.js'


const CommentList = (props) => {


    useEffect(() => {
        
        console.log(props.review)

    }, [props.flag]);


    const myMenModify = (e) => {
        let fullId = e.target.previousElementSibling.value;

        if(getLoginedSessionID() === '') {
            alert('수정은 로그인 하셔야 가능합니다');
        } else if (getLoginedSessionID() !== fullId) {
            alert('타인의 글은 수정할 수 없습니다.');
        } else {
            e.target.parentElement.style.display='hidden';
        }
        
    }

    return (
         <>

         <div id="list-wrap">
             <div className="list-item">
                 
                {
                  props.review.map(e => 
                      <>
                      <div className="item-wrap">
                        <div className="id">{e.uId.substr(0,1)}</div>
                        <input className='fullId' type='hidden' value={`${e.uId}`}/>
                        <input className="mention" type="text" readOnly onClick={myMenModify} value={`${e.comment}`}/>
                       <div>
                        <div className="modDate">{e.modDate.split(' ')[0]}</div>
                        <div className="rank">{dispRank(e.rank)}</div>
                      </div></div>
                      </>
                  ) 
                  
                 }
             </div>
         </div>

         </>
        
    );
}

export default CommentList;
