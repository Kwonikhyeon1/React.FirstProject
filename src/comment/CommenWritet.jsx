import React, { useState, useEffect } from "react";
import { getMyTravelComment, setMyTravelComment, getLoginedSessionID, getDateTime } from './comment.js'
import './index.css'
// import { useNavigate } from 'react-router-dom';

const CommentWrite = () => {
    const [comment, setComment] = useState('');
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        const comments = getMyTravelComment(getLoginedSessionID());
        if (comments) {
            setCommentList(Object.values(comments));
        }
    }, []);

    const checkLoginState = (e) => {
        console.log('checkLoginState()');
        if (getLoginedSessionID() === '') {
            alert('로그인 상태를 확인해 주세요.');
            // navigate('/signin');
            e.preventDefault();
        }
    };

    const commentTextChangeHandler = (e) => {
        console.log('commentTextChangeHandler()');
        setComment(e.target.value);
    };

    const writeBtnClickHandler = () => {
        console.log('writeBtnClickHandler()');

        if (comment === '') {
            alert('댓글을 남겨 주세요!');
            return;
        }

        const myComment = getMyTravelComment(getLoginedSessionID()) || {};
        console.log('내코멘트------>', myComment);

        const newComment = {
            'comment': comment,
            'commentRegDate': getDateTime(),
            'commentModDate': getDateTime(),
        };

        myComment[getDateTime()] = newComment;

        setMyTravelComment(getLoginedSessionID(), myComment);
        
        setCommentList(prevList => [...prevList, newComment]);

        alert('작성이 완료 되었습니다.');

        // navigate('/commentlist');
    };

    return (
        <>
            <div id="write_form">
                <div className="inner">
                    <p className="txt">댓글</p>
                    <input type="text" className="comment_write" onClick={checkLoginState} onChange={commentTextChangeHandler} placeholder="로그인 후에 소중한 의견 부탁드립니다!"/>
                    <button onClick={writeBtnClickHandler}>작성</button>
                    &nbsp;&nbsp;
                </div>
            </div>
            <div id="Comment_list">
                <div className="inner">
                    <div>{commentList.map((item, index) => (
                        <div key={index} className="comment_item">
                            <p>{item.comment}</p>
                            <p>{item.commentRegDate}</p>
                        </div>
                    ))}</div>
                </div>
            </div>
        </>
    );
}

export default CommentWrite;
