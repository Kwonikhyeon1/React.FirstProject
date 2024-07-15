import React, { useEffect, useState } from "react";
import './style.css'
import { useParams } from "react-router-dom";
import  { getAllAres, getAllDBJobj, getAllSpotArea, initTravelDB, findSpot, getCommentDB  } from '../main/travelDB.js'
import GoogleMap from './GoogleMap.tsx'

const SubPage = (props) =>{

    const param = useParams();
    const [review, setReview] = useState('');
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    
    

    useEffect(() => {
        // console.log(props.allDB)
        // console.log('sub page ====> ', props.passImg);
        // console.log(param.spotname);
        setReview(getCommentDB(param.spotname));
        setLat(props.allDB[param.spotname].geo_loc.split(',')[0]);
        setLng(props.allDB[param.spotname].geo_loc.split(',')[1]);
        
    },[])

    return(
        
        <div id="sub_wrap">
            
                <h2>{param.spotname}</h2>
                <h4>{props.allDB[param.spotname].address}</h4>
                <img className="sub_img" src={props.allDB[param.spotname].img_src[Number(props.passImg)]} /> 
                <div className="text_wrap">
                    <h3>상세정보</h3>
                    <p>{props.allDB[param.spotname].descript}</p>
                </div>
                <div className="google_map"> {`구글지도( 위도${lat}  경도${lng} )`} </div>
                <br />
                <br />
            
                <GoogleMap lat={lat} lng={lng}/>
        
                <br /><br />
                <div className="input_review"> 리뷰 입력  </div>
                    { review.length !== 0
                        ?
                        <div className="review_list"> 
                            {
                                review.length !== 0
                                ?
                                review.map(e => 
                                    <div>{e.comment}</div>
                                )
                                :
                                null
                            }
                        </div>
                        :
                        null
                    }




            



        </div>
    )
}

export default SubPage;