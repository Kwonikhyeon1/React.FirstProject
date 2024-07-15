import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ImgNoChange =(props) => {

//    const [curImgNo, setCurImgNo] = useState('0');
    const [curImg, setCurImg] = useState('0');
    const navigate = useNavigate();

    useEffect(() => {
        // console.log(props.allDB);
        // console.log(`[ImgNoChange]  props.spotTitle ==> ${props.spotTitle}`);
        // console.log(`[ImgNoChange]  props.allSpot ==> ${props.allSpot}`);
        // console.log(`[ImgNoChange]  props.curImgNo ==> ${props.curImgNo}`);

    },[])


    const imgNoChangeClick = (e, value, spot) => {
        console.log( '[ImgNoChange] imgNoChangeClick()');

        setCurImg(value);

    }



    // allDB={allDB} spotTitle={allDB[item].title} allSpot={allSpot}

    const goSub = (e, title) => {
        console.log('[ImgNoChange] goSub()');
        //allDB={props.allDB} spotName={props.spotTitle} imgNO={curImgNo}
        console.log('curimg ==> ', curImg)
        props.setPassImg(curImg);
        console.log('curimg ==> ', props.passImg)
        navigate(`/subpage/${title}`);
    }

    return (
        <>
        <div className='spot-img' >
        {
            
            props.allSpot !== undefined
            ?
            <img src={props.allDB[props.spotTitle].img_src[curImg]} onClick={(e) => goSub(e, props.spotTitle)}/>
            :
            null
        }
        </div>
        <span className='imgNo' onClick={(e) => imgNoChangeClick(e, '0')}>
            {
            curImg === '0'
            ?
            '●'
            :
            '○'
            }
        </span>
        <span className='imgNo' onClick={(e) => imgNoChangeClick(e, '1')}>
        {
            curImg === '1'
            ?
            '●'
            :
            '○'
            }
        </span>
        <span className='imgNo' onClick={(e) => imgNoChangeClick(e, '2')}>
        {
            curImg === '2'
            ?
            '●'
            :
            '○'
            }
        </span>

        </>

    );
}

export default ImgNoChange;