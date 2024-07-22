import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const ImgNoChange =(props) => {
    //const [curImgNo, setCurImgNo] = useState('0');
    const [curImg, setCurImg] = useState('0');
    const navigate = useNavigate();

    const imgNoChangeClick = (e, value, spot) => {
        console.log( '[ImgNoChange] imgNoChangeClick()');

        setCurImg(value);

    }

    // allDB={allDB} spotTitle={allDB[item].title} allSpot={allSpot}
    const goSub = (e, title) => {
        console.log('[ImgNoChange] goSub()');

        props.setPassImg(curImg);
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