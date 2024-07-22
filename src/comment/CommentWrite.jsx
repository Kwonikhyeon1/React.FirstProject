import React, { useState, useEffect } from "react";
import { getDateTime } from './comment.js';
import { getLoginedSessionID } from '../member/session.js';
import { addTravelCommentDB } from './comment.js';
import { useNavigate } from "react-router-dom";
import './index.css';
import CommentStar from './CommentStar.jsx';


const CommentWrite = (props) => {

  // 상태 변수 설정
  const [comment, setComment] = useState('');
  const [rank, setRank] = useState(0);
  const [spot, setSpot] = useState(props.spot);
  const navigate = useNavigate();
  
  // 핸들러
  const commentTxtClickHandler = () => {
    if (getLoginedSessionID() === '') {
      alert('로그인 후 이용해 주세요.');
      navigate('/signin')
      return;
    }
  };

  const commentTxtChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const commentBtnClickHandler = () => {

    if (getLoginedSessionID() === '') {
      alert('로그인 후 이용해 주세요.');
      navigate('/signin')
      return;
    }

    if (comment === '') {
      alert('별점과 코멘트를 작성해 주세요.');
      return;
    }

    const newComment = {
      //spot: spot,
      uId: getLoginedSessionID(),
      comment: comment,
      rank: rank,
      modDate: getDateTime(),
      regDate: getDateTime(),
    };

    
    addTravelCommentDB(spot, newComment);
    props.setFlag(!props.flag);
    setComment('');
    setRank(0);

    return;

  };

  return (
    <div id="wrap">
      <div className="inner">
        <CommentStar score={rank} setScore={setRank} />
        <input
          type="text"
          value={comment}
          onClick={commentTxtClickHandler}
          onChange={commentTxtChangeHandler}
          className="comment_txt"
          placeholder={!getLoginedSessionID() ? '로그인 후 소중한 글 작성 부탁드립니다.' : '별점과 리뷰를 남겨주세요.' }
        />
        <button onClick={commentBtnClickHandler} className="comment_btn">
          작성
        </button>
      </div>
    </div>
  );
};

export default CommentWrite;
