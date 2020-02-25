import {LOGIN} from '../actions/types'

const initialState = {
    authenticated: false
}
export default function(state = initialState, action){
    switch(action.type){
        case LOGIN:
           return {authenticated: action.payload}

        default:
            return initialState   
    }
}