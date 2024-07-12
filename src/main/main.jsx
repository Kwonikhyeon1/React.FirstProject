import React, { useEffect, useState } from 'react'

import  { getAllAres, getAllDBJobj, getAllSpotArea, initTravelDB, findSpot  } from './travelDB.js'

import './main.css'
import { useParams } from 'react-router-dom'


const Main = () => {

    const param = useParams();

    const [allDB, setAllDB] = useState();
    const [allArea, setAllArea] = useState();
    const [allSpot, setAllSpot] = useState();


    useEffect(() => {

    initTravelDB();

    

        setAllDB(getAllDBJobj());      // Object
        setAllArea(getAllAres());      // Array
        setAllSpot(getAllSpotArea(param.area));  // Array
    console.log(param.area, param.result);
            
    },[])


const test = (e, title) => {
    console.log('test()');
    console.log(param.area)

    console.log(allSpot);
    console.log(title);
    console.log(title.substr(0,10))
    // console.log(findSpot(title));

}

const mouseover = () => {
    console.log('mouseover()');

}

    return(

        <div id="Main">
            <ul className='bot-menu-one'>
            {
                allSpot !== undefined
                ?
                allSpot.map((item, idx) =>
                {
                    return(
                        Number(idx) < 4 
                        ? 
                            <>
                                <li key={idx} onClick={(e) => test(e, allDB[item].title )}>
                                    <div className='spot-img' >
                                    {
                                        
                                        allSpot !== undefined
                                        ?
                                        <img src={allDB[item].img_src} />
                                        :
                                        null
                                    }
                                    </div>
                                    <div className='spot-title' onMouseOver={mouseover} >
                                    {
                                        
                                        allSpot !== undefined
                                        ?
                                        `${allDB[item].title}`
                                        :
                                        null
                                    }
                                    </div>
                                    <div className='spot-address'>
                                        {
                                            allSpot !== undefined
                                            ?
                                            `${allDB[item].address.split(" ")[0]} ${allDB[item].address.split(" ")[1]}`
                                            :
                                            null                
                                        }
                                    </div>
                                    <div className='spot-rank'>★</div>
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
                allSpot !== undefined
                ?
                allSpot.map((item, idx) =>
                {
                    return(
                        Number(idx) >= 4 
                        ? 
                            <>
                                <li key={idx}  onClick={(e) => test(e, allDB[item].title )}>
                                    <div className='spot-img' >
                                    {
                                        
                                        allSpot !== undefined
                                        ?
                                        <img src={allDB[item].img_src} />
                                        :
                                        null
                                    }
                                    </div>
                                    <div className='spot-title' >
                                    {
                                        
                                        allSpot !== undefined
                                        ?
                                        `${allDB[item].title}`
                                        :
                                        null
                                    }
                                    </div>
                                    <div className='spot-address'>
                                        {
                                            allSpot !== undefined
                                            ?
                                            `${allDB[item].address.split(" ")[0]} ${allDB[item].address.split(" ")[1]}`
                                            :
                                            null                
                                        }
                                    </div>
                                    <div className='spot-rank'>★</div>
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

        </div>
    );
}

export default Main;

