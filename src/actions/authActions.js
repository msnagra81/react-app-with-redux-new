import { LOGIN } from "./types";

export const loginToApp = (userName, password) => dispatch =>{
    var authenticated = false;
    console.log('inside login method')
    if(userName==='test@test.com' && password ==='test'){
        authenticated = true;
    }
    dispatch({
        type: LOGIN,
        payload: authenticated
    })
}