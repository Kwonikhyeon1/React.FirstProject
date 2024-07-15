import React, { useEffect, useState } from 'react'

import  { getAllAres, getAllDBJobj, getAllSpotArea, initTravelDB,   } from './travelDB.js'

import './main.css'


const Main = () => {

    const [allDB, setAllDB] = useState();
    const [allArea, setAllArea] = useState();
    const [allSpot, setAllSpot] = useState('');


    useEffect(() => {

    initTravelDB();

    setAllDB(getAllDBJobj());      // Object
    setAllArea(getAllAres());      // Array
    setAllSpot(getAllSpotArea());  // Array
   
        
},[])


    return(

        <div id="Main">
                    {
                        console.log(allDB) ? console.log(allSpot) ? console.log(allSpot[0]) : 'null-inner' : 'null-outer' 
                    }
            <ul className='bot-menu-one'>
                <li >

                    <div className='spot-img'>
                        {
                            
                            allSpot !== undefined
                            ?
                            <img src={allDB[allSpot[0]].img_src} />
                            :
                            null
                        }
                    </div>
                    <div className='spot-name'>
                        {
                            allSpot !== undefined
                            ?
                            allDB[allSpot[0]].spot
                            :
                            null
                        }
                    </div>
                    <div className='spot-address'>
                        {
                            allSpot !== undefined
                            // ?
                            // `${allDB[allSpot[0]].address.split(" ")[0]} ${allDB[allSpot[0]].address.split(" ")[1]}`
                            // :
                            // null                
                        }
                    </div>
                    <div className='spot-rank'>★</div>
                </li>

            </ul>
        </div>
    );
}

export default Main;

{/* <>

<li >
<div className='spot-img'>
    {
        <img src={allDB[allSpot[1]].img_src} />
    }
</div>
<div className='spot-name'>
    {
        allDB[allSpot[1]].spot
    }
</div>
<div className='spot-address'>
    {
        `${allDB[allSpot[1]].address.split(" ")[0]} ${allDB[allSpot[1]].address.split(" ")[1]}`
    }
</div>
<div className='spot-rank'>★</div>
</li>
<li >
<div className='spot-img'>
    {
        <img src={allDB[allSpot[2]].img_src} />
    }
</div>
<div className='spot-name'>
    {
        allDB[allSpot[2]].spot
    }
</div>
<div className='spot-address'>
    {
        `${allDB[allSpot[2]].address.split(" ")[0]} ${allDB[allSpot[2]].address.split(" ")[1]}`
    }
</div>
<div className='spot-rank'>★</div>
</li>
<li >
<div className='spot-img'>
    {
        <img src={allDB[allSpot[3]].img_src} />
    }
</div>
<div className='spot-name'>
    {
        allDB[allSpot[3]].spot
    }
</div>
<div className='spot-address'>
    {
        `${allDB[allSpot[3]].address.split(" ")[0]} ${allDB[allSpot[3]].address.split(" ")[1]}`
    }
</div>
<div className='spot-rank'>★</div>
</li>
</ul>

<ul  className='bot-menu-two'>
<li >
<div className='spot-img'>
    {
        <img src={allDB[allSpot[4]].img_src} />
    }
</div>
<div className='spot-name'>
    {
        allDB[allSpot[4]].spot
    }
</div>
<div className='spot-address'>
    {
        `${allDB[allSpot[4]].address.split(" ")[0]} ${allDB[allSpot[4]].address.split(" ")[1]}`
    }
</div>
<div className='spot-rank'>★</div>
</li>
<li >
<div className='spot-img'>
    {
        <img src={allDB[allSpot[5]].img_src} />
    }
</div>
<div className='spot-name'>
    {
        allDB[allSpot[5]].spot
    }
</div>
<div className='spot-address'>
    {
        `${allDB[allSpot[5]].address.split(" ")[0]} ${allDB[allSpot[5]].address.split(" ")[1]}`
    }
</div>
<div className='spot-rank'>★</div>
</li>
<li >
<div className='spot-img'>
    {
        <img src={allDB[allSpot[6]].img_src} />
    }
</div>
<div className='spot-name'>
    {
        allDB[allSpot[6]].spot
    }
</div>
<div className='spot-address'>
    {
        `${allDB[allSpot[6]].address.split(" ")[0]} ${allDB[allSpot[6]].address.split(" ")[1]}`
    }
</div>
<div className='spot-rank'>★</div>
</li>
<li >
<div className='spot-img'>
    {
        <img src={allDB[allSpot[7]].img_src} />
    }
</div>
<div className='spot-name'>
    {
        allDB[allSpot[7]].spot
    }
</div>
<div className='spot-address'>
    {
        `${allDB[allSpot[7]].address.split(" ")[0]} ${allDB[allSpot[7]].address.split(" ")[1]}`
    }
</div>
<div className='spot-rank'>★</div>
</li> 


</> */}