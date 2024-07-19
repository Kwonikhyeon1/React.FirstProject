import React from "react";
import CommentStar from './CommentStar.jsx';
import { getDateTime } from "./comment.js";
import {addTravelCommentDB} from '../comment/comment.js'
import './index.css'

const ModalModify = (props) => {


    const onChangeHandler = (e) => {
        props.setComment(e.target.value)

    }
    const modifyClickHandler = () => {

        let newDate = getDateTime();
        props.setModDate(newDate);

        let myNewComment = {
            'uId' : props.uId,
            'comment' : props.comment,
            'rank' : props.rank,
            'modDate' : props.modDate,
            'regDate' : props.regDate
        }

        addTravelCommentDB(props.spot, myNewComment);

        props.setModalOpen(false);
        props.setFlag(!props.flag);
        alert('코멘트가 수정되었습니다.')
        document.getElementById('myComment').style.display=''

    }
 
    const cancelClickHandler = () => {
        document.getElementById('myComment').style.display=''
        props.setModalOpen(false);
        props.setFlag(!props.flag);
    }

    return (
        <div id="modal-wrap">
            <div className="modal-box">
                <CommentStar score={props.rank} setScore={props.setRank} />
                <input id='mod-comment' type="text" value= {`${props.comment}`} onChange={onChangeHandler}/>
                <div>
                <button className="mod-modify" onClick={modifyClickHandler} >수정</button>
                <button className="mod-cancel"onClick={cancelClickHandler} >취소</button>
                </div>
            </div>
        </div>
    );
};

export default ModalModify;
