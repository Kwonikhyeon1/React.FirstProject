import React, { useState } from "react"; 
import {getTravelInfoMemberDB , setTravelInfoMemberDB , getDateTime,
        getTravelCommentDB , setTravelCommentDB, 
 } from './MemberUtils'
 import { useNavigate } from "react-router-dom";
 import '../sub/style.css'
 import Post from "./Post";




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




 //////////////////사인업 ///////////

    const signUpBtnClickHandler =() => {
        console.log('[signUp] signUpBtnClickHandler Clicked!!');
        console.log('----> ', uPw.match( /(?=.*\d)(?=.*[a-z]).{8,}/))
        // MEMBER DB INSERT


        if (uId === '' ){
            
            alert('아이디를 입력해주세요.')
            
            return;

        } 
        

        
        if (getTravelInfoMemberDB() !== null){
            

            let travelInfoMembers = JSON.parse(getTravelInfoMemberDB());
            if (travelInfoMembers[uId] ){
                alert('사용중인 아이디 입니다.')
                return;
            } 

        }


        
        if (uPw.match( /(?=.*\d)(?=.*[a-z]).{8,}/) === null ){
            alert('비밀번호는 8자 이상의 영어소문자 + 숫자로 입력해주세요')
            return;

        } 


        if (uMail.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/) === null ){
            alert('올바른 이메일 주소를 입력해주세요')
            return;

        }

        let travelInfoMemberDB = getTravelInfoMemberDB();
        if(travelInfoMemberDB === null) {
            let newMemObj = {
                [uId]:{
                    'uId': uId,
                    'uPw': uPw,
                    'uMail': uMail,
                    'uAddress': enroll_company.address,
                    'uZoneCode': enroll_company.zonecode,
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
                    'uAddress': enroll_company.address,
                    'uZoneCode': enroll_company.zonecode,
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

    const [enroll_company, setEnroll_company] = useState({
        address:'',
        zonecode:'',
    });
    
    const [popup, setPopup] = useState(false);
    
    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
    }
    
    const handleComplete = (data) => {
        setPopup(!popup);
    }

  
    
    return(


        <div className="sign-up">
            <h3> 회원가입 </h3>
            
            <input type="text" onChange={uIdChangeHandler} className="txt-basic" placeholder="아이디를 입력하세요" /><br />
            <input type="password" onChange={uPwChangeHandler} className="txt-basic" placeholder="비밀번호 입력" /><br />
            <input type="email" onChange={uMailChangeHandler} className="txt-basic" placeholder="메일주소를 입력하세요" /><br />
            <div className="post_code">
             <input className="user_enroll_text_code" placeholder="우편번호" type="text" required={true} name="address" onChange={handleInput} value={enroll_company.zonecode}/>
             <button onClick={handleComplete}>주소검색</button></div>
             <input className="user_enroll_text"  type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
             {popup && <Post company={enroll_company} setcompany={setEnroll_company} > </Post>}


            <input type="button" onClick={signUpBtnClickHandler} className="btn-basic" value="등록" />
            
          
       </div>

    )
}

export default SignUp;