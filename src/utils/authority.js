// use localstorage to store the authority info, which might be sent from server in actual project
const AUTHORITY_TOKEN = "HASURA_AUTHORITY"
export function getAuthority(str) {
    // return localstorage.getItem("Hasura_AUTHORITY") || ['admin', 'user'];
    const authorityString = 
    typeof str === 'undefined' ? 
    localStorage.getItem(AUTHORITY_TOKEN) : str; // authorityString could be admin, "admin", ['admin']

    let authority;
    try {
        if(authorityString) {
            authority = JSON.parse(authorityString)
        }
    } catch (error) {
        authority = authorityString;
    }
    if( typeof authority === 'string') {
        return [authority];
    }
    return authority;
}


export function setAuthority(authority) {
    const proAuthority = typeof authority === 'string' ? [authority] : authority;
    return localStorage.setItem(AUTHORITY_TOKEN, JSON.stringify(proAuthority))
}
