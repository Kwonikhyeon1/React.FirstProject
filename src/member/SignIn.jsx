import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { getMyInfo } from "./MemberUtils";
import { setLoginedSessionID } from "./session";
import '../sub/style.css'


const SignIn = (props) => {

    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const navigate = useNavigate();

    const uIdChangeHandler =(e) => {
        console.log('[signIn] uIdChangeHandler()');
        
        setUId(e.target.value);
    
    }

    const uPwChangeHandler =(e) => {
        console.log('[signIn] uPwChangeHandler()');
    
        setUPw(e.target.value);
    }

    const signUpBtnClickHandler =() => {
        console.log('[signIn] signUpBtnClickHandler Clicked!!');

        navigate('/signup');
    }

    const signInBtnClickHandler =() => {
        console.log('[signIn] signInBtnClickHandler Clicked!!');

        let myInfo = getMyInfo(uId);

        if (myInfo !== undefined && myInfo.uPw === uPw ) {

            alert('로그인에 성공했습니다!');                // UI 알람

            setLoginedSessionID(uId);                     // set session user ID 

            props.setIsSignIned(true);                    // set login status                     

            navigate('/main/서울/all');

       } else {
            alert('사용자 정보를 확인해주세요!')

            setLoginedSessionID('');
            props.setIsSignIned(false);
            
            setUId('');
            setUPw('');

       }

    }


    return(
       
        <div className="sign-in">
            <h3> 로그인 </h3>
            <input type="text" value={uId} className="txt-basic" onChange={uIdChangeHandler} placeholder="아이디를 입력하세요" /><br />
            <input type="password" value={uPw} className="txt-basic" onChange={uPwChangeHandler} placeholder="비밀번호를 입력하세요" /><br />
            <input type="button" className="btn-basic" onClick={signInBtnClickHandler} value="로그인" /> <br />
            <input type="button" className="btn-small" onClick={signUpBtnClickHandler} value="회원가입" />
       </div>

    )   

}

export default SignIn;