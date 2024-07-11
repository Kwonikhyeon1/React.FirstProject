import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { getMyInfo } from "./MemberUtils";
import { setLoginedSessionID } from "./session";

const SignIn = () => {

    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');

    const navigate = useNavigate();


    const uIdChangeHandler =(e) => {
        console.log('[signIn] uIdClickHandler()');
        
        setUId(e.target.value);
    
    }


    const uPwChangeHandler =(e) => {
        console.log('[signIn] uPwClickHandler()');
    
        setUPw(e.target.value);
    }



    const signUpBtnClickHandler =() => {
        console.log('[signIn] signUpBtnClickHandler Clicked!!');

        navigate('/sign-up');
    }


    const signInBtnClickHandler =() => {
        console.log('[signIn] signInBtnClickHandler Clicked!!');

       let myInfo = getMyInfo(uId);

       if (myInfo !== undefined && myInfo.uPw === uPw ) {

        alert('로그인 성공!')

        setLoginedSessionID(uId);
        
        // setIsSignIned(true);
        navigate('/');

       } else {
        alert('로그인 실패!')

        setLoginedSessionID('');
        //setIsSignIned(false);
        
        setUId('');
        setUPw('');

       }

    }


    return(
        
        <div className="sign-in">
            <h3> 로그인 </h3>
            <input type="text" className="txt-basic" onChange={uIdChangeHandler} placeholder="아이디를 입력하세요" /><br />
            <input type="password" className="txt-basic" onChange={uPwChangeHandler} placeholder="비밀번호를 입력하세요" /><br />
            <input type="button" className="btn-basic" onClick={signInBtnClickHandler} value="로그인" /> <br />
            <input type="button" className="btn-small" onClick={signUpBtnClickHandler} value="회원가입" />
       </div>


    )   

}
export default SignIn;