let loginedSessionID = '';
let adminLoginedSessionID = '';

// USER SESSION
export const getLoginedSessionID = () => {
    console.log('[session] getLoginedSessionID()');

    return loginedSessionID;

}

export const setLoginedSessionID = (id = '') => {
    console.log('[session] setLoginedSessionID()');
    
    loginedSessionID = id;

}