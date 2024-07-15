import React, { useEffect, useState } from 'react'


const StarRank = () => {



    const starClick = (e) => {

        let rank = Number(e.target.title)
        for (let i = 0; i < rank; i++) {
            document.getElementsByClassName('star')[i].innerText = '★'
        }

        for(let i = rank; i < 5; i++) {
            document.getElementsByClassName('star')[i].innerText = '☆'
        }

    }

    return(
        <>
        <div id='star-rank'>
            <span className='star' title='1' onClick={starClick}>☆</span>
            <span className='star' title='2' onClick={starClick}>☆</span>
            <span className='star' title='3' onClick={starClick}>☆</span>
            <span className='star' title='4' onClick={starClick}>☆</span>
            <span className='star' title='5' onClick={starClick}>☆</span>
        </div></>
    );
}

export default StarRank;

