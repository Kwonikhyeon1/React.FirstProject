

// USER SESSION
export const getLoginedSessionID = () => {
    console.log('[session] getLoginedSessionID()');

    if(!localStorage.getItem('loginedSessionID')) return'';

    let loginedSessionID = localStorage.getItem('loginedSessionID');
    return loginedSessionID;

}

export const setLoginedSessionID = (id = '') => {
    console.log('[session] setLoginedSessionID()');
    
//    localStorage.setItem('loginedSessionID',id);
    if (id === '') {
        localStorage.removeItem('loginedSessionID');

    } else {
        localStorage.setItem('loginedSessionID', id);
        
    }

}