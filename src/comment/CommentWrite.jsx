 import React, { useState, useEffect } from "react";
 import { getDateTime } from './comment.js';
 import './index.css';
 import { getLoginedSessionID } from '../member/session.js';
 import { getAllTravelCommentDB, setTravelCommentDB } from './comment.js';
 import CommentStar from './CommentStar.jsx';


const CommentWrite = () => {
  // 상태 변수 설정
  const [comment, setComment] = useState('');
  const [rank, setRank] = useState(0);
  const [spot, setSpot] = useState('');
  const [comments, setComments] = useState({});

   useEffect(() => {
     const allComments = getAllTravelCommentDB();
     if (allComments) {
       setComments(allComments);
     }
   }, []);

   // 핸들러
   const commentTxtClickHandler = () => {
     if (getLoginedSessionID() === '') {
       alert('로그인 후 이용해 주세요.');
     }
   };

   const commentTxtChangeHandler = (e) => {
     setComment(e.target.value);
   };

   const commentBtnClickHandler = () => {
     if (comment === '') {
       alert('장소와 코멘트를 작성해 주세요.');
       return;
     }

     const newComment = {
       spot: spot,
       uId: getLoginedSessionID(),
       comment: comment,
       rank: rank,
       modDate: getDateTime(),
       regDate: getDateTime(),
     };

     console.log('1 ----> ', comments); 
     const updateComments = [...comments, newComment,];
     console.log('----> ', updateComments);
     return;

     setComments(updateComments);
     setTravelCommentDB(updateComments);

     setComment('');
     setSpot('');
     setRank(0);
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
           placeholder="로그인 후 소중한 글 작성 부탁드립니다."
         />
         <button onClick={commentBtnClickHandler} className="comment_btn">
           작성
         </button>
       </div>
     </div>
   );
 };

 export default CommentWrite;
