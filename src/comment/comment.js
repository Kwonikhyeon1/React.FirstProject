
///변수///
export const MEMBER_DB_IN_LOCALSTORAGE = 'travelInfoMemberDB';
export const COMMENT_DB_IN_LOCALSTORAGE = 'travelCommentDB';
let loginedSessionID = '';

//MEMBER //

export const getTravelInfoMemberDB = () => {
    console.log('[MemberUtils] getTravelInfoMemberDB()');
    
    return localStorage.getItem(MEMBER_DB_IN_LOCALSTORAGE);

} 

export const setTravelInfoMemberDB = (mems) => {
    console.log('[MemberUtils] setTravelInfoMemberDB()');
    
    localStorage.setItem(MEMBER_DB_IN_LOCALSTORAGE, JSON.stringify(mems));

}
// //로그인 세션 저장소
// export const getLoginedSessionID = () => {
//     console.log('getLoginedSessionID()');

//     return loginedSessionID;
// }

// export const setLoginedSessionID = (id) => {
//     console.log('setLoginedSessionID()');

//     loginedSessionID =id;
// }


//// 로그인시 확인 기능 ///

export const getMyInfo = (uId) => {
    console.log('[MemberUtils] getMyInfo()');

    if (getTravelInfoMemberDB() === null ) {
        return undefined;
    }

    let mems = JSON.parse(getTravelInfoMemberDB());
    let myInfo = mems[uId];

    return myInfo;

}

export const setMyInfo = (uId, myInfo) => {
    console.log('[utils] setMyInfo()');

    let mems = JSON.parse(getTravelInfoMemberDB());
    mems[uId] = myInfo;

    setTravelInfoMemberDB(mems);

}




// 코맨트 데이터

export const getTravelCommentDB = () => {
    console.log('[MemberUtils] getTravelCommentDB()');

    return localStorage.getItem(COMMENT_DB_IN_LOCALSTORAGE)
}


export const setTravelCommentDB = (comments) => {
    console.log('[MemberUtils] setTravelCommentDB()');

    localStorage.setItem(COMMENT_DB_IN_LOCALSTORAGE, JSON.stringify(comments));
}

export const getAllTravelCommentDB = () => {
    console.log('getAllTravelCommentDB()');

    return JSON.parse(getTravelCommentDB());
}

export const getMyTravelComment = (uId) => {
    console.log('getMyTravelCommentDB()');

    let comments = JSON.parse(getTravelCommentDB());
    let myComment =  comments[uId];

    return myComment;

}
export const setMyTravelComment = (uId, myComment) => {
    console.log('setMyTravelComment()');

    let comments = JSON.parse(getTravelCommentDB());
    comments[uId] = myComment;

    setTravelCommentDB(comments);
}










/// CURRENT TIME /////

export const getDateTime = () => {
    console.log('[MemberUtils] getDateTime()');

    let now = new Date();
    let fullYear = now.getFullYear();
    let month = now.getMonth() + 1;
    if (month < 10 ) month = '0' + month;
    let date = now.getDate();
    if (date < 10 ) date = '0' + date;
    let hours = now.getHours();
    if (hours < 10 ) hours = '0' + hours;
    let minutes = now.getMinutes();
    if (minutes < 10 ) minutes = '0' + minutes;
    let seconds = now.getSeconds();
    if (seconds < 10 ) seconds = '0' + seconds;

    return `${fullYear}/${month}/${date} ${hours}:${minutes}:${seconds}`;

}