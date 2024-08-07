import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpotAllCommentDB } from '../comment/comment.js'
import { getLoginedSessionID } from "../member/session.js";
import GoogleMap from './GoogleMap.tsx'
import CommentWrite from '../comment/CommentWrite.jsx'
import CommentList from '../comment/CommentList.jsx'
import Top from '../main/Top.jsx'
import './style.css'
import '../main/Top.css'


const SubPage = (props) =>{

    const param = useParams();
    const [review, setReview] = useState(getSpotAllCommentDB(param.spotname, getLoginedSessionID()));
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [flag, setFlag] = useState(false);
    
    useEffect(() => {

        document.getElementsByName(props.allDB[param.spotname].area)[0].setAttribute('style', 'background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);')
        props.setCurMenu(document.getElementsByName(props.allDB[param.spotname].area)[0].getAttribute('name'));
        
        setReview(getSpotAllCommentDB(param.spotname, getLoginedSessionID()))
        setLat(props.allDB[param.spotname].geo_loc.split(',')[0]);
        setLng(props.allDB[param.spotname].geo_loc.split(',')[1]);

    },[flag, props.passImg])

    const btnClickEventHandler = (e) => {
        console.log('[SubPage] btnClickEventHandler');
        let iNo = Number(props.passImg);

        if (e.target.className === "left_arrow") {
            iNo === 0 ? iNo = 0 : iNo -= 1;
            iNo === 0 ? e.target.style.display = 'none' : e.target.style.display = '' 
            e.target.nextElementSibling.style.display = '';
        } else {
            iNo === 2 ? iNo = 2 : iNo += 1;
            iNo === 2 ? e.target.style.display = 'none' : e.target.style.display = '' 
            e.target.previousElementSibling.style.display = '';
        }
        props.setPassImg(iNo);
    }

    const checkIsMyComment = () => {
        if (review){
            for (let i = 0; i < review.length; i++) {
                if (review[i].uId === getLoginedSessionID()) {
                    return true;
                }
            }
        }
        return false;
    }    

    return(
        
        <div id="sub_wrap">
            
                <h1>{param.spotname}</h1>
                <h4>{props.allDB[param.spotname].address}</h4>
                <div className="img_wrap">
                    <img className="sub_img" src={props.allDB[param.spotname].img_src[Number(props.passImg)]} /> 
                    <div className="left_arrow" onClick={btnClickEventHandler}
                        style={props.passImg === '0' ? {display : 'none'} : {display:''}}>{'<'}</div>
                    <div className="right_arrow"  onClick={btnClickEventHandler}
                        style={props.passImg === '2' ? {display : 'none'} : {display:''}}>{'>'}</div>
                </div>
                <div className="text_wrap">
                    <h3>상세정보</h3>
                    <p>{props.allDB[param.spotname].descript}</p>
                </div>
                <GoogleMap className="map" lat={lat} lng={lng}/>
                <br />
                {
                    checkIsMyComment()
                    ?
                    null
                    :
                    <CommentWrite spot={param.spotname}  flag={flag} setFlag={setFlag}/>
                }
                <br />
                {
                    review
                    ?
                    <CommentList spot={param.spotname} flag={flag} setFlag={setFlag} review={review}/>
                    :
                    null
                }
                

                <Top />

        </div>
    )
}

export default SubPage;