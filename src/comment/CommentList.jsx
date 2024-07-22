import React, { useState, useEffect, useRef } from "react";
import { dispRank } from '../main/travelDB.js'
import { getLoginedSessionID } from '../member/session.js'
import { getDateTime } from '../comment/comment.js'
import { deleteMyComment } from './comment.js'
import ModalModify from './ModalModify.jsx'


const CommentList = (props) => {

    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();
    
    const [myRank, setMyRank] = useState(0)
    const [myComment, setMyComment] = useState();
    const [myRegDate, setMyRegDate] = useState();
    const [myModDate, setMyModDate] = useState();
    const [myUid, setMyUid] = useState();
    const [mySpot,setMySpot] = useState();


    useEffect(() => {
        
        console.log(props.review)

    }, [props.flag, modalOpen] );


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


    const deleteComment = (ev, e) => {
      
        deleteMyComment(props.spot, e.uId)
        props.setFlag(!props.flag);
        alert('코멘트가 삭제되었습니다.')
    }


    const modifyComment = (ev, e) => {

        ev.target.parentElement.parentElement.style.display = 'none'
        
        setMySpot(props.spot)
        setMyRank(e.rank);
        setMyComment(e.comment);
        setMyRegDate(e.regDate);
        setMyModDate(getDateTime());
        setMyUid(e.uId);
        
        setModalOpen(true)
        
    }


    return (
        <>
         <div id="list-wrap">
            <div className="list-item">
                 
                {
                    props.review.map(e => 
                        <>
                        <div className="item-wrap" id={e.uId === getLoginedSessionID() ? 'myComment' : ''}style={e.uId === getLoginedSessionID() ? {backgroundColor : '#f7efd8'}: null }>
                            <div className="id">{e.uId.substr(0,1)}</div>
                            <input className='fullId' type='hidden' value={`${e.uId}`}/>
                            <input className="mention" type="text" readOnly onClick={myMenModify} value={`${e.comment}`} style={e.uId === getLoginedSessionID() ? {backgroundColor : '#f7efd8'}: null }/>
                            <div>
                                    <div className="modDate">{e.modDate.split(' ')[0]}</div>
                                    <div className="rank">{dispRank(e.rank)}</div>
                                    {
                                    
                                    e.uId === getLoginedSessionID() 
                                    ?
                                    <>
                                    <button className="cmdModifyBtn"onClick={(ev) => modifyComment(ev,e)}>수정</button>
                                    <button className="cmdDeleteBtn"onClick={(ev) => deleteComment(ev,e)}>삭제</button>
                                    </>
                                    :
                                    null
                                    }
                            </div>

    
                        </div>  
                        </>
                        )
                    }                    
                        
                    {
                        modalOpen 
                        ?
                        < ModalModify flag={props.flag} setFlag={props.setFlag} modalOpen={modalOpen} setModalOpen={setModalOpen} 

                        rank={myRank} setRank={setMyRank} 
                        comment={myComment} setComment={setMyComment}
                        regDate={myRegDate} setRegDate={setMyRegDate}
                        modDate={myModDate} setModDate={setMyModDate}
                        uId={myUid} setUid={setMyUid}
                        spot={mySpot}
                        />
                        :
                        null

                    }
            </div>
        </div>
        </>
    );
}

export default CommentList;
