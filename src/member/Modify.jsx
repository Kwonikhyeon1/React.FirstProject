import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyInfo, setMyInfo, getDateTime ,getAllMemberInfo , setTravelInfoMemberDB  } from "./MemberUtils";
import { getLoginedSessionID , setLoginedSessionID } from "./session";


const Modify = (props) => {

    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const [uMail, setUMail] = useState('');

    const navigate = useNavigate();

    useEffect(()=> {
        console.log('[Modify] useEffect()');

        let myInfo = getMyInfo(getLoginedSessionID());

        if(myInfo === undefined){
            alert('로그인 하세요');
            navigate('/signin');
            return;

        }

        setUId(myInfo.uId);
        setUPw(myInfo.uPw);
        setUMail(myInfo.uMail);

    },[]);



    const uPwChangeHandler = (e) => {
        console.log('[Modify] uPwChangeHandler()');
        setUPw(e.target.value);
    }

    const uMailChangeHandler = (e) => {
        console.log('[Modify] uMailChangeHandler()');
        setUMail(e.target.value);
    }

  
    const modifyBtnClickHandler = () => {
        console.log('[Modify] modifyBtnClickHandler()');

        let myInfo = getMyInfo(getLoginedSessionID());

        myInfo.uPw = uPw;
        myInfo.uMail = uMail;
        myInfo.uModDate = getDateTime();   

        if (uPw.match( /(?=.*\d)(?=.*[a-z]).{8,}/) === null ){
            alert('비밀번호는 8자 이상의 영어소문자 + 숫자로 입력해주세요.')
            return;
    
        }

        setMyInfo(getLoginedSessionID(), myInfo);           // DB 업데이트

        alert('수정 완료');

        //setIsSignIned(false); 

        navigate('/');

    }

    const deleteBtnClickHandler = () => {
       console.log('[Modify] deleteBtnClickHandler()');

       if (window.confirm('정말로 탈퇴 하시겠습니까?')) {
        // DELETE MEMBER INFO
        let allMemberInfo = getAllMemberInfo();
        delete allMemberInfo[getLoginedSessionID()];
        setTravelInfoMemberDB(allMemberInfo);

        alert('계정 삭제완료!!');  // notification UI

        props.setIsSignIned(false); 

        setLoginedSessionID();      // 세션 정리

        navigate('/')               // 화면 전환


     } else {
        alert('계정 삭제실패!!');  // notification UI

    }
    }




    return(
    
        <div className="modify">
            <h3> 회원 정보 수정 </h3>
            <input type="text" value={uId} className="txt-basic" readOnly /><br />
            <input type="password" value={uPw} onChange={uPwChangeHandler} className="txt-basic" placeholder="비밀번호 변경" /><br />
            <input type="email" value={uMail} onChange={uMailChangeHandler} className="txt-basic" placeholder="메일주소 변경" /><br />
            <input type="button" onClick={modifyBtnClickHandler} className="btn-basic" value="정보수정" /><br />
            <input type="button" onClick={deleteBtnClickHandler} className="btn-small" value="회원탈퇴" />
       </div>
        

    )
}

export default Modify;