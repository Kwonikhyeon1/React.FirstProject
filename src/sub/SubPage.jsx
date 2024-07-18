import React, { useEffect, useState } from "react";
import './style.css'
import { useParams } from "react-router-dom";
import GoogleMap from './GoogleMap.tsx'
import CommentWrite from '../comment/CommentWrite.jsx'
import CommentList from '../comment/CommentList.jsx'
import {getSpotAllCommentDB} from '../comment/comment.js'
import '../main/Top.css'
import Top from '../main/Top.jsx'
import { getLoginedSessionID } from "../member/session.js";


const SubPage = (props) =>{

    const param = useParams();
    //const [review, setReview] = useState(getSpotAllCommentDB(param.spotname, getLoginedSessionID()));
    const [review, setReview] = useState(getSpotAllCommentDB(param.spotname, getLoginedSessionID()));
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [flag, setFlag] = useState(false);
    
    

    useEffect(() => {
        console.log('sub page landing')
        console.log(getSpotAllCommentDB(param.spotname))
        setReview(getSpotAllCommentDB(param.spotname, getLoginedSessionID()))
        //setReview(getSpotAllCommentDB(param.spotname));
        setLat(props.allDB[param.spotname].geo_loc.split(',')[0]);
        setLng(props.allDB[param.spotname].geo_loc.split(',')[1]);
        console.log( 'subpage =>  ', getSpotAllCommentDB(param.spotname));
        console.log( 'subpage review=>  ',review);
        //let reviewList = getSpotAllCommentDB(param.spotname)
        //setReview(reviewList)
        console.log(review)

    },[flag])

    return(
        
        <div id="sub_wrap">
            
                <h1>{param.spotname}</h1>
                <h4>{props.allDB[param.spotname].address}</h4>
                <img className="sub_img" src={props.allDB[param.spotname].img_src[Number(props.passImg)]} /> 
                <div className="text_wrap">
                    <h3>상세정보</h3>
                    <p>{props.allDB[param.spotname].descript}</p>
                </div>
                <GoogleMap className="map" lat={lat} lng={lng}/>
                <br />
                <CommentWrite spot={param.spotname}  flag={flag} setFlag={setFlag}/>
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