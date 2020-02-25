import {SET_DETAILS} from '../actions/types'
import store from '../store/store'

const initialState = {
    detailProduct: {},
    // cart:[],
    // modalOpen: false,
    // modalProduct: {},
    // cartSubtotal: 0,
    // cartTax: 0,
    // cartTotal: 0,
    loading: true
}

export default function(state= initialState, action){
    switch(action.type){
        case SET_DETAILS:
            return {
                ...state,
                detailProduct: action.payload,
                loading: false
            }
        default:
            return initialState    
        }
    }
