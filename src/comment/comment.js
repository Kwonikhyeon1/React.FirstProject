///변수///
export const MEMBER_DB_IN_LOCALSTORAGE = 'travelInfoMemberDB';
export const COMMENT_DB_IN_LOCALSTORAGE = 'travelCommentDB';



//MEMBER //
export const getTravelInfoMemberDB = () => {
    console.log('[MemberUtils] getTravelInfoMemberDB()');
    
    return localStorage.getItem(MEMBER_DB_IN_LOCALSTORAGE);

} 


export const setTravelInfoMemberDB = (mems) => {
    console.log('[MemberUtils] setTravelInfoMemberDB()');
    
    localStorage.setItem(MEMBER_DB_IN_LOCALSTORAGE, JSON.stringify(mems));

}


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
    
    if (localStorage.getItem(COMMENT_DB_IN_LOCALSTORAGE)) {

        return localStorage.getItem(COMMENT_DB_IN_LOCALSTORAGE);

    }

    return 
}


export const setTravelCommentDB = () => {
    console.log('[MemberUtils] setTravelCommentDB()');
    
    localStorage.setItem(COMMENT_DB_IN_LOCALSTORAGE,'');

    return 
}


export const addTravelCommentDB = (spot, newComment) => {
    console.log('[MemberUtils] addTravelCommentDB()');

    if (getTravelCommentDB() === undefined) setTravelCommentDB();
    
    let db = getTravelCommentDB()
    
    if(db) {
        
         let allComment = JSON.parse(getTravelCommentDB());

         if (allComment[spot]) {

            
            let allSpotComment = allComment[spot];
            for( let i = 0; i < allSpotComment.length ; i++){     

                if(allSpotComment[i].uId === newComment.uId) {
                    
                        allSpotComment.splice(i, 1);
                        break
                }
            }

            allComment[spot].push(newComment);

        } else {

            allComment[spot] = [];
            allComment[spot].push(newComment);

        }

        localStorage.setItem(COMMENT_DB_IN_LOCALSTORAGE, JSON.stringify(allComment));

    } else {

        let myComment = {};
        myComment[spot] =[newComment];
        localStorage.setItem(COMMENT_DB_IN_LOCALSTORAGE, JSON.stringify(myComment));
    }

}



export const getSpotAllCommentDB = (spot, id='') => {
    console.log('getSpotAllCommentDB()');
    
    console.log(getTravelCommentDB())
    if (getTravelCommentDB()) {
       
       let allComment = JSON.parse(getTravelCommentDB())

        let allSpotComment = allComment[spot]

        if (allSpotComment) {

            let myComment = '';
            for (let i = 0; i < allSpotComment.length; i++) {

                if (allSpotComment[i].uId === id) {

                    myComment = allSpotComment.splice(i,1);

                    break;
                }
            }

            if(myComment !== '') {
                
                allSpotComment.push(myComment[0])

            }

            return allSpotComment.reverse()
        }
    }

    return 
}


export const deleteMyComment = (spot, id) => {

    console.log('deleteMycomment()');
    
    
    if (getTravelCommentDB()) {
      
       let allComment = JSON.parse(getTravelCommentDB())

        let allSpotComment = allComment[spot]

        if (allSpotComment) {

            let myComment = '';
            for (let i = 0; i < allSpotComment.length; i++) {

                if (allSpotComment[i].uId === id) {

                    myComment = allSpotComment.splice(i,1);

                    break;
                }
            }

        }

        if (allSpotComment.length === 0) delete allComment[spot];
        
        localStorage.setItem(COMMENT_DB_IN_LOCALSTORAGE, JSON.stringify(allComment));
    }

    return 
}


export const getMyTravelComment = (uId) => {
    console.log('getMyTravelCommentDB()');

    let comments = JSON.parse(getTravelCommentDB());
    let myComment =  comments[uId];

    return myComment;

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