import React, { useEffect, useState } from 'react'

import  { getAllAres, getAllDBJobj, getAllSpotArea, initTravelDB, findSpot  } from './travelDB.js'

import './main.css'


const Main = () => {

    const [allDB, setAllDB] = useState();
    const [allArea, setAllArea] = useState();
    const [allSpot, setAllSpot] = useState();


    useEffect(() => {

    initTravelDB();

    setAllDB(getAllDBJobj());      // Object
    setAllArea(getAllAres());      // Array
    setAllSpot(getAllSpotArea());  // Array
   
        
},[])


const test = (e, title) => {
    console.log('test()');

    console.log(title);
 console.log(findSpot(title));

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

{/* <>




</> */}