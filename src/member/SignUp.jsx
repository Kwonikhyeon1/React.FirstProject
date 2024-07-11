import React, { useState } from "react"; 
import {getTravelInfoMemberDB , setTravelInfoMemberDB , getDateTime,
        getTravelCommentDB , setTravelCommentDB
 } from './MemberUtils'
 import { useNavigate } from "react-router-dom";




const SignUp = () => {


    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const [uMail, setUMail] = useState('');

    const navigate = useNavigate();


    const uIdChangeHandler =(e) => {
        console.log('[signUp] uIdClickHandler()');
        
        setUId(e.target.value);
    
    }


    const uPwChangeHandler =(e) => {
        console.log('[signUp] uPwClickHandler()');
        
        setUPw(e.target.value);
        

    }

    const uMailChangeHandler =(e) => {
        console.log('[signUp] uMailClickHandler()');
    
        setUMail(e.target.value);
    }

    const signUpBtnClickHandler =() => {
        console.log('[signUp] signUpBtnClickHandler Clicked!!');
        console.log('----> ', uPw.match( /(?=.*\d)(?=.*[a-z]).{8,}/))
        // MEMBER DB INSERT

        
        let travelInfoMembers = JSON.parse(getTravelInfoMemberDB());
        if (travelInfoMembers[uId] ){
            alert('사용중인 아이디 입니다.')
            return;
        } 
        
        if (uPw.match( /(?=.*\d)(?=.*[a-z]).{8,}/) === null ){
            alert('숫자&영어 소문자포함된 8자리 이상')
            return;

        }

        let travelInfoMemberDB = getTravelInfoMemberDB();
        if(travelInfoMemberDB === null) {
            let newMemObj = {
                [uId]:{
                    'uId': uId,
                    'uPw': uPw,
                    'uMail': uMail,
                    'uRegDate': getDateTime(),
                    'uModDate': getDateTime(),
                }
            }

            setTravelInfoMemberDB(newMemObj);

        } else {

            let travelInfoMembers = JSON.parse(travelInfoMemberDB);
            travelInfoMembers[uId] = {
                     'uId': uId,
                    'uPw': uPw,
                    'uMail': uMail,
                    'uRegDate': getDateTime(),
                    'uModDate': getDateTime(),

            }

            setTravelInfoMemberDB(travelInfoMembers);
        }

        /// COMMENT EMPTY DB CREATE ///////
        let travelCommentDB = getTravelCommentDB();
        if (travelCommentDB === null) {
           
            setTravelCommentDB();
            
        }
        // } else {

        //     let comments = JSON.parse(travelCommentDB);
        //     // comments[uId] = {}
        //     comments[] = {}

        //     setTravelCommentDB(comments)
        // }

        alert('회원가입을 축하합니다.')
      
        navigate('/');
    }


    return(


        <div className="sign-up">
            <h3> 회원가입 </h3>
            <input type="text" onChange={uIdChangeHandler} className="txt-basic" placeholder="아이디를 입력하세요" /><br />
            <input type="password" onChange={uPwChangeHandler} className="txt-basic" placeholder="비밀번호 입력" /><br />
            <input type="email" onChange={uMailChangeHandler} className="txt-basic" placeholder="메일주소를 입력하세요" /><br />
            <input type="button" onClick={signUpBtnClickHandler} className="btn-basic" value="등록" />
       </div>

    )
}

export default SignUp;