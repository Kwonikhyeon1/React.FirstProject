import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllAres, getAllDBJobj, getAllSpotArea, getCommentRank } from '../main/travelDB.js'
import ImgNoChange from '../main/ImgNoChange.jsx'
import Top from '../main/Top.jsx'
import './main.css'
import './Top.css'


const Main = (props) => {

    const param = useParams();
    const [curSpot, setCurSpot] = useState('');
 
    useEffect(() => {

        // initTravelDB();
        props.setAllDB(getAllDBJobj());   
        props.setAllArea( getAllAres());
        props.setAllSpot(getAllSpotArea(param.curMenu, param.result));  // Array

        if(props.curMenu !== undefined && props.curMenu === param.curMenu){
            document.getElementsByName(props.curMenu)[0].style.backgroundColor='#fff';
            document.getElementsByName(props.curMenu)[0].style.color='#000';
        } else if(props.curMenu !== undefined && param.curMenu === '서치') {
            document.getElementsByName(props.curMenu)[0].style.backgroundColor='';
            document.getElementsByName(props.curMenu)[0].style.color='';
        }
                
    },[props.menuFlag])


    return(
        <div id="Main">
            <ul className='bot-menu-one'>
            {
                props.allSpot
                ?
                props.allSpot.map((item, idx) =>
                {
                    return(
                        Number(idx) < 4 
                        ? 
                        <>
                            <li key={idx} >

                                <ImgNoChange allDB={props.allDB} spotTitle={props.allDB[item].title} allSpot={props.allSpot} curImg={props.curImg} setCurImg={props.setCurImg}
                                passImg={props.passImg} setPassImg={props.setPassImg} />

                                <div className='spot-title'  title={props.allDB[item].title.length >  12 ? `${props.allDB[item].title}` : ''}>
                                    {
                                        props.allSpot !== undefined
                                        ?
                                        `${props.allDB[item].title}`
                                        :
                                        null
                                    }
                                </div>
                                <div className='spot-address'>
                                    {
                                        props.allSpot !== undefined
                                        ?
                                        `${props.allDB[item].address.split(" ")[0]} ${props.allDB[item].address.split(" ")[1]}`
                                        :
                                        null                
                                    }
                                </div>
                                <div className='spot-rank'>{`${getCommentRank(props.allDB[item].title)}`}</div>
                            </li>
                        </>
                        :
                        <></>
                    )
                }
                )
                :
                null
            }
            </ul>

            <ul className='bot-menu-one'>
            {
                props.allSpot !== undefined
                ?
                props.allSpot.map((item, idx) =>
                {
                    return(
                        Number(idx) >= 4 
                        ? 
                            <>
                                <li key={idx} >

                                    <ImgNoChange allDB={props.allDB} spotTitle={props.allDB[item].title} allSpot={props.allSpot} curImg={props.curImg} setCurImg={props.setCurImg}
                                    passImg={props.passImg} setPassImg={props.setPassImg} />
                                    <div className='spot-title'  title={props.allDB[item].title.length >  12 ? `${props.allDB[item].title}` : ''} >
                                    {
                                        
                                        props.allSpot !== undefined
                                            ?
                                            `${props.allDB[item].title}`
                                            :
                                            null
                                    }
                                    </div>
                                    <div className='spot-address'>
                                        {
                                            props.allSpot !== undefined
                                            ?
                                            `${props.allDB[item].address.split(" ")[0]} ${props.allDB[item].address.split(" ")[1]}`
                                            :
                                            null                
                                        } 
                                    </div>
                                    <div className='spot-rank'>{`${getCommentRank(props.allDB[item].title)}`}</div>
                                </li>
                            </>
                        :
                        <></>
                    )
                }
                )
                :
                null
            }
            </ul>
            <Top />
        </div>
    );
}


export default Main;

